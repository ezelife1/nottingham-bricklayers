# Local verification — 19 October 2026

## Static checks

- 49 HTML files checked: 24 substantive pages, 24 legacy forwarding files, one 404 page.
- No missing internal page links, anchor targets or referenced HTML assets.
- Exactly one H1 per HTML file; no duplicate element IDs or dangling aria-labelledby references.
- All 24 substantive pages have distinct titles, descriptions, correct non-www canonical URLs and valid JSON-LD.
- Sitemap parses and matches all 15 intended indexable canonical URLs exactly. Noindex pages and forwarding aliases are excluded.
- Both Open Graph and Twitter/X reference the same existing, unique 1200×630 social card; image dimensions verified with Pillow.
- All supplied image assets decode successfully; .webp files now contain actual WebP data.
- CNAME matches nottinghambricklayers.co.uk; .nojekyll present; no build system needed.
- Shared form JavaScript and all 46 retained inline scripts pass Node syntax checking.
- All forms retain the original HTTPS Make endpoint and original mapped fields; required name, phone, message and postcode fields exist.

## Chromium checks on local static hosting

- 390px: no overflow; sticky header/overlapping logo; contact buttons hidden over hero and visible below
- 768px: no overflow; sticky header/overlapping logo; contact buttons hidden over hero and visible below
- 1024px: no overflow; sticky header/overlapping logo; contact buttons hidden over hero and visible below
- 1440px: no overflow; sticky header/overlapping logo; contact buttons hidden over hero and visible below
- Mobile menu, service submenu, pillar navigation and accessible popup open/Escape close pass
- Form validation, simulated HTTP 500 preserves data, simulated HTTP 200 confirms/reset; existing Make payload preserved with postcode
- All 24 substantive routes return HTTP 200 locally and fit a 390px viewport
- No browser JavaScript exceptions

The form HTTP 200 and 500 responses were intercepted and simulated locally. No enquiry was sent to Make. HTTP 200 means endpoint acceptance, not proof of downstream CRM/email delivery.

- All 24 legacy forwarding files were also tested in Chromium and reach the intended local destination.

## Six website requirements

1. Call links: correct tel:+447367856186 destinations verified in files and rendered controls.
2. WhatsApp links: correct wa.me/447367856186 destinations verified; registration/reply capability unverified.
3. Header remains sticky in Chromium scrolling tests.
4. Prominent logo overlaps and remains attached/visible with the scrolling header.
5. Floating call/WhatsApp controls hidden above the hero end and shown below it at all four tested widths.
6. Unique 1200×630 social image exists and both metadata systems reference it on all substantive pages.

## Not tested as live deployment results

- New GitHub Pages deployment, DNS, HTTPS settings or www/non-www redirect behaviour.
- Whether browser forwarding aliases are served as intended on the actual domain (no claim of HTTP 301s).
- Real webhook CORS, credentials/scenario state, downstream lead delivery or reply times.
- Call answering, phone ownership or WhatsApp registration.
- Search Console submission, crawl/index status, Google rankings or rental income.
- Image publication rights, contractor qualifications or availability.

A read-only request to the existing homepage returned HTTP 200 with GitHub hosting headers during the work. It was the old live site, not this updated release.
