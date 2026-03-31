import Link from "next/link";

const tourLinks = [
  { name: "Lake Louise Grand Loop", href: "/tours/lake-louise-grand-loop" },
  { name: "Lake Louise Morning Experience", href: "/tours/lake-louise-morning-experience" },
  { name: "Moraine Lake & Rockpile", href: "/tours/moraine-lake-rockpile-adventure" },
  { name: "Rail Trail & Trestle Ride", href: "/tours/rail-trail-trestle-ride" },
  { name: "All Tours", href: "/tours" },
];

const trailLinks = [
  { name: "Lake Louise Grand Loop", href: "/trails/lake-louise-grand-loop" },
  { name: "Moraine Lake Road", href: "/trails/moraine-lake-road" },
  { name: "Rocky-Nordegg Rail Trail", href: "/trails/rocky-nordegg-rail-trail" },
  { name: "Interactive Trail Map", href: "/trails/map" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Community", href: "/community/ride-reports" },
];

export function Footer() {
  return (
    <footer className="bg-slate text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              Guided e-bike tours through the Canadian Rockies. Experience Banff
              like never before — no fitness required.
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

          {/* Trails */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Trails
            </h3>
            <ul className="mt-4 space-y-3">
              {trailLinks.map((link) => (
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
