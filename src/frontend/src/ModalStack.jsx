import { Check, MapPin, ShoppingCart, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "./context/CartContext";

// ─── Helpers ────────────────────────────────────────────────────────────────

function Overlay({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="presentation"
    >
      {children}
    </div>
  );
}

function useEscClose(dispatch) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") dispatch({ type: "CLOSE_MODAL" });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [dispatch]);
}

// ─── UPI Brand SVGs ──────────────────────────────────────────────────────────

function GooglePayLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="44"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Pay logo"
      role="img"
    >
      <title>Google Pay</title>
      <path
        fill="#4285F4"
        d="M24 9.5c3.04 0 5.78 1.09 7.93 2.88l5.91-5.91C34.16 3.24 29.39 1 24 1 14.82 1 7.1 6.57 3.86 14.36l6.87 5.34C12.28 13.62 17.66 9.5 24 9.5z"
      />
      <path
        fill="#34A853"
        d="M46.14 24.5c0-1.63-.15-3.2-.42-4.72H24v8.94h12.44c-.54 2.87-2.17 5.31-4.63 6.95l7.11 5.52C43.37 37.18 46.14 31.27 46.14 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.73 28.35A14.44 14.44 0 0 1 9.5 24c0-1.52.26-3 .73-4.35L3.36 14.3A23.12 23.12 0 0 0 1 24c0 3.7.87 7.2 2.41 10.3l7.32-5.95z"
      />
      <path
        fill="#EA4335"
        d="M24 47c5.42 0 9.97-1.79 13.29-4.86l-7.11-5.52c-1.88 1.27-4.28 2.02-6.18 2.02-6.29 0-11.63-4.08-13.54-9.76l-7.02 5.44C7.22 41.5 15.01 47 24 47z"
      />
      <circle fill="#4285F4" cx="24" cy="24" r="4" />
    </svg>
  );
}

function PhonePeLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="44"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PhonePe logo"
      role="img"
    >
      <title>PhonePe</title>
      <rect width="48" height="48" rx="12" fill="#5f259f" />
      <path
        fill="white"
        d="M14 12h8.5c5.8 0 10.5 4.7 10.5 10.5S28.3 33 22.5 33H20v5h-6V12zm6 5v11h2.5c2.5 0 4.5-2 4.5-4.5v-2C27 19 25 17 22.5 17H20z"
      />
      <circle fill="#04C9D3" cx="35" cy="34" r="5" />
    </svg>
  );
}

function PaytmLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="44"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Paytm logo"
      role="img"
    >
      <title>Paytm</title>
      <rect width="48" height="48" rx="12" fill="#00B9F5" />
      <text
        x="5"
        y="22"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="11"
        fill="white"
      >
        pay
      </text>
      <rect x="5" y="24" width="20" height="8" rx="2" fill="#012A6A" />
      <text
        x="6"
        y="31"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="white"
      >
        tm
      </text>
      <rect x="28" y="14" width="14" height="8" rx="2" fill="white" />
      <text
        x="29"
        y="21"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="#012A6A"
      >
        Pay
      </text>
      <rect x="28" y="26" width="14" height="8" rx="2" fill="#012A6A" />
      <text
        x="29"
        y="33"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="8"
        fill="white"
      >
        UPI
      </text>
    </svg>
  );
}

function BhimLogo() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="44"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BHIM UPI logo"
      role="img"
    >
      <title>BHIM UPI</title>
      <rect width="48" height="48" rx="12" fill="#1a237e" />
      <path fill="#FF8F00" d="M8 32 L24 10 L40 32 Z" />
      <path fill="white" d="M15 29 L24 16 L33 29 Z" />
      <text
        x="8"
        y="43"
        fontFamily="Arial,sans-serif"
        fontWeight="900"
        fontSize="9"
        fill="white"
      >
        BHIM
      </text>
      <text
        x="30"
        y="43"
        fontFamily="Arial,sans-serif"
        fontWeight="700"
        fontSize="7"
        fill="#FF8F00"
      >
        UPI
      </text>
    </svg>
  );
}

