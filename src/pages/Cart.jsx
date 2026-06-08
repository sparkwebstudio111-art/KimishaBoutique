import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";

// ---------------- ITEM CARD ----------------
function CartProduct({ item, removeItem }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white/80 backdrop-blur rounded-2xl shadow-lg p-4 border border-purple-200 hover:shadow-xl transition">
      <div className="w-full sm:w-28 h-28 bg-purple-100 rounded-xl flex items-center justify-center overflow-hidden">
        <img src={item.img} alt={item.name} className="object-contain max-h-full" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</h3>
          <p className="text-purple-700 font-bold">₹{item.price}</p>

          {item.size && (
            <p className="text-xs sm:text-sm text-gray-500">Size: {item.size}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-3">
          <div className="px-3 py-1 bg-purple-100 border border-purple-300 rounded-lg text-sm">
            Qty: {item.quantity}
          </div>

          <button
            onClick={() => removeItem(item.id, item.size || "default")}
            className="flex items-center gap-1 text-white bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg transition"
          >
            <Trash2 size={14} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------- MAIN CART ----------------
const Cart = () => {
  const { cart, clearCart, totalItems, totalPrice, removeItem } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    paymentMethod: "",
    notes: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const generateOrderId = () =>
    `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const shippingCharge = totalPrice > 500 ? 0 : 50;
  const taxAmount = Math.round(totalPrice * 0.05);
  const finalAmount = totalPrice + shippingCharge + taxAmount;

  const isValid = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const phoneOk = /^[0-9]{10}$/.test(form.phoneNumber);
    return form.name && emailOk && form.address && phoneOk && form.paymentMethod;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- STATIC ORDER PLACEMENT ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid()) {
      toast.error("Please fill all fields correctly");
      return;
    }

    if (!cart.length) {
      toast.error("Cart is empty");
      return;
    }

    setSubmitting(true);

    try {
      const orderId = generateOrderId();
      const newOrder = {
        id: orderId,
        _id: orderId,
        orderId: orderId,
        name: form.name,
        email: form.email,
        address: form.address,
        phoneNumber: form.phoneNumber,
        paymentMethod: form.paymentMethod,
        notes: form.notes || "",
        createdAt: new Date().toISOString(),
        items: cart.map((item) => ({
          productId: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          qty: item.quantity,
          size: item.size || "default"
        })),
        shippingCharge: shippingCharge,
        taxAmount: taxAmount,
        totalAmount: totalPrice,
        finalAmount: finalAmount,
        paymentStatus: form.paymentMethod === "Online" ? "Paid" : "Unpaid",
        orderStatus: "Pending"
      };

      // Save order to localStorage
      const existingOrdersRaw = localStorage.getItem("kimisha_orders");
      const existingOrders = existingOrdersRaw ? JSON.parse(existingOrdersRaw) : [];
      localStorage.setItem("kimisha_orders", JSON.stringify([newOrder, ...existingOrders]));

      // Construct a premium WhatsApp message
      const WHATSAPP_NUMBER = "9366722532";
      const itemsList = cart
        .map((item) => `- *${item.name}* (Size: ${item.size === "default" ? "Standard" : item.size}, Qty: ${item.quantity}) - ₹${item.price}`)
        .join("\n");

      const waMessage = 
        `Hello Kimisha Boutique! I'd like to place an order 🛍️\n\n` +
        `*Order ID:* #${orderId.slice(-8).toUpperCase()}\n` +
        `*Name:* ${form.name}\n` +
        `*Phone:* ${form.phoneNumber}\n` +
        `*Email:* ${form.email}\n` +
        `*Delivery Address:* ${form.address}\n` +
        `*Payment Method:* ${form.paymentMethod}\n` +
        `*Notes:* ${form.notes || "None"}\n\n` +
        `*Items ordered:*\n${itemsList}\n\n` +
        `*Subtotal:* ₹${totalPrice}\n` +
        `*Shipping:* ₹${shippingCharge}\n` +
        `*Tax:* ₹${taxAmount}\n` +
        `*Final Amount:* *₹${finalAmount}*\n\n` +
        `Please confirm my order. Thank you!`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(waMessage)}`;

      toast.success("Order Placed Successfully!");
      
      // Clear Cart
      clearCart();

      // Open WhatsApp in new tab and redirect page to /success
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        navigate("/success");
      }, 1000);

    } catch (err) {
      console.error("Failed to place order:", err);
      toast.error("Failed to place order");
    } finally {
      setSubmitting(false);
    }
  };

  if (!cart.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
        <ToastContainer />
        <div className="text-center bg-white p-10 rounded-2xl shadow-xl">
          <ShoppingBag className="mx-auto text-purple-600" size={40} />
          <h2 className="text-xl font-bold mt-3">Cart is Empty</h2>
          <Link to="/products" className="text-purple-600 underline">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white py-6 px-3 sm:px-6">
      <ToastContainer />

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between mb-6">
          <Link to="/products" className="flex items-center gap-2 text-purple-700 font-medium">
            <ArrowLeft size={18} /> Back
          </Link>

          <button onClick={clearCart} className="text-red-500 flex gap-1 font-medium">
            <Trash2 size={18} /> Clear
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="order-1 lg:order-2 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg h-fit lg:sticky lg:top-6 border border-purple-200">

            <h2 className="font-bold text-lg mb-4 text-purple-700">Order Summary</h2>

            <div className="flex justify-between py-1 text-sm">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between py-1 text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between py-1 text-sm">
              <span>Shipping</span>
              <span>₹{shippingCharge}</span>
            </div>

            <div className="flex justify-between py-1 text-sm">
              <span>Tax</span>
              <span>₹{taxAmount}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg text-purple-800">
              <span>Total</span>
              <span  className="text-green-600">₹{finalAmount}</span>
            </div>

          </div>

          <div className="order-2 lg:order-1 lg:col-span-2 space-y-5">

            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg space-y-3 border border-purple-200">

              <input name="name" value={form.name} placeholder="Name" className="input" onChange={handleChange} />
              <input name="email" value={form.email} placeholder="Email" className="input" onChange={handleChange} />
              <input name="phoneNumber" value={form.phoneNumber} placeholder="Phone" className="input" onChange={handleChange} />
              <textarea name="address" value={form.address} placeholder="Address" className="input" onChange={handleChange} />
              <textarea name="notes" value={form.notes} placeholder="Order Notes" className="input" onChange={handleChange} />

              <select name="paymentMethod" value={form.paymentMethod} className="input" onChange={handleChange}>
                <option value="">Select Payment Method</option>
                <option value="Online">Online</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>

              <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded-xl font-semibold transition">
                {submitting ? "Processing..." : "Place Order"}
              </button>

            </form>

            {cart.map((item) => (
              <CartProduct
                key={`${item.id}-${item.size || "default"}`}
                item={item}
                removeItem={removeItem}
              />
            ))}

          </div>

        </div>
      </div>

      <style>{`
        .input{
          width:100%;
          padding:12px;
          border:1px solid #e9d5ff;
          border-radius:12px;
          outline:none;
          transition:0.2s;
        }
        .input:focus{
          border-color:#9333ea;
          box-shadow:0 0 0 2px rgba(147,51,234,0.2);
        }
      `}</style>
    </div>
  );
};

export default Cart;