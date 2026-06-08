# Pixel Portfolio Village

English visitor/admin version for GitHub Pages.

## Files to upload

- `index.html` : visitor page
- `admin.html` : admin page
- `village-data.js` : default village data in English
- `README.md` : this guide

## Main changes

1. Pixel-art inspired visual style: lower-resolution pixelated canvas, sharper square UI, stronger contrast.
2. Mobile controls: the large console is removed on mobile. A movement remote appears on the left, and fishing/drop actions appear on the right.
3. First-screen avatar introduction: a short English self-introduction bubble appears when the page opens.
4. English UI: visitor-facing labels, room text, guides, buttons, and default portfolio data are translated to English.

## Upload to GitHub Pages

Upload these four files to the root of your GitHub repository and overwrite the existing files.

Note: if Firebase already contains older Korean text, the page includes a fallback localizer for common default Korean strings. For complete publishing, open `admin.html`, check the English text, and press **Save to Firebase**.


## Latest tweak
- Pixel-art rendering updated with larger, more visible pixel blocks.
- Intro bubble now disappears when the visitor starts moving or interacts with the scene.
- Country naming updated to "Republic of Korea".


## v3 tweak
- Restored normal high-resolution 3D rendering and removed the pixelated canvas effect.
- Kept the mobile remote layout, English visitor UI updates, Republic of Korea wording, and auto-hiding intro bubble.


## v4 cat rendering fix
- Rebuilt index.html and admin.html from the clean 3D version.
- Removed leftover pixel-rendering rules.
- Restored normal antialiasing and device-pixel-ratio rendering.
- Added a cat material stabilization pass to prevent broken/transparent cat bodies.


## v5 black cat leg fix
- Added explicit visible paws/legs for the black cat.
- Removed the roof sleep rotation that could flip or hide the black cat legs.
- Raised the sleeping black cat body slightly so legs do not sink into the roof/body.


## v6 black cat four-leg correction
- Fixed the black cat so it has exactly four visible legs/paws.
- Removed the duplicated cylinder-leg + paw combination from the black cat.
- Kept the cheese cat's original four-leg structure.


## v8 black cat roof-height tuning
- Cheese cat unchanged.
- Black cat remains a separate stripe-less cat.
- On the ground, the black cat uses the same ground height as the cheese cat.
- On roofs, the black cat now sits a bit higher to match the pointed roof shapes.


## v9 black cat connected legs
- Replaced the separate floating paw shapes with four connected black-cat legs.
- Black cat now keeps exactly four legs, attached to the body.
- Cheese cat remains unchanged.


## v10 black cat standing rooftop pose
- Black cat roof positions were raised further to suit the pointed roofs.
- Black cat is now forced into a standing pose (no belly/loaf sleep flattening).
- Cheese cat remains unchanged.
