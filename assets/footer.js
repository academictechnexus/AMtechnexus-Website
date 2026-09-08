(function () {
  "use strict";

  var mount = document.getElementById("site-footer");
  if (!mount) return;

  var year = new Date().getFullYear();

  var icons = {
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    phone:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mapPin:
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    instagram:
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    facebook:
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    twitter:
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
  };

  var socialClass =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white";

  var rendered = false;

  function renderFooter() {
    if (rendered || !mount) return;
    rendered = true;
    mount.outerHTML =
    '<footer class="border-t border-white/10 bg-[#0a0a0f] px-6 py-16 text-zinc-100" role="contentinfo">' +
    '<div class="mx-auto max-w-7xl">' +
    '<div class="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">' +
    '<div class="lg:col-span-2">' +
    '<a href="index.html" class="inline-block">' +
    '<img src="assets/amtechnexus-labs-logo.png" alt="AM Technexus Labs" class="h-9 w-auto brightness-0 invert" width="160" height="36">' +
    "</a>" +
    '<p class="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">Modern billing and management software built for restaurants, workshops, and societies.</p>' +
    '<div class="mt-6 flex flex-wrap gap-2">' +
    '<a href="https://wa.me/918807810394" target="_blank" rel="noreferrer" aria-label="WhatsApp" class="' +
    socialClass +
    ' hover:text-emerald-400">' +
    icons.whatsapp +
    "</a>" +
    '<a href="mailto:support@amtechnexus.com" aria-label="Email" class="' +
    socialClass +
    '">' +
    icons.mail +
    "</a>" +
    '<a href="https://www.instagram.com/amtechnexus/" target="_blank" rel="noreferrer" aria-label="Instagram" class="' +
    socialClass +
    '">' +
    icons.instagram +
    "</a>" +
    '<a href="https://www.facebook.com/profile.php?id=100073104771786" target="_blank" rel="noreferrer" aria-label="Facebook" class="' +
    socialClass +
    '">' +
    icons.facebook +
    "</a>" +
    '<a href="https://x.com/AMtechnexus" target="_blank" rel="noreferrer" aria-label="X (Twitter)" class="' +
    socialClass +
    '">' +
    icons.twitter +
    "</a>" +
    "</div></div>" +
    '<div><h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-300">Products</h2>' +
    '<nav class="mt-4 flex flex-col" aria-label="Products">' +
    '<a href="nexuspos.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusPOS</a>' +
    '<a href="nexusai.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusAI</a>' +
    '<a href="nexusbilling.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusBilling</a>' +
    '<a href="nexusapartments.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusApartments</a>' +
    '<a href="nexusrevu.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusRevu</a>' +
    '<a href="nexusbusiness.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusBusiness Suite</a>' +
    '<a href="nexusseo.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusSEO+</a>' +
    '<a href="nexusplay.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">NexusPlay</a>' +
    "</nav></div>" +
    '<div><h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-300">Company</h2>' +
    '<nav class="mt-4 flex flex-col" aria-label="Company">' +
    '<a href="about.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">About Us</a>' +
    '<a href="case-studies.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">Case Studies</a>' +
    '<a href="pricing.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">Pricing</a>' +
    '<a href="support.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">Support &amp; Docs</a>' +
    '<a href="contact.html" class="block py-1 text-sm text-zinc-400 transition-colors hover:text-white">Contact</a>' +
    "</nav></div>" +
    '<div><h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-300">Contact</h2>' +
    '<div class="mt-4 flex flex-col gap-2">' +
    '<a href="mailto:support@amtechnexus.com" class="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">' +
    icons.mail +
    " support@amtechnexus.com</a>" +
    '<a href="tel:+918807810394" class="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">' +
    icons.phone +
    " +91 88078 10394</a>" +
    '<a href="tel:+917010762956" class="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">' +
    icons.phone +
    " +91 70107 62956</a>" +
    '<a href="tel:+918072263675" class="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white">' +
    icons.phone +
    " +91 80722 63675</a>" +
    '<p class="flex items-center gap-2 text-sm text-zinc-400">' +
    icons.mapPin +
    " Tamil Nadu, India</p>" +
    "</div></div></div>" +
    '<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">' +
    "<p>© " +
    year +
    " AM Technexus Labs Private Limited. All rights reserved.</p>" +
    '<nav class="flex flex-wrap items-center justify-center gap-x-1 gap-y-1" aria-label="Legal">' +
    '<a href="#" class="transition-colors hover:text-zinc-300">Privacy Policy</a>' +
    '<span class="mx-2 text-zinc-600" aria-hidden="true">·</span>' +
    '<a href="#" class="transition-colors hover:text-zinc-300">Terms of Service</a>' +
    '<span class="mx-2 text-zinc-600" aria-hidden="true">·</span>' +
    '<a href="#" class="transition-colors hover:text-zinc-300">Cookie Policy</a>' +
    "</nav></div></div></footer>";
    if (window.tailwind && typeof window.tailwind.refresh === "function") {
      window.tailwind.refresh();
    }
  }

  if (window.__tailwindFooterLoaded) {
    renderFooter();
    return;
  }

  window.__tailwindFooterLoaded = true;
  var cfg = document.createElement("script");
  cfg.textContent = "tailwind.config = { corePlugins: { preflight: false } }";
  var tw = document.createElement("script");
  tw.id = "tailwind-cdn";
  tw.src = "https://cdn.tailwindcss.com";
  tw.onload = renderFooter;
  document.head.appendChild(cfg);
  document.head.appendChild(tw);
  setTimeout(renderFooter, 800);
})();
