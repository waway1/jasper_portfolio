JASPER GARCE — PORTFOLIO
=========================

STRUCTURE (hinati para madaling i-debug):

index.html          -> structure/content lang, walang CSS/JS sa loob
css/base.css        -> variables, reset, shared components (cursor, buttons, reveal)
css/hero.css        -> preloader, hero section, menu drawer
css/sections.css    -> intro, work list, showcase, services, skills, about, process, testimonials
css/contact.css     -> contact footer, form, project case panel
css/responsive.css  -> mobile breakpoints + reduced-motion
js/core.js          -> shared constants, preloader, failsafe
js/menu.js          -> burger button + drawer
js/effects.js       -> custom cursor, parallax, magnetic buttons, scroll reveal
js/work.js          -> project hover previews + case-study panel (project data ANDITO)
js/contact.js       -> contact form + toast + footer clock
images/             -> dito ilagay ang photos (tingnan ang images/README.txt)
videos/             -> optional demo videos

DEBUGGING TIPS:
- May problema sa preloader/hero?      -> css/hero.css + js/core.js
- May problema sa project panel?       -> js/work.js (nandito rin ang project data/links)
- May problema sa contact form?        -> js/contact.js
- Mobile layout issues?                -> css/responsive.css
- Gustong palitan ang project info?    -> js/work.js, hanapin ang "const projects"

DEPLOY: i-upload ang BUONG folder sa GitHub Pages o InfinityFree.
IMPORTANT: dapat magkakasama sila — huwag i-upload ang index.html mag-isa.
