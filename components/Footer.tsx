import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const products = [
  { label: "NexusPOS", href: "nexuspos.html" },
  { label: "NexusAI", href: "nexusai.html" },
  { label: "NexusBilling", href: "nexusbilling.html" },
  { label: "NexusApartments", href: "nexusapartments.html" },
  { label: "NexusRevu", href: "nexusrevu.html" },
  { label: "NexusBusiness Suite", href: "nexusbusiness.html" },
] as const;

const companyLinks = [
  { label: "About Us", href: "about.html" },
  { label: "Case Studies", href: "case-studies.html" },
  { label: "Pricing", href: "pricing.html" },
  { label: "Support & Docs", href: "support.html" },
  { label: "Contact", href: "contact.html" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinkClass =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="index.html" className="inline-block">
              <img
                src="assets/amtechnexus-labs-logo.png"
                alt="AM Technexus Labs"
                className="h-9 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Modern billing and management software built for restaurants,
              workshops, and societies.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href="https://wa.me/918807810394"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={`${socialLinkClass} hover:text-emerald-400`}
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="mailto:support@amtechnexus.com"
                aria-label="Email"
                className={socialLinkClass}
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.instagram.com/amtechnexus/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={socialLinkClass}
              >
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073104771786"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={socialLinkClass}
              >
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href="https://x.com/AMtechnexus"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className={socialLinkClass}
              >
                <Twitter className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Products
            </h2>
            <nav className="mt-4 flex flex-col" aria-label="Products">
              {products.map((product) => (
                <a
                  key={product.href}
                  href={product.href}
                  className="block py-1 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {product.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Company
            </h2>
            <nav className="mt-4 flex flex-col" aria-label="Company">
              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-1 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Contact
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="mailto:support@amtechnexus.com"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                support@amtechnexus.com
              </a>
              <a
                href="tel:+918807810394"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                +91 88078 10394
              </a>
              <a
                href="tel:+917010762956"
                className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                +91 70107 62956
              </a>
              <p className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {year} AM Technexus Labs Private Limited. All rights reserved.
          </p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1"
            aria-label="Legal"
          >
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                {index > 0 ? (
                  <span className="mx-2 text-zinc-600" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                <a
                  href={link.href}
                  className="transition-colors hover:text-zinc-300"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
