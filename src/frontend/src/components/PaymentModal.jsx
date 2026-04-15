import {
  Building2,
  ChevronDown,
  CreditCard,
  Package,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";

// Inline SVG logo components — no external URLs needed
const GooglePayLogo = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
    <rect width="56" height="40" rx="6" fill="white" />
    <text x="4" y="28" fontSize="22" fontWeight="bold" fill="#4285F4">
      G
    </text>
    <text x="22" y="27" fontSize="13" fontWeight="600" fill="#5F6368">
      Pay
    </text>
    <circle cx="9" cy="36" r="2.5" fill="#EA4335" />
    <circle cx="16" cy="36" r="2.5" fill="#FBBC04" />
    <circle cx="23" cy="36" r="2.5" fill="#34A853" />
    <circle cx="30" cy="36" r="2.5" fill="#4285F4" />
  </svg>
);

const PhonePeLogo = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
    <rect width="56" height="40" rx="6" fill="#5F259F" />
    <text x="6" y="22" fontSize="16" fontWeight="bold" fill="white">
      Ph
    </text>
    <text x="6" y="36" fontSize="11" fill="#E0D4F7">
      Pe
    </text>
    <circle cx="44" cy="16" r="7" fill="white" opacity="0.2" />
    <text x="40" y="20" fontSize="11" fontWeight="bold" fill="white">
      ₹
    </text>
  </svg>
);

const PaytmLogo = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
    <rect width="56" height="40" rx="6" fill="#002970" />
    <text x="4" y="18" fontSize="12" fontWeight="bold" fill="#00BAF2">
      Pay
    </text>
    <text x="4" y="31" fontSize="12" fontWeight="bold" fill="white">
      tm
    </text>
    <rect x="4" y="34" width="48" height="2.5" rx="1.25" fill="#00BAF2" />
  </svg>
);

const BhimLogo = () => (
  <svg width="56" height="40" viewBox="0 0 56 40" aria-hidden="true">
    <rect width="56" height="40" rx="6" fill="#00529C" />
    <text x="4" y="17" fontSize="10" fontWeight="bold" fill="#FF6B00">
      BHIM
    </text>
    <text x="4" y="29" fontSize="10" fontWeight="bold" fill="white">
      UPI
    </text>
    <path
      d="M38 10 L48 20 L38 30 M48 20 L32 20"
      stroke="#FF6B00"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UPI_OPTIONS = [
  {
    id: "googlepay",
    label: "Google Pay",
    LogoComponent: GooglePayLogo,
    bgColor: "#f8f9fa",
  },
  {
    id: "phonepe",
    label: "PhonePe",
    LogoComponent: PhonePeLogo,
    bgColor: "#5F259F",
  },
  { id: "paytm", label: "Paytm", LogoComponent: PaytmLogo, bgColor: "#002970" },
  {
    id: "bhim",
    label: "BHIM UPI",
    LogoComponent: BhimLogo,
    bgColor: "#00529C",
  },
];

const BANKS = [
  "HDFC Bank",
  "SBI",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
];

function UpiAppCard({ upi, isSelected, onSelect }) {
  const { LogoComponent } = upi;
  return (
    <button
      type="button"
      onClick={() => onSelect(upi.id)}
      className={`relative flex flex-col items-center justify-center gap-0 rounded-2xl border-2 transition-all duration-200 focus:outline-none overflow-hidden ${
        isSelected
          ? "border-[#7B2FF7] shadow-[0_0_0_3px_rgba(123,47,247,0.18)] scale-[1.03]"
          : "border-gray-200 hover:border-[#c4a8ff] hover:scale-[1.01]"
      }`}
      style={{ minHeight: "96px", padding: 0 }}
      data-ocid={`upi-option-${upi.id}`}
      aria-pressed={isSelected}
    >
      {/* Inline SVG logo fills top portion */}
      <div
        className="w-full flex items-center justify-center"
        style={{
          backgroundColor: upi.bgColor,
          height: "64px",
          borderRadius: "14px 14px 0 0",
          padding: "8px 10px",
        }}
      >
        <LogoComponent />
      </div>

      {/* App name strip */}
      <div
        className={`w-full flex items-center justify-center gap-1 py-1.5 ${
          isSelected ? "bg-[#f5f0ff]" : "bg-white"
        }`}
        style={{ borderRadius: "0 0 14px 14px" }}
      >
        {isSelected && (
          <span className="text-[#7B2FF7] text-[10px] font-bold">✓</span>
        )}
        <span
          className={`text-xs font-bold leading-tight text-center ${
            isSelected ? "text-[#7B2FF7]" : "text-gray-700"
          }`}
        >
          {upi.label}
        </span>
      </div>
    </button>
  );
}

export default function PaymentModal({
  isOpen,
  onClose,
  onPaymentSuccess,
  grandTotal,
}) {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [selectedUpi, setSelectedUpi] = useState("googlepay");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess?.();
    }, 1800);
  };

  const handleOverlayKeyDown = (e) => {
    if (e.key === "Escape") onClose?.();
  };

  const methods = [
    { id: "upi", label: "UPI", icon: <Smartphone className="w-4 h-4" /> },
    { id: "card", label: "Card", icon: <CreditCard className="w-4 h-4" /> },
    {
      id: "netbanking",
      label: "Net Banking",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      icon: <Package className="w-4 h-4" />,
    },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div
        role="button"
        tabIndex={0}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleOverlayKeyDown}
        aria-label="Close payment modal"
        data-ocid="payment-modal-overlay"
      />

      <div
        className="relative bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl z-10 overflow-hidden"
        data-ocid="payment-modal"
        style={{ maxHeight: "92vh" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div>
            <h2 className="text-lg font-extrabold" style={{ color: "#1a1a1a" }}>
              Choose Payment Method
            </h2>
            <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
              Amount to pay:{" "}
              <span className="font-extrabold" style={{ color: "#7B2FF7" }}>
                ₹{grandTotal}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close"
            data-ocid="payment-modal-close"
          >
            <X className="w-5 h-5" style={{ color: "#374151" }} />
          </button>
        </div>

        {/* Method tabs */}
        <div
          className="flex border-b overflow-x-auto"
          style={{ borderColor: "#e5e7eb" }}
        >
          {methods.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedMethod(m.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-bold whitespace-nowrap transition-colors flex-1 justify-center ${
                selectedMethod === m.id
                  ? "border-b-2 text-[#7B2FF7]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={selectedMethod === m.id ? { borderColor: "#7B2FF7" } : {}}
              data-ocid={`payment-method-${m.id}`}
            >
              {m.icon}
              <span className="hidden sm:inline">{m.label}</span>
            </button>
          ))}
        </div>

        {/* Method content */}
        <div
          className="px-5 py-4 overflow-y-auto"
          style={{ maxHeight: "55vh" }}
        >
          {/* UPI */}
          {selectedMethod === "upi" && (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Select UPI App
              </p>
              {/* 2×2 grid of UPI app cards */}
              <div className="grid grid-cols-2 gap-3">
                {UPI_OPTIONS.map((upi) => (
                  <UpiAppCard
                    key={upi.id}
                    upi={upi}
                    isSelected={selectedUpi === upi.id}
                    onSelect={setSelectedUpi}
                  />
                ))}
              </div>
              {/* UPI ID input */}
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Or enter UPI ID
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="flex-1 px-3 py-2.5 rounded-xl border-2 text-sm outline-none transition-colors"
                    style={{ borderColor: "#e5e7eb", color: "#1a1a1a" }}
                    data-ocid="upi-id-input"
                  />
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#7B2FF7" }}
                    data-ocid="upi-verify-button"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card */}
          {selectedMethod === "card" && (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Credit / Debit Card
              </p>
              <div>
                <label
                  htmlFor="card-number"
                  className="text-xs font-semibold text-gray-600 block mb-1"
                >
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(formatCardNumber(e.target.value))
                  }
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-3 py-2.5 rounded-xl border-2 text-sm outline-none transition-colors"
                  style={{
                    borderColor: cardNumber ? "#7B2FF7" : "#e5e7eb",
                    color: "#1a1a1a",
                  }}
                  data-ocid="card-number-input"
                />
              </div>
              <div>
                <label
                  htmlFor="card-name"
                  className="text-xs font-semibold text-gray-600 block mb-1"
                >
                  Name on Card
                </label>
                <input
                  id="card-name"
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-3 py-2.5 rounded-xl border-2 text-sm outline-none transition-colors"
                  style={{
                    borderColor: cardName ? "#7B2FF7" : "#e5e7eb",
                    color: "#1a1a1a",
                  }}
                  data-ocid="card-name-input"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="card-expiry"
                    className="text-xs font-semibold text-gray-600 block mb-1"
                  >
                    Expiry
                  </label>
                  <input
                    id="card-expiry"
                    type="text"
                    value={cardExpiry}
                    onChange={(e) =>
                      setCardExpiry(formatExpiry(e.target.value))
                    }
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-3 py-2.5 rounded-xl border-2 text-sm outline-none transition-colors"
                    style={{
                      borderColor: cardExpiry ? "#7B2FF7" : "#e5e7eb",
                      color: "#1a1a1a",
                    }}
                    data-ocid="card-expiry-input"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="card-cvv"
                    className="text-xs font-semibold text-gray-600 block mb-1"
                  >
                    CVV
                  </label>
                  <input
                    id="card-cvv"
                    type="password"
                    value={cardCvv}
                    onChange={(e) =>
                      setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                    }
                    placeholder="•••"
                    maxLength={3}
                    className="w-full px-3 py-2.5 rounded-xl border-2 text-sm outline-none transition-colors"
                    style={{
                      borderColor: cardCvv ? "#7B2FF7" : "#e5e7eb",
                      color: "#1a1a1a",
                    }}
                    data-ocid="card-cvv-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Net Banking */}
          {selectedMethod === "netbanking" && (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Select Your Bank
              </p>
              <div className="relative">
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none appearance-none bg-white pr-10"
                  style={{
                    borderColor: selectedBank ? "#7B2FF7" : "#e5e7eb",
                    color: selectedBank ? "#1a1a1a" : "#9ca3af",
                  }}
                  data-ocid="netbanking-bank-select"
                >
                  <option value="">Choose your bank</option>
                  {BANKS.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              {selectedBank && (
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                  }}
                >
                  <span className="text-green-600 text-xs font-semibold">
                    ✓ You will be redirected to {selectedBank} for secure
                    payment
                  </span>
                </div>
              )}
            </div>
          )}

          {/* COD */}
          {selectedMethod === "cod" && (
            <div className="space-y-3">
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  backgroundColor: "#fef9c3",
                  border: "1px solid #fef08a",
                }}
              >
                <Package
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#854d0e" }}
                />
                <div>
                  <p className="text-sm font-bold" style={{ color: "#854d0e" }}>
                    Cash on Delivery
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#92400e" }}>
                    Keep exact change ready. Our delivery partner will collect ₹
                    {grandTotal} at your doorstep.
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Payment collected at delivery",
                  "No digital transaction needed",
                  "Estimated delivery in 10 minutes",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="text-green-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Pay button */}
        <div
          className="px-5 pb-5 pt-3 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <button
            type="button"
            onClick={handlePay}
            disabled={isProcessing}
            className="w-full py-4 rounded-xl font-extrabold text-base text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
            style={{ backgroundColor: "#7B2FF7" }}
            data-ocid="payment-pay-button"
          >
            {isProcessing ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                Processing...
              </>
            ) : (
              `Pay ₹${grandTotal}`
            )}
          </button>
          <p className="text-center text-xs mt-2 text-gray-400">
            🔒 100% Secure &amp; Encrypted Payment
          </p>
        </div>
      </div>
    </div>
  );
}
