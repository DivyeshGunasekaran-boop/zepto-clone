import { Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";

const CATEGORIES = [
  {
    heading: "Fruits & Vegetables",
    links: [
      "Fresh Fruits",
      "Fresh Vegetables",
      "Exotic Fruits",
      "Herbs & Seasonings",
      "Cut & Sprouts",
    ],
  },
  {
    heading: "Dairy & Breakfast",
    links: [
      "Milk",
      "Cheese",
      "Butter",
      "Eggs",
      "Yogurt",
      "Breakfast Cereals",
      "Bread",
    ],
  },
  {
    heading: "Snacks & Munchies",
    links: [
      "Chips & Crisps",
      "Namkeen",
      "Cookies & Biscuits",
      "Chocolates",
      "Dry Fruits",
      "Popcorn",
    ],
  },
  {
    heading: "Beverages",
    links: [
      "Cold Drinks",
      "Juices",
      "Water",
      "Tea & Coffee",
      "Energy Drinks",
      "Milkshakes",
    ],
  },
  {
    heading: "Household",
    links: [
      "Cleaning Supplies",
      "Laundry",
      "Kitchen Essentials",
      "Garbage Bags",
      "Tissues & Towels",
    ],
  },
  {
    heading: "Personal Care",
    links: [
      "Shampoo",
      "Body Wash",
      "Toothpaste",
      "Face Wash",
      "Deodorants",
      "Skin Care",
    ],
  },
  {
    heading: "Baby & Kids",
    links: ["Baby Food", "Diapers", "Baby Care", "Toys", "Baby Hygiene"],
  },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
  { label: "Partner With Us", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="mt-10 border-t border-border"
      style={{ background: "oklch(0.13 0.05 310)" }}
      data-ocid="footer"
    >
      {/* ── Category grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 pt-12 pb-10">
        <h2
          className="text-xs font-bold tracking-[0.18em] uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-8">
          {CATEGORIES.map(({ heading, links }) => (
            <div
              key={heading}
              className="footer-section"
              data-ocid={`footer.category.${heading.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
            >
              <h3
                className="text-sm font-semibold leading-snug mb-1"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#category"
                      className="footer-link block leading-snug"
                      style={{ color: "rgba(180,150,230,0.65)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.95)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(180,150,230,0.65)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="max-w-[1400px] mx-auto px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}
      />

      {/* ── Bottom info section ── */}
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-primary fill-primary" />
              <span className="text-2xl font-black text-white tracking-tight">
                QuickCart
              </span>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              India's fastest grocery delivery. Fresh produce, daily essentials
              &amp; more — delivered in 10 minutes.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-4">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid={`footer.social_${label.toLowerCase()}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide uppercase">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="footer-link"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App download */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wide uppercase">
              Download App
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Get 10-minute delivery on the go.
            </p>
            <a
              href="#download-android"
              aria-label="Download on Google Play"
              data-ocid="footer.google_play_button"
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 mb-3 transition-smooth hover:opacity-90 w-fit"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <span className="text-2xl" aria-hidden="true">
                ▶
              </span>
              <div>
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Get it on
                </p>
                <p className="text-sm font-bold text-white leading-tight">
                  Google Play
                </p>
              </div>
            </a>
            <a
              href="#download-ios"
              aria-label="Download on App Store"
              data-ocid="footer.app_store_button"
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 transition-smooth hover:opacity-90 w-fit"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <span className="text-2xl" aria-hidden="true">
                🍎
              </span>
              <div>
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Download on
                </p>
                <p className="text-sm font-bold text-white leading-tight">
                  App Store
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} QuickCart. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            🚀 10-min delivery · 🇮🇳 Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
