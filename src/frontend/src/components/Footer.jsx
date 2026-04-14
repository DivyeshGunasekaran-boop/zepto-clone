import { Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";

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
      className="mt-12 border-t border-white/5"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.13 0.07 308) 0%, oklch(0.10 0.05 300) 50%, oklch(0.08 0.03 290) 100%)",
      }}
      data-ocid="footer"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)",
                  boxShadow: "0 3px 12px rgba(255,152,0,0.45)",
                }}
              >
                <Zap className="w-5 h-5 text-purple-900 fill-purple-900" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                QuickCart
              </span>
            </div>
            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              India's fastest grocery delivery. Fresh produce, daily essentials
              &amp; more — delivered in 10 minutes.
            </p>
            {/* Stats row */}
            <div className="flex gap-4 mb-5">
              {[
                { value: "10 min", label: "Delivery" },
                { value: "50K+", label: "Products" },
                { value: "1Cr+", label: "Customers" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-sm font-extrabold text-white">
                    {value}
                  </div>
                  <div
                    className="text-[10px] font-medium"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-smooth hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.16)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.30)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                >
                  <Icon className="w-4 h-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-xs font-extrabold text-white mb-4 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-smooth hover:text-white inline-block hover:translate-x-0.5"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-xs font-extrabold mb-4 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-smooth hover:text-white inline-block hover:translate-x-0.5"
                    style={{ color: "rgba(255,255,255,0.50)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App download */}
          <div>
            <h3
              className="text-xs font-extrabold mb-4 tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Download App
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "rgba(255,255,255,0.50)" }}
            >
              Get 10-minute delivery on the go.
            </p>
            {[
              {
                icon: "▶",
                label: "Get it on",
                store: "Google Play",
                href: "#download-android",
              },
              {
                icon: "🍎",
                label: "Download on",
                store: "App Store",
                href: "#download-ios",
              },
            ].map(({ icon, label, store, href }) => (
              <a
                key={store}
                href={href}
                aria-label={`${label} ${store}`}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 mb-3 transition-smooth hover:scale-[1.02] w-fit"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.13)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
                }}
              >
                <span className="text-2xl" aria-hidden="true">
                  {icon}
                </span>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-wider font-medium"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </p>
                  <p className="text-sm font-bold text-white leading-tight">
                    {store}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
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
            ⚡ 10-min delivery · 🇮🇳 Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
