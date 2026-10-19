# Nottingham Bricklayers — updated website

Prepared 19 October 2026. This is a complete static GitHub Pages release. No build step, framework, paid dependency or new credentials are required by the website files.

## Replace the GitHub Pages files

1. Download a backup of the existing repository. Keep its GitHub settings and any existing `.github` deployment workflow.
2. Extract this ZIP. Copy its CONTENTS into the existing Pages publishing folder (normally the repository root, or `docs/` if that is what Settings → Pages uses). Do not upload the ZIP itself or add an extra parent folder. `index.html`, `CNAME`, `css/`, `images/`, `js/`, `fonts/`, `services/` and the other folders must sit together.
3. Replace the old files and commit. Include `.nojekyll`; GitHub's web uploader may hide dotfiles, so check this. No CNAME was present in the supplied ZIP: this release adds `nottinghambricklayers.co.uk` as requested. Preserve the repository's custom domain configuration, DNS and Pages publishing settings. If the deployed repository has additional files not in the supplied ZIP, do not delete them blindly. The old Apache `.htaccess` can be removed; GitHub Pages ignores it.
4. Wait for the Pages deployment to finish. Open the homepage, `/services/`, `/services/brick-pillars/`, `/services/wall-construction/` and `/contact/` on the actual domain. Check HTTPS and the domain in Settings → Pages.
5. From the live site, send ONE clearly labelled test enquiry using your own contact details. Confirm it reaches your actual Make scenario AND the final intended destination. Test the phone and WhatsApp links on a phone. The local tests do not prove these external services work.
6. Submit `https://nottinghambricklayers.co.uk/sitemap.xml` in Google Search Console. Inspect the homepage and priority service URLs after deployment. Crawling, indexing and rankings are not guaranteed.

If Pages publishes a different folder from the repository root, use that configured folder. Root-relative links assume this custom domain, not a `github.io/repository-name/` project subpath.

## Changes made

- Kept the supplied black/red/white palette, logo, image-led hero, service-card grid, responsive styling, navigation and quote popup. The long homepage is now about 820 words rather than repetitive long-form copy.
- Corrected Brick Pillars to `/services/brick-pillars/` and Wall Construction to `/services/wall-construction/`; rewrote both pages and every service description to match the service. Kept the other existing service slugs to minimise URL changes.
- Rewrote the homepage and service guides for Nottingham bricklayers, garden walls, repairs and repointing, with distinct page purposes and useful internal links.
- Made the enquiry-service role clear. Removed unsupported team, own-work, local-office, founding-history and quality-guarantee claims. No fabricated reviews or ratings were added.
- Replaced unverified LocalBusiness/address/geo/founding schema with accurate Organization, WebSite, WebPage and BreadcrumbList data. No contractor qualifications or reviews are claimed.
- Standardised metadata, canonical URLs and internal links on `https://nottinghambricklayers.co.uk/`, using directory/index.html routes compatible with static hosting.
- Retained all old source `.html` paths and the two old clean service paths as forwarding pages. These use immediate HTML meta-refresh with a canonical and clickable fallback. They are NOT HTTP 301 redirects. All primary navigation and sitemap links point directly to the new routes.
- Added CNAME, `.nojekyll`, a helpful 404 page, a clean robots file and a sitemap of the 15 intended indexable pages.
- Retained the six distant-town URLs for old visitors, but removed them from primary navigation, marked them noindex and removed them from the sitemap. Coverage there is unconfirmed; these are no longer near-duplicate local ranking pages. Gallery, privacy and terms are also noindex, follow.
- Preserved supplied photographs, labelled the gallery as illustrative/unverified, and stopped presenting it as completed work. Renamed service heroes use a relevant supplied garden-wall image rather than chimney/patio-labelled imagery.
- Properly re-encoded the supplied WebP assets (many contained PNG data), compressed supplied images and corrected image dimensions/srcset. Total image bytes fell from about 65.4 MB to 10.6 MB. Original uploaded image bytes remain in your original ZIP/version history.
- Self-hosted the existing Poppins font with its licence, avoiding external Google Fonts requests.
- Created a unique business-specific 1200×630 sharing card from supplied imagery and wired it into Open Graph and Twitter/X metadata with absolute HTTPS URLs. Actual platform cache refreshes must be checked after deployment.
- Added real tel links in place of click-only divs, prominent WhatsApp links, a sticky header with attached overlapping logo, and floating Call/WhatsApp/quote controls that appear only below the hero.
- Kept the Make webhook URL and its existing mapped payload fields. Added job postcode, including it inside the existing Lead Message field so an unchanged scenario mapping still receives it.
- Fixed false form success: confirmation now waits for an HTTP-success response. Invalid input is rejected; failure/timeout retains data and provides phone/WhatsApp alternatives. No real test lead was sent.
- Updated enquiry privacy/terms wording to describe independent contractors and data sharing. These pages need the operator details below before commercial lead collection.

## Details requiring your confirmation

1. **Phone and WhatsApp:** the supplied contact number `07367 856186` was preserved. Confirm it is yours, routed to the correct person and registered for WhatsApp. A syntactically valid link does not prove calls are answered or that WhatsApp is registered.
2. **Make delivery:** confirm the existing webhook/scenario is active and maps leads to the correct destination. The form still sends JSON to the original URL. Browser CORS access, scenario execution, downstream delivery and real acknowledgements must be tested on the live domain. An HTTP 2xx acknowledgement proves only endpoint acceptance, not eventual email/CRM delivery. No credentials or destination settings were available in the ZIP.
3. **Operator/privacy:** provide your legal operator/trading identity, correspondence address and privacy email; confirm the lawful basis, data retention, contractor recipients and any relevant international-transfer arrangements. Complete the privacy disclosures for the actual business setup. No false operator address has been inserted.
4. **Photograph rights:** confirm you have permission to publish every supplied image and whether any are actual contractor projects. Until verified, no project-history/location claims are made. The gallery remains noindex. Remove imagery if rights cannot be confirmed.
5. **Genuine business facts:** the original source asserted a physical Nottingham street address, founding in 2026, a locally operated building team, workmanship guarantees and completed projects. None were independently supported. These claims were removed from the public copy/schema; restore any only after you verify that they describe the actual contracting business represented.
6. **Contractor coverage:** confirm who receives enquiries, their permission/availability and the postcodes covered. Nearby Nottingham areas are enquiry areas, not promises of an available workforce. Distant-town pages remain noindex unless a real coverage basis and distinctive content are established.

## Routing examples

| Old source/URL | Updated primary URL |
|---|---|
| `/about.html` or `/about` | `/about/` |
| `/services.html` or `/services` | `/services/` |
| `/services/chimney-repairs.html` or `/services/chimney-repairs` | `/services/brick-pillars/` |
| `/services/patio-construction.html` or `/services/patio-construction` | `/services/wall-construction/` |
| `/services/garden-walls.html` or `/services/garden-walls` | `/services/garden-walls/` |
| `/contact.html` or `/contact` | `/contact/` |

The old chimney/patio URLs represented incorrectly labelled pillars/walls in the supplied site; this release does not add new chimney-repair or patio services.

## Verification and limits

See `LOCAL-TEST-RESULTS.md`. Tests cover the included files and local static hosting. They do not verify Google indexing, ranking gains, deployed redirects, DNS changes, WhatsApp registration or end-to-end Make delivery. GitHub Pages settings and HTTP redirects must be checked on the deployed site. No live repository or DNS changes have been made.
