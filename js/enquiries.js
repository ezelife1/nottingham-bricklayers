/* Keep the existing Make webhook and mapped field names. */
(function () {
  'use strict';
  document.querySelectorAll('form[id]').forEach(function (form) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (form.dataset.busy) return;
      var status = form.querySelector('.form-status');
      function error(message, field) {
        status.className = 'form-status error'; status.textContent = message;
        if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
      }
      form.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
      if (form.elements.website && form.elements.website.value) return;
      var name = form.elements.lead_name, phone = form.elements.lead_phone;
      var message = form.elements.lead_message, postcode = form.elements.lead_postcode;
      if (!name.value.trim()) return error('Please enter your name.', name);
      var digits = phone.value.replace(/\D/g, '');
      if (!/^[+\d() .-]+$/.test(phone.value) || digits.length < 10 || digits.length > 15)
        return error('Please enter a valid phone number, including the dialling code.', phone);
      if (!message.value.trim()) return error('Please describe the work you need.', message);
      if (!/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(postcode.value.trim()))
        return error('Please enter a full UK job postcode.', postcode);
      var button = form.querySelector('button[type="submit"]');
      var original = button.textContent;
      form.dataset.busy = '1';button.disabled = true;button.textContent = 'Sending…';
      status.textContent = 'Sending your enquiry…'; status.className = 'form-status';
      var controller = new AbortController();
      var timeout = setTimeout(function () { controller.abort(); }, 20000);
      var jobPostcode = postcode.value.trim().toUpperCase();
      var data = {
        'Lead Type': 'Website Form', 'Lead Name': name.value.trim(),
        'Lead Phone': phone.value.trim(),
        // Include postcode in existing mapped message, as well as its own field.
        'Lead Message': 'Job postcode: ' + jobPostcode + '\n' + message.value.trim(),
        'Lead Postcode': jobPostcode, 'Asset Phone': '07367856186'
      };
      try {
        var response = await fetch(form.action, {
          method: 'POST', headers: {'content-type': 'application/json'},
          body: JSON.stringify(data), signal: controller.signal
        });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        status.className = 'form-status success';
        status.textContent = 'Your enquiry has been submitted. Contractor availability and any quotation will be confirmed separately.';
        form.reset();
      } catch (err) {
        error('We could not confirm delivery. Your details are still here. Please call 07367 856186 or use WhatsApp. If you retry, please mention any earlier attempt.');
      } finally {
        clearTimeout(timeout);delete form.dataset.busy;button.disabled = false;button.textContent = original;
      }
    });
  });
  // Contact controls stay hidden until the full hero has scrolled past the header.
  var hero = document.querySelector('.hero, .page-hero');
  var header = document.querySelector('.site-header');
  var controls = document.querySelector('.mobile-fabs');
  function updateContacts() {
    if (!controls || !header) return;
    var threshold = hero ? hero.getBoundingClientRect().bottom : 220 - window.scrollY;
    controls.hidden = threshold > header.getBoundingClientRect().bottom;
  }
  window.addEventListener('scroll', updateContacts, {passive: true});
  window.addEventListener('resize', updateContacts);updateContacts();
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var nav = document.getElementById('main-nav');
      var toggle = document.getElementById('menuToggle');
      if (nav) nav.classList.remove('nav-open');
      if (toggle) { toggle.setAttribute('aria-expanded','false');toggle.classList.remove('is-open'); }
    }
  });
})();
