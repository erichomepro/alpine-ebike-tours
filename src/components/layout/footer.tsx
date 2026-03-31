import Link from "next/link";

const tourLinks = [
  { name: "Alberta Rail Trail", href: "/tours/rail-trail-trestle-ride" },
  { name: "Lake Louise & Moraine Lake (2027)", href: "/lake-louise-ski-resort" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-[var(--font-heading)] text-2xl font-bold text-white">
                Alpine
              </span>{" "}
              <span className="font-[var(--font-heading)] text-2xl text-cream/80">
                E-Bike Tours
              </span>
            </Link>
            <p className="mt-4 text-sm text-cream/70 leading-relaxed">
              Guided e-bike tours through the Canadian Rockies. Experience Lake
              Louise and Alberta Parks like never before — no fitness required.
            </p>
            <div className="mt-6 space-y-2 text-sm text-cream/70">
              <p>Lake Louise & Alberta Parks</p>
              <p>
                <a
                  href="mailto:hello@alpineebiketours.ca"
                  className="hover:text-accent transition-colors"
                >
                  hello@alpineebiketours.ca
                </a>
              </p>
              <p>
                <a
                  href="tel:+14035551234"
                  className="hover:text-accent transition-colors"
                >
                  (403) 555-1234
                </a>
              </p>
            </div>
            {/* Social */}
            <div className="mt-6">
              <a
                href="https://www.facebook.com/share/g/1K9KRrKzcn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-accent transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Tours
            </h3>
            <ul className="mt-4 space-y-3">
              {tourLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Alpine E-Bike Tours. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-cream/50">
            <Link href="/privacy" className="hover:text-cream/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cream/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cancellation" className="hover:text-cream/80 transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
