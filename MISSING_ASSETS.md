# Image status

## Exact Figma exports now in the project (from your two export zips)
Home projects (4), competency laptop, testimonial author, "Our Creative Atmosphere" photo, smartwatch blog card,
banner 3D monitor, Webby award logo, About video photo, all 6 Portfolio covers, all 9 Blog list photos, Blog Details header + video photo, 4 About team photos.

## Best-guess assignments — please check against Figma
The export files are named by layer order, not by where they are used, so I matched them by size and content.
If one looks wrong, just swap the file (same name) in `public/assets/`:
- Blog list `post-1.jpg` … `post-9.jpg` (order follows the card titles)
- Home blog cards `blog-1.png` / `blog-2.png` (laptop vs astronaut), team photos `team-1.jpg` … `team-4.jpg`
- All small avatars: `avatar-*.png` (Marvin, Annette, Jane, Ralph, Albert, Esther, Cameron)

## Fetched automatically with the exact originals (run `npm install` before ~24 Oct 2026)
Figma icons/logos/avatars listed in `assets-figma.json` overwrite the stand-ins (bookmark, star, quote, chevrons,
arrow doodle, client logos 2–6, Webby/FWA award logos, Home blog photos blog-1/2, avatars). Then commit `public/assets/`.

## Still missing / stand-ins
- `award-fwa.svg` ("2x best website" logo) – blank until you run `npm install` (fetched from Figma) or export it
- Service Details composites `service-dashboard.png`, `service-taskmaster.png`, `service-phone.png` – the export has the pieces
  (iPhone frame, avatars, donut logo) but not the finished 840×613 / 636×430 compositions; export those frames as PNG
- Service/“Why choose us” icons `service-*.svg`, `why-*.svg` and the inline icons in `src/components/Icons.jsx` are line-icon stand-ins
