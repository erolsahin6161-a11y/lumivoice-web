LUMIVOICE MEDIA WEBSITE
=======================

Overview
--------
Static corporate website for LumiVoice Media. The site is written in English and
uses plain HTML, CSS, and JavaScript with no framework, backend, or online form.
Privacy-friendly visitor analytics are provided by Umami when configured.

Pages and public files
----------------------
- index.html
- support.html
- privacy-policy.html
- hatip/index.html
- hatip/support/index.html
- hatip/privacy/index.html
- hatip/terms/index.html
- hatip/data-deletion/index.html
- 404.html
- robots.txt
- sitemap.xml
- assets/styles.css
- assets/script.js
- assets/analytics.js
- assets/favicon.svg
- assets/social-card.png

Contact
-------
Email: office@lumivoicemedia.com
Website: https://lumivoicemedia.com

All project and support inquiries use email links. The site states an intended
response time of 1–2 business days.

Hatip store and review links
---------------------------
Website / marketing: https://lumivoicemedia.com/hatip/
Support: https://lumivoicemedia.com/hatip/support/
Privacy policy: https://lumivoicemedia.com/hatip/privacy/
Terms: https://lumivoicemedia.com/hatip/terms/
Data deletion instructions: https://lumivoicemedia.com/hatip/data-deletion/
App Store: https://apps.apple.com/app/hatip/id6804464530
Android package: com.lumivoicemedia.hatip
Google Play: https://play.google.com/store/apps/details?id=com.lumivoicemedia.hatip

The existing support, privacy and terms URLs remain unchanged for store listings
and in-app links. All Hatip pages now cover both iOS and Android.

As of 22 October 2026, the Android app is in Google Play review and its public
listing returns HTTP 404. The Hatip page shows the review status without sending
visitors to an unavailable listing. After approval and public release, verify
the Google Play URL, replace the review card with a download link, and update
the review wording in the page's Open Graph and Twitter descriptions.

Use the app-specific privacy URL in Play Console, not the corporate website
privacy policy. The data deletion page is an optional resource for local data
and support-email deletion; Hatip's existing policy states that no user accounts
are created. Do not describe it as an account-deletion service.

This repository contains the website only. The privacy text retains the
existing app data-practice declarations; the Android permissions, SDKs, network
security and Play Console Data safety answers must be verified against the
Android app source before treating those declarations as a completed app audit.
Store links entered in Play Console or shipped inside the app are not editable
from this repository. New pages and edits go live only after site deployment.

Fonts and licensing
-------------------
DM Sans and Manrope are served locally as WOFF2 files. Their SIL Open Font
License texts are stored beside the font files in assets/fonts/.

Social links
------------
No social media accounts are published in the interface until the account URLs
have been independently confirmed as official LumiVoice Media profiles.

Analytics
---------
Umami page-view tracking is loaded on every page through assets/analytics.js.
Tracking remains disabled while websiteId is empty. To enable it, copy the
website ID and script URL from Umami's Website settings > Tracking code into the
config object at the top of that file. The tracker is restricted to
lumivoicemedia.com and www.lumivoicemedia.com and respects Do Not Track.

Privacy assumptions
-------------------
The included privacy text describes this version of the site: static pages,
local fonts, cookieless Umami analytics, no advertising cookies, no accounts,
and no web form. Review the policy whenever hosting, analytics configuration,
forms, embeds, or other data processing changes. Company-specific legal review
remains recommended.

Deployment
----------
1. Upload the complete folder while preserving its structure.
2. Configure the host to use index.html as the default document.
3. Configure 404.html as the custom not-found page.
4. Serve the site over HTTPS and redirect HTTP to HTTPS.
5. Confirm the canonical domain is https://lumivoicemedia.com/.
6. Submit sitemap.xml to the relevant search engine webmaster tools.
