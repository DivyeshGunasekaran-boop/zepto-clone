import { X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LoginModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState("phone");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const backdropRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setStep("phone");
        setPhone("");
        setOtp(["", "", "", "", "", ""]);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handlePhoneContinue = () => {
    if (phone.replace(/\D/g, "").length >= 10) {
      setStep("otp");
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      data-ocid="login-modal-backdrop"
    >
      <dialog
        open
        className="bg-card rounded-3xl w-full max-w-[400px] overflow-hidden relative p-0 border border-border"
        style={{
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.38), 0 8px 30px rgba(80,30,180,0.25)",
        }}
        aria-label="Login to QuickCart"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 text-white transition-smooth"
          aria-label="Close login modal"
          data-ocid="login-modal-close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div
          className="px-6 pt-7 pb-6 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(140deg, oklch(0.46 0.30 308) 0%, oklch(0.34 0.27 292) 100%)",
          }}
        >
          {/* Decorative */}
          <div
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: "rgba(255,214,0,0.12)" }}
          />
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD600 0%, #FF9800 100%)",
                  boxShadow: "0 3px 10px rgba(255,152,0,0.50)",
                }}
              >
                <Zap className="w-5 h-5 text-purple-900 fill-purple-900" />
              </div>
              <span className="text-white font-black text-2xl tracking-tight">
                QuickCart
              </span>
            </div>
            <p className="text-white/85 text-sm font-semibold">
              India's Fastest Grocery App
            </p>
            <p className="text-white/55 text-xs mt-0.5 font-medium">
              Delivered in 10 minutes ⚡
            </p>
          </div>
        </div>

        <div className="px-6 py-6">
          {step === "phone" ? (
            <>
              <p className="text-foreground font-extrabold text-base mb-1.5">
                Login or Sign Up
              </p>
              <p className="text-muted-foreground text-xs mb-4">
                Enter your mobile number to get started
              </p>
              <div
                className="flex rounded-xl border-2 border-input focus-within:border-primary overflow-hidden mb-4 transition-colors"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center gap-2 px-3 bg-muted border-r border-border">
                  <span className="text-base">🇮🇳</span>
                  <span className="text-sm font-bold text-foreground">+91</span>
                </div>
                <input
                  ref={inputRef}
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="Enter mobile number"
                  className="flex-1 h-11 px-3 bg-transparent text-foreground text-sm outline-none placeholder:text-muted-foreground"
                  maxLength={10}
                  data-ocid="phone-input"
                  onKeyDown={(e) => e.key === "Enter" && handlePhoneContinue()}
                />
              </div>
              <button
                type="button"
                onClick={handlePhoneContinue}
                className="w-full h-11 text-white font-extrabold text-sm rounded-xl hover:brightness-110 active:scale-[0.98] transition-smooth disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.48 0.27 308) 0%, oklch(0.38 0.26 290) 100%)",
                  boxShadow: "0 4px 16px oklch(0.48 0.27 308 / 0.40)",
                }}
                disabled={phone.length < 10}
                data-ocid="phone-continue-btn"
              >
                Continue →
              </button>
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">
                  or continue with
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <button
                type="button"
                className="w-full h-11 flex items-center justify-center gap-2.5 border-2 border-border rounded-xl text-foreground text-sm font-semibold hover:bg-muted transition-smooth"
                data-ocid="google-login-btn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                Sign in with Google
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Go back"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    Enter OTP
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Sent to +91 {phone}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mb-5 justify-center">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    value={otp[i]}
                    maxLength={1}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    className="w-11 h-12 text-center text-lg font-extrabold rounded-xl border-2 border-input focus:border-primary bg-background text-foreground outline-none transition-colors"
                    data-ocid={`otp-input-${i}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-11 text-white font-extrabold text-sm rounded-xl hover:brightness-110 active:scale-[0.98] transition-smooth disabled:opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.48 0.27 308) 0%, oklch(0.38 0.26 290) 100%)",
                  boxShadow: "0 4px 16px oklch(0.48 0.27 308 / 0.40)",
                }}
                disabled={otp.some((d) => d === "")}
                data-ocid="otp-verify-btn"
              >
                Verify OTP
              </button>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Didn't receive OTP?{" "}
                <button
                  type="button"
                  className="text-primary font-bold hover:underline"
                  data-ocid="resend-otp-btn"
                >
                  Resend
                </button>
              </p>
            </>
          )}

          <p className="text-center text-[11px] text-muted-foreground mt-4 leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              href="/terms"
              className="text-primary hover:underline font-medium"
            >
              Terms of Service
            </a>{" "}
            &amp;{" "}
            <a
              href="/privacy"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}
