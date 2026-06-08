import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Calendar,
  Eye,
  EyeOff,
  XCircle,
  Package,
  MapPin,
  CreditCard,
  Phone,
  Mail,
  ChevronRight,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle
} from "lucide-react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [expanded, setExpanded] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  function fetchOrders() {
    setLoading(true);
    setError(null);
    try {
      const raw = localStorage.getItem("kimisha_orders");
      const fetchedOrders = raw ? JSON.parse(raw) : [];
      // Sort by date descending (newest first)
      const sortedOrders = fetchedOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
    } catch (err) {
      setError("Failed to load orders from storage.");
    } finally {
      setLoading(false);
    }
  }

  const getKey = (o) => o._id ?? o.orderId ?? o.id;

  const toggle = (key) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);
      newSet.has(key) ? newSet.delete(key) : newSet.add(key);
      return newSet;
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleCancel = (order) => {
    const id = order.id || order.orderId || order._id;
    if (!id) return;
    if (order.orderStatus === "Cancelled" || order.orderStatus === "Completed") return;
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    try {
      const raw = localStorage.getItem("kimisha_orders");
      const fetchedOrders = raw ? JSON.parse(raw) : [];
      const updated = fetchedOrders.map((o) => {
        if ((o.id || o.orderId || o._id) === id) {
          return { ...o, orderStatus: "Cancelled" };
        }
        return o;
      });
      localStorage.setItem("kimisha_orders", JSON.stringify(updated));
      fetchOrders();
    } catch {
      alert("Cancel failed");
    }
  };

  const handlePayment = (order) => {
    const id = order.id || order.orderId || order._id;
    if (!id) return;
    try {
      const raw = localStorage.getItem("kimisha_orders");
      const fetchedOrders = raw ? JSON.parse(raw) : [];
      const updated = fetchedOrders.map((o) => {
        if ((o.id || o.orderId || o._id) === id) {
          return { ...o, paymentStatus: "Paid" };
        }
        return o;
      });
      localStorage.setItem("kimisha_orders", JSON.stringify(updated));
      alert("Simulated payment successful! Thank you.");
      fetchOrders();
    } catch {
      alert("Payment simulation failed");
    }
  };

  const getStatusConfig = (status) => {
    const s = status?.toLowerCase();
    switch (s) {
      case "pending": return { color: "bg-amber-100 text-amber-700 border-amber-200", icon: <Clock size={14} />, label: "Pending" };
      case "confirmed": return { color: "bg-blue-100 text-blue-700 border-blue-200", icon: <CheckCircle2 size={14} />, label: "Confirmed" };
      case "dispatched": return { color: "bg-indigo-100 text-indigo-700 border-indigo-200", icon: <Truck size={14} />, label: "Dispatched" };
      case "delivered": return { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: <Package size={14} />, label: "Delivered" };
      case "completed": return { color: "bg-green-100 text-green-700 border-green-200", icon: <CheckCircle2 size={14} />, label: "Completed" };
      case "cancelled": return { color: "bg-rose-100 text-rose-700 border-rose-200", icon: <XCircle size={14} />, label: "Cancelled" };
      default: return { color: "bg-purple-100 text-purple-700 border-purple-200", icon: <AlertCircle size={14} />, label: status };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <Navbar />

      <div className="pt-10 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-purple-900 mb-4"
          >
            My Orders
          </motion.h1>
          <p className="text-purple-600 font-medium">Track and manage your recent purchases.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 pb-24">
        {loading && !orders.length ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-xl shadow-purple-100 border border-purple-50">
            <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-purple-600 font-semibold">Loading orders...</p>
          </div>
        ) : !orders.length ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-xl shadow-purple-100 border border-purple-50">
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-purple-300" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">No orders found</h3>
            <p className="text-gray-500 mb-8">You haven't placed any orders yet.</p>
            <a href="/Products" className="px-8 py-3 bg-purple-800 text-white rounded-xl font-bold hover:bg-purple-900 transition shadow-lg shadow-purple-100">
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, idx) => {
              const key = getKey(order);
              const isOpen = expanded.has(key);
              const status = getStatusConfig(order.orderStatus);

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-3xl shadow-lg shadow-purple-100 border border-purple-50 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-lg border border-purple-100">
                            #{order.orderId?.slice(-8).toUpperCase()}
                          </span>
                          <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${status.color}`}>
                            {status.icon} {status.label}
                          </span>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                          {order.items?.length > 0
                            ? (order.items.length === 1
                              ? order.items[0].name
                              : `${order.items[0].name} & ${order.items.length - 1} more items`)
                            : "Order Summary"}
                        </h2>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
                          <span className="flex items-center gap-2"><Calendar size={16} className="text-purple-400" /> {formatDate(order.createdAt)}</span>
                          <span className="flex items-center gap-2"><CreditCard size={16} className="text-purple-400" /> {order.paymentMethod}</span>
                        </div>
                      </div>

                      <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4">
                        <div className="text-right">
                          <p className="text-xs text-purple-400 uppercase font-bold tracking-wider mb-1">Total Amount</p>
                          <p className="text-3xl font-bold text-green-600">₹{order.finalAmount || order.totalAmount}</p>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => toggle(key)}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                          >
                            {isOpen ? <EyeOff size={18} /> : <Eye size={18} />}
                            {isOpen ? "Hide Details" : "View Details"}
                          </button>

                          {order.paymentStatus !== "Paid" && order.orderStatus === "Pending" && (
                            <button
                              onClick={() => handlePayment(order)}
                              className="px-6 py-2.5 text-sm font-bold rounded-xl bg-purple-800 text-white hover:bg-purple-900 transition shadow-lg shadow-purple-100"
                            >
                              Pay Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-purple-50 bg-[#fafaff]"
                      >
                        <div className="p-8 md:p-10 space-y-10">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            <div className="space-y-4">
                              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                                <MapPin size={14} /> Shipping Details
                              </h4>
                              <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
                                <p className="font-bold text-gray-900 text-lg">{order.name}</p>
                                <p className="text-gray-600 flex items-center gap-2 text-sm"><Mail size={14} className="text-purple-300" /> {order.email}</p>
                                <p className="text-gray-600 flex items-center gap-2 text-sm"><Phone size={14} className="text-purple-300" /> {order.phoneNumber}</p>
                                <div className="pt-3 mt-3 border-t border-purple-50">
                                  <p className="text-gray-600 text-sm leading-relaxed">{order.address}</p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                                <Package size={14} /> Order Items
                              </h4>
                              <div className="space-y-3">
                                {order.items?.map((item, i) => (
                                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-purple-100 shadow-sm group">
                                    <div className="w-16 h-20 bg-purple-50 rounded-xl overflow-hidden flex-shrink-0 border border-purple-50">
                                      {item.img ? (
                                        <img
                                          src={item.img.startsWith('http') ? item.img : `${import.meta.env.VITE_API_BASE_URL}${item.img}`}
                                          alt={item.name}
                                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                      ) : (
                                        <div className="w-full h-full flex items-center justify-center text-purple-200"><Package size={24} /></div>
                                      )}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                      <div>
                                        <p className="font-bold text-gray-900 leading-tight mb-1">{item.name}</p>
                                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Size: {item.size || 'Standard'} | Qty: {item.qty}</p>
                                      </div>
                                      <p className="text-lg font-bold text-purple-800">₹{item.price}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>

                          <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-2.5 h-2.5 rounded-full ${order.paymentStatus === 'Paid' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                              <span className="text-sm font-bold text-gray-700">Payment Status:</span>
                              <span className={`text-sm font-bold uppercase ${order.paymentStatus === 'Paid' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {order.paymentStatus}
                              </span>
                            </div>

                            {!(order.orderStatus === "Cancelled" || order.orderStatus === "Completed") && (
                              <button
                                onClick={() => handleCancel(order)}
                                className="flex items-center gap-2 px-6 py-2.5 bg-rose-50 text-rose-600 text-sm font-bold rounded-xl hover:bg-rose-100 transition-colors"
                              >
                                <XCircle size={18} />
                                Cancel Order
                              </button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;