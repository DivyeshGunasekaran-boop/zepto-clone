import {
  Building2,
  ChevronDown,
  CreditCard,
  Package,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";

// Brand logo images from reliable CDN sources
const UPI_OPTIONS = [
  {
    id: "googlepay",
    label: "Google Pay",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    bgColor: "#fff",
  },
  {
    id: "phonepe",
    label: "PhonePe",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/PhonePe_logo.png/512px-PhonePe_logo.png",
    bgColor: "#5f259f",
  },
  {
    id: "paytm",
    label: "Paytm",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/512px-Paytm_logo.png",
    bgColor: "#002970",
  },
  {
    id: "bhim",
    label: "BHIM UPI",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png",
    bgColor: "#fff",
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

// Fallback inline SVG logos in case CDN fails
function UpiLogoFallback({ appId }) {
  if (appId === "googlepay") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" width="36" height="36">
        <path
          fill="#4285F4"
          d="M24 9.5c3.5 0 6.6 1.3 9 3.4l6.7-6.7C35.8 2.4 30.3 0 24 0 14.7 0 6.7 5.3 2.7 13.1l7.8 6.1C12.5 13.2 17.8 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.9 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.8c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.4-4.1 7.4-10.1 7.4-17.1z"
        />
        <path
          fill="#FBBC05"
          d="M10.5 28.6A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6.1A23.9 23.9 0 0 0 0 24c0 3.8.9 7.5 2.5 10.7l8-6.1z"
        />
        <path
          fill="#EA4335"
          d="M24 48c6.3 0 11.6-2.1 15.5-5.7l-7.6-5.9c-2.1 1.4-4.8 2.2-7.9 2.2-6.2 0-11.5-3.7-13.5-9.2l-8 6.1C6.7 42.7 14.7 48 24 48z"
        />
      </svg>
    );
  }
  if (appId === "phonepe") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" width="36" height="36">
        <rect width="48" height="48" rx="12" fill="#5f259f" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontWeight="bold"
        >
          Pe
        </text>
      </svg>
    );
  }
  if (appId === "paytm") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" width="36" height="36">
        <rect width="48" height="48" rx="4" fill="#002970" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill="#00B9F1"
          fontSize="11"
          fontWeight="bold"
        >
          Paytm
        </text>
      </svg>
    );
  }
  // BHIM UPI
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" width="36" height="36">
      <rect
        width="48"
        height="48"
        rx="8"
        fill="#FFFFFF"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fill="#FF6600"
        fontSize="8"
        fontWeight="bold"
      >
        UPI
      </text>
      <text
        x="24"
        y="34"
        textAnchor="middle"
        fill="#0066CC"
        fontSize="8"
        fontWeight="bold"
      >
        BHIM
      </text>
    </svg>
  );
}

function UpiAppCard({ upi, isSelected, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onSelect(upi.id)}
      className={`relative flex flex-col items-center justify-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 focus:outline-none ${
        isSelected
          ? "border-[#7B2FF7] bg-[#f5f0ff] shadow-[0_0_0_3px_rgba(123,47,247,0.15)]"
          : "border-gray-200 bg-white hover:border-[#c4a8ff] hover:bg-[#faf5ff]"
      }`}
      data-ocid={`upi-option-${upi.id}`}
      aria-pressed={isSelected}
    >
      {/* Checkmark when selected */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#7B2FF7] flex items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 10 10"
            width="8"
            height="8"
            fill="none"
          >
            <path
              d="M1.5 5l2.5 2.5 4.5-4.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      {/* Logo area */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
        style={{
          backgroundColor: upi.bgColor === "#fff" ? "#f8f9fa" : upi.bgColor,
        }}
      >
        {!imgError ? (
          <img
            src={upi.logoUrl}
            alt={`${upi.label} logo`}
            className="w-10 h-10 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <UpiLogoFallback appId={upi.id} />
        )}
      </div>

      {/* App name */}
      <span
        className={`text-xs font-bold leading-tight text-center ${
          isSelected ? "text-[#7B2FF7]" : "text-gray-700"
        }`}
      >
        {upi.label}
      </span>
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