// ─── ProductDetailModal ───────────────────────────────────────────────────────

function ProductDetailModal({ product, dispatch }) {
  const [qty, setQty] = useState(1);
  useEscClose(dispatch);

  if (!product) return null;

  const stars = Math.round(product.rating ?? 4);

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      dispatch({ type: "ADD_ITEM", payload: product });
    }
    dispatch({ type: "CLOSE_MODAL" });
  }

  function stopProp(e) {
    e.stopPropagation();
  }

  return (
    <Overlay onClose={() => dispatch({ type: "CLOSE_MODAL" })}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto shadow-2xl"
        onClick={stopProp}
        onKeyDown={stopProp}
        aria-label="Product details"
        data-ocid="product_detail.dialog"
      >
        <div className="relative">
          <button
            type="button"
            className="absolute top-3 right-3 z-10 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            aria-label="Close product detail"
            data-ocid="product_detail.close_button"
          >
            <X size={18} className="text-gray-600" />
          </button>

          <div className="md:flex">
            <div className="md:w-2/5 flex-shrink-0">
              <img
                src={
                  product.image ||
                  product.imageUrl ||
                  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProduct%3C/text%3E%3C/svg%3E`
                }
                alt={product.name}
                className="w-full rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl object-cover"
                style={{ height: "300px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProduct%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>

            <div className="md:w-3/5 p-6">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 capitalize"
                style={{ background: "#ede9fe", color: "#7c3aed" }}
              >
                {product.category}
              </span>

              <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                {product.name}
              </h2>
              {product.brand && (
                <p className="text-sm text-gray-500 mb-1">by {product.brand}</p>
              )}
              {product.weight && (
                <p className="text-xs text-gray-400 mb-3">{product.weight}</p>
              )}

              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <span className="text-base text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                {product.discount && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "#dcfce7", color: "#16a34a" }}
                  >
                    {product.discount}
                  </span>
                )}
              </div>

              {product.rating && (
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        fill={s <= stars ? "#f59e0b" : "none"}
                        stroke={s <= stars ? "#f59e0b" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.rating} ({product.reviewCount ?? 0} reviews)
                  </span>
                </div>
              )}

              {product.description && (
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
              )}

              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    className="px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    data-ocid="product_detail.qty_decrement"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-semibold text-gray-900 min-w-10 text-center">
                    {qty}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                    data-ocid="product_detail.qty_increment"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                  }}
                  onClick={handleAdd}
                  data-ocid="product_detail.add_to_cart_button"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

// ─── PaymentModal ─────────────────────────────────────────────────────────────

function PaymentModal({ orderTotal, dispatch }) {
  const [tab, setTab] = useState("upi");
  const [selectedUpi, setSelectedUpi] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("");
  const [showCard, setShowCard] = useState(false);
  useEscClose(dispatch);

  const upiApps = [
    { id: "gpay", name: "Google Pay", Logo: GooglePayLogo },
    { id: "phonepe", name: "PhonePe", Logo: PhonePeLogo },
    { id: "paytm", name: "Paytm", Logo: PaytmLogo },
    { id: "bhim", name: "BHIM UPI", Logo: BhimLogo },
  ];

  const banks = [
    "SBI",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
  ];

  const tabs = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Card" },
    { id: "netbanking", label: "Net Banking" },
    { id: "cod", label: "COD" },
  ];

  function handlePay() {
    dispatch({ type: "CLOSE_MODAL" });
    setTimeout(() => {
      dispatch({ type: "OPEN_MODAL", payload: { modal: "success" } });
    }, 100);
  }

  function handleExpiryChange(e) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length >= 3) v = `${v.slice(0, 2)}/${v.slice(2)}`;
    setExpiry(v);
  }

  function stopProp(e) {
    e.stopPropagation();
  }

  return (
    <Overlay onClose={() => dispatch({ type: "CLOSE_MODAL" })}>
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
        onClick={stopProp}
        onKeyDown={stopProp}
        aria-label="Payment options"
        data-ocid="payment.dialog"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Choose Payment Method
            </h2>
            <p
              className="text-sm font-semibold mt-0.5"
              style={{ color: "#7c3aed" }}
            >
              Total: ₹{orderTotal}
            </p>
          </div>
          <button
            type="button"
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            aria-label="Close payment"
            data-ocid="payment.close_button"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        <div className="flex border-b border-gray-100">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
                tab === t.id
                  ? "border-purple-600 text-purple-700"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setTab(t.id)}
              data-ocid={`payment.tab.${t.id}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6" style={{ minHeight: "260px" }}>
          {tab === "upi" && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Pay via UPI App
              </p>
              <div className="grid grid-cols-2 gap-3">
                {upiApps.map(({ id, name, Logo }) => (
                  <button
                    key={id}
                    type="button"
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      selectedUpi === id
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedUpi(id)}
                    aria-pressed={selectedUpi === id}
                    data-ocid={`payment.upi_app.${id}`}
                  >
                    <Logo />
                    <span className="text-xs font-semibold text-gray-700">
                      {name}
                    </span>
                    <span
                      className={`w-3 h-3 rounded-full border-2 transition-colors ${
                        selectedUpi === id
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {selectedUpi && (
                <p
                  className="text-sm text-center mt-3 font-medium"
                  style={{ color: "#7c3aed" }}
                >
                  Paying via {upiApps.find((a) => a.id === selectedUpi)?.name}
                </p>
              )}
            </div>
          )}

          {tab === "card" && (
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-gray-700">
                Credit / Debit Card
              </p>
              <div>
                <label
                  htmlFor="card-number"
                  className="block text-xs text-gray-500 mb-1 font-medium"
                >
                  Card Number
                </label>
                <div className="relative">
                  <input
                    id="card-number"
                    type={showCard ? "text" : "password"}
                    maxLength={16}
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(e.target.value.replace(/\D/g, ""))
                    }
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    data-ocid="payment.card_number_input"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-purple-600"
                    onClick={() => setShowCard(!showCard)}
                    aria-label={
                      showCard ? "Hide card number" : "Show card number"
                    }
                  >
                    {showCard ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label
                    htmlFor="card-expiry"
                    className="block text-xs text-gray-500 mb-1 font-medium"
                  >
                    Expiry (MM/YY)
                  </label>
                  <input
                    id="card-expiry"
                    type="text"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={handleExpiryChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    data-ocid="payment.card_expiry_input"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="card-cvv"
                    className="block text-xs text-gray-500 mb-1 font-medium"
                  >
                    CVV
                  </label>
                  <input
                    id="card-cvv"
                    type="password"
                    maxLength={3}
                    placeholder="•••"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    data-ocid="payment.card_cvv_input"
                  />
                </div>
              </div>
            </div>
          )}

          {tab === "netbanking" && (
            <div>
              <label
                htmlFor="bank-select"
                className="block text-sm font-semibold text-gray-700 mb-4"
              >
                Select Your Bank
              </label>
              <select
                id="bank-select"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                data-ocid="payment.bank_select"
              >
                <option value="">-- Select a bank --</option>
                {banks.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              {bank && (
                <p className="text-sm mt-3 text-gray-600">
                  You will be redirected to <strong>{bank}</strong> net banking
                  portal.
                </p>
              )}
            </div>
          )}

          {tab === "cod" && (
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "#ede9fe" }}
              >
                <span className="text-3xl" role="img" aria-label="Cash">
                  💵
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">
                  Pay with Cash on Delivery
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Pay ₹{orderTotal} in cash when your order arrives. Our
                  delivery partner will collect the amount at your door.
                </p>
              </div>
              <div className="text-xs text-gray-400 bg-gray-50 rounded-lg p-3 w-full">
                <span role="img" aria-label="Tip">
                  💡
                </span>{" "}
                Please keep exact change ready for a smooth delivery experience.
              </div>
            </div>
          )}
        </div>

        <div className="px-6 pb-6">
          <button
            type="button"
            className="w-full py-3.5 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
            onClick={handlePay}
            data-ocid="payment.pay_button"
          >
            Pay ₹{orderTotal}
          </button>
        </div>
      </div>
    </Overlay>
  );
}

// ─── PaymentSuccessModal ──────────────────────────────────────────────────────

function PaymentSuccessModal({ dispatch }) {
  const [orderId] = useState(() => `ORD-${Date.now().toString().slice(-8)}`);

  function handleContinue() {
    dispatch({ type: "CLEAR_CART" });
    dispatch({ type: "CLOSE_MODAL" });
  }

  return (
    <Overlay onClose={handleContinue}>
      <div
        className="bg-white rounded-2xl max-w-sm w-full shadow-2xl p-8 text-center"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label="Order placed successfully"
        data-ocid="payment_success.dialog"
      >
        <div className="flex justify-center mb-5">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ background: "#dcfce7" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "#16a34a" }}
            >
              <Check size={32} color="white" strokeWidth={3} />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2" style={{ color: "#16a34a" }}>
          Order Placed!
        </h2>
        <p className="text-gray-600 mb-4">
          Your order will be delivered in <strong>12-15 minutes!</strong>
        </p>

        <div className="bg-gray-50 rounded-xl p-3 mb-6">
          <p className="text-xs text-gray-400 mb-1">Order ID</p>
          <p className="font-mono font-bold text-gray-800">{orderId}</p>
        </div>

        <button
          type="button"
          className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
          onClick={handleContinue}
          data-ocid="payment_success.continue_button"
        >
          Continue Shopping
        </button>
      </div>
    </Overlay>
  );
}

// ─── LoginModal ───────────────────────────────────────────────────────────────

function LoginModal({ dispatch }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  useEscClose(dispatch);

  function handleSendOtp() {
    if (phone.replace(/\D/g, "").length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setStep(2);
  }

  function handleVerify() {
    if (otp.replace(/\D/g, "").length < 4) {
      setError("Please enter a valid OTP");
      return;
    }
    dispatch({ type: "LOGIN", payload: { name: "User", phone } });
    dispatch({ type: "CLOSE_MODAL" });
  }

  function stopProp(e) {
    e.stopPropagation();
  }

  return (
    <Overlay onClose={() => dispatch({ type: "CLOSE_MODAL" })}>
      <div
        className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden"
        onClick={stopProp}
        onKeyDown={stopProp}
        aria-label="Login"
        data-ocid="login.dialog"
      >
        <div
          className="px-8 pt-8 pb-6 text-center"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
        >
          <div className="text-white text-3xl font-black tracking-tight mb-1">
            QuickCart
          </div>
          <p className="text-purple-200 text-sm">
            Groceries delivered in minutes
          </p>
        </div>

        <div className="p-8">
          {step === 1 ? (
            <>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Login or Sign Up
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Enter your mobile number to continue
              </p>
              <label htmlFor="login-phone" className="sr-only">
                Mobile number
              </label>
              <div className="flex border border-gray-200 rounded-xl overflow-hidden mb-3">
                <span
                  className="flex items-center px-3 bg-gray-50 text-gray-500 text-sm font-medium border-r border-gray-200"
                  aria-hidden="true"
                >
                  🇮🇳 +91
                </span>
                <input
                  id="login-phone"
                  type="tel"
                  maxLength={10}
                  placeholder="Mobile number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  className="flex-1 px-4 py-3 text-sm focus:outline-none"
                  data-ocid="login.phone_input"
                />
              </div>
              {error && (
                <p
                  className="text-xs text-red-500 mb-3"
                  data-ocid="login.error_state"
                >
                  {error}
                </p>
              )}
              <button
                type="button"
                className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                }}
                onClick={handleSendOtp}
                data-ocid="login.send_otp_button"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Verify OTP
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Sent to <strong>+91 {phone}</strong>
              </p>
              <label htmlFor="login-otp" className="sr-only">
                OTP
              </label>
              <input
                id="login-otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, ""));
                  setError("");
                }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3 text-center tracking-widest text-xl font-bold"
                data-ocid="login.otp_input"
              />
              {error && (
                <p
                  className="text-xs text-red-500 mb-3"
                  data-ocid="login.error_state"
                >
                  {error}
                </p>
              )}
              <button
                type="button"
                className="w-full py-3 rounded-xl font-bold text-white mb-3 transition-all hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#7c3aed,#6d28d9)",
                }}
                onClick={handleVerify}
                data-ocid="login.verify_button"
              >
                Verify &amp; Continue
              </button>
              <button
                type="button"
                className="w-full text-sm font-medium text-purple-600 hover:underline"
                onClick={() => {
                  setStep(1);
                  setOtp("");
                  setError("");
                }}
                data-ocid="login.change_number_button"
              >
                ← Change number
              </button>
            </>
          )}
        </div>
      </div>
    </Overlay>
  );
}

// ─── MapModal ─────────────────────────────────────────────────────────────────

function MapModal({ dispatch }) {
  const [address, setAddress] = useState("Mumbai, Maharashtra, India");
  useEscClose(dispatch);

  function stopProp(e) {
    e.stopPropagation();
  }

  return (
    <Overlay onClose={() => dispatch({ type: "CLOSE_MODAL" })}>
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
        onClick={stopProp}
        onKeyDown={stopProp}
        aria-label="Select delivery location"
        data-ocid="map.dialog"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <MapPin size={20} style={{ color: "#7c3aed" }} aria-hidden="true" />
            <h2 className="text-base font-bold text-gray-900">
              Select Delivery Location
            </h2>
          </div>
          <button
            type="button"
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            aria-label="Close map"
            data-ocid="map.close_button"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        <div
          className="relative"
          style={{ height: "220px", overflow: "hidden", background: "#e8f4f8" }}
        >
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=300&fit=crop&q=80"
            alt="Map of delivery area"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "#7c3aed" }}
              >
                <MapPin size={22} color="white" />
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-600 mt-1 opacity-30" />
            </div>
          </div>
          <div
            className="absolute top-2 right-2 flex flex-col gap-1"
            aria-hidden="true"
          >
            <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-700 text-lg font-bold cursor-pointer hover:bg-gray-50">
              +
            </div>
            <div className="w-8 h-8 bg-white rounded shadow flex items-center justify-center text-gray-700 text-lg font-bold cursor-pointer hover:bg-gray-50">
              −
            </div>
          </div>
        </div>

        <div className="p-5">
          <label
            htmlFor="map-address"
            className="block text-xs font-semibold text-gray-500 mb-2"
          >
            YOUR LOCATION
          </label>
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden mb-4">
            <MapPin
              size={16}
              className="ml-3 flex-shrink-0"
              style={{ color: "#7c3aed" }}
              aria-hidden="true"
            />
            <input
              id="map-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-1 px-3 py-3 text-sm focus:outline-none"
              data-ocid="map.address_input"
            />
          </div>
          <button
            type="button"
            className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            data-ocid="map.confirm_button"
          >
            Confirm Location
          </button>
        </div>
      </div>
    </Overlay>
  );
}

// ─── ModalStack (default export) ─────────────────────────────────────────────

export default function ModalStack() {
  const cart = useCart();
  const state = cart[0] ?? cart;
  const dispatch = cart[1] ?? cart.dispatch;
  const { activeModal, modalData, orderTotal } = state;

  if (!activeModal) return null;
  if (activeModal === "product")
    return <ProductDetailModal product={modalData} dispatch={dispatch} />;
  if (activeModal === "payment")
    return <PaymentModal orderTotal={orderTotal} dispatch={dispatch} />;
  if (activeModal === "success")
    return <PaymentSuccessModal dispatch={dispatch} />;
  if (activeModal === "login") return <LoginModal dispatch={dispatch} />;
  if (activeModal === "map") return <MapModal dispatch={dispatch} />;
  return null;
}

export {
  ProductDetailModal,
  PaymentModal,
  PaymentSuccessModal,
  LoginModal,
  MapModal,
};
