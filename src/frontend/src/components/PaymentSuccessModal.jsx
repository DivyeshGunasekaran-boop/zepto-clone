import { useEffect, useState } from "react";

export default function PaymentSuccessModal({ isOpen, onClose, grandTotal }) {
  const [orderId] = useState(() =>
    Math.floor(10000000 + Math.random() * 90000000),
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setShow(true), 50);
      return () => clearTimeout(t);
    }
    setShow(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={`relative bg-white rounded-3xl shadow-2xl z-10 w-full max-w-sm overflow-hidden transition-all duration-500 ${
          show ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        data-ocid="payment-success-modal"
      >
        {/* Green top bar */}
        <div
          className="h-2 w-full"
          style={{ background: "linear-gradient(90deg, #22c55e, #16a34a)" }}
        />

        <div className="px-6 pt-8 pb-6 flex flex-col items-center text-center">
          {/* Animated checkmark */}
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-700 ${
              show ? "scale-100" : "scale-0"
            }`}
            style={{ backgroundColor: "#f0fdf4", border: "3px solid #22c55e" }}
          >
            <svg
              viewBox="0 0 52 52"
              className="w-10 h-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Payment success checkmark"
            >
              <title>Payment success</title>
              <circle
                cx="26"
                cy="26"
                r="25"
                stroke="#22c55e"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M14 27l8 8 16-16"
                stroke="#22c55e"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 38,
                  strokeDashoffset: show ? 0 : 38,
                  transition: "stroke-dashoffset 0.6s ease 0.3s",
                }}
              />
            </svg>
          </div>

          <h2
            className="text-2xl font-extrabold mb-1"
            style={{ color: "#1a1a1a" }}
          >
            Payment Successful!
          </h2>
          <p className="text-sm mb-1" style={{ color: "#6b7280" }}>
            Your order has been placed.
          </p>
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full mt-1 mb-4"
            style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
          >
            <span className="text-green-600 text-sm">⚡</span>
            <p className="text-sm font-bold" style={{ color: "#0C831F" }}>
              Estimated delivery: 10 minutes
            </p>
          </div>

          {/* Order details card */}
          <div
            className="w-full rounded-2xl p-4 mb-5 text-left"
            style={{ backgroundColor: "#fafafa", border: "1px solid #e5e7eb" }}
          >
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                Order ID
              </p>
              <p
                className="text-sm font-extrabold"
                style={{ color: "#7B2FF7" }}
              >
                #QC{orderId}
              </p>
            </div>
            {grandTotal && (
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                  Amount Paid
                </p>
                <p
                  className="text-sm font-extrabold"
                  style={{ color: "#111827" }}
                >
                  ₹{grandTotal}
                </p>
              </div>
            )}
          </div>

          {/* Steps */}
          <div className="w-full flex items-center justify-between mb-6 px-2">
            {["Order Placed", "Preparing", "On the way", "Delivered"].map(
              (step, i) => (
                <div key={step} className="flex flex-col items-center gap-1">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      backgroundColor: i === 0 ? "#22c55e" : "#e5e7eb",
                      color: i === 0 ? "white" : "#9ca3af",
                    }}
                  >
                    {i === 0 ? "✓" : i + 1}
                  </div>
                  <span
                    className="text-[9px] font-semibold text-center"
                    style={{ color: i === 0 ? "#22c55e" : "#9ca3af" }}
                  >
                    {step}
                  </span>
                </div>
              ),
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "#7B2FF7" }}
            data-ocid="payment-success-close"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
