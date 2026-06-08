import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import {
  Calendar,
  ChevronDown,
  Search,
  Trash2,
  User,
  Phone,
  MapPin,
  CreditCard,
  Eye,
  EyeOff,
  Package,
  Mail,
  Filter,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  AlertCircle
} from "lucide-react";
import AdminNavbar from "./AdminNavbar";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = `${import.meta.env.VITE_API_BASE_URL}/api`;
const axiosInstance = axios.create({ baseURL: API_BASE });

axiosInstance.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState([]);

  const buttonRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    fetchOrders();
    const handleClickOutside = (e) => {
      if (
        buttonRef.current && 
        !buttonRef.current.contains(e.target) &&
        (!dropdownRef.current || !dropdownRef.current.contains(e.target))
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  const filtered = bookings.filter((b) => {
    const matchStatus = statusFilter === "All" || b.orderStatus?.toLowerCase() === statusFilter.toLowerCase();
    const matchSearch = (b.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) || 
                      (b.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
                      (b.orderId?.toLowerCase() || "").includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  async function fetchOrders() {
    try {
      setLoading(true);
      setError("");
      const res = await axiosInstance.get("/orders");
      const fetchedBookings = res?.data?.orders || [];
      // Sort by date descending (newest first)
      const sortedBookings = fetchedBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setBookings(sortedBookings);
    } catch (err) {
      console.error("Fetch Orders Error:", err);
      setError(err?.response?.data?.message || "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  }

  const updateStatus = async (id, status) => {
    try {
      setLoading(true);
      await axiosInstance.put(`/orders/${id}`, { orderStatus: status });
      await fetchOrders();
    } catch (err) {
      alert(err?.response?.data?.message || "Status update failed.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const res = await axiosInstance.delete(`/orders/${id}`);
      if (res?.data?.success) {
        setBookings((prev) => prev.filter((b) => b._id !== id));
      }
    } catch (err) {
      alert("Delete failed.");
    }
  };

  const toggle = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getStatusConfig = (status) => {
    const s = status?.toLowerCase();
    switch (s) {
      case "pending": return { color: "bg-amber-100 text-amber-700 border-amber-200", icon: <Clock size={14} /> };
      case "confirmed": return { color: "bg-blue-100 text-blue-700 border-blue-200", icon: <CheckCircle2 size={14} /> };
      case "dispatched": return { color: "bg-indigo-100 text-indigo-700 border-indigo-200", icon: <Truck size={14} /> };
      case "delivered": return { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: <Package size={14} /> };
      case "completed": return { color: "bg-green-100 text-green-700 border-green-200", icon: <CheckCircle2 size={14} /> };
      case "cancelled": return { color: "bg-rose-100 text-rose-700 border-rose-200", icon: <XCircle size={14} /> };
      default: return { color: "bg-purple-100 text-purple-700 border-purple-200", icon: <AlertCircle size={14} /> };
    }
  };

  const options = ["All", "Pending", "Confirmed", "Dispatched", "Delivered", "Completed", "Cancelled"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <AdminNavbar />

      <div className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Header Section */}
          <div className="text-center space-y-2 border-b border-purple-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 tracking-tight">
              Manage Bookings
            </h1>
            <p className="text-purple-600 font-medium">Efficiently track and update customer orders.</p>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-purple-300 group-focus-within:text-purple-600 transition-colors" size={20} />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email or order ID..."
                className="w-full pl-16 pr-8 py-4 rounded-2xl bg-white border border-purple-100 focus:border-purple-300 focus:ring-4 focus:ring-purple-50 transition-all outline-none text-purple-900 font-semibold placeholder:text-purple-300"
              />
            </div>

            <button
              ref={buttonRef}
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between gap-4 px-8 py-4 bg-white border border-purple-100 rounded-2xl hover:border-purple-300 transition-all"
            >
              <div className="flex items-center gap-3">
                <Filter size={18} className="text-purple-400" />
                <span className="text-sm font-bold text-purple-900 uppercase tracking-widest">{statusFilter}</span>
              </div>
              <ChevronDown className={`text-purple-400 transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
            </button>
          </div>

          {open && createPortal(
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              ref={dropdownRef}
              style={{
                position: "absolute",
                top: dropdownPos.top,
                left: dropdownPos.left,
                width: dropdownPos.width,
              }}
              className="bg-white border border-purple-100 rounded-2xl shadow-2xl z-[9999] overflow-hidden p-2"
            >
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setStatusFilter(opt); setOpen(false); }}
                  className={`w-full text-left px-6 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-widest ${
                    statusFilter === opt ? 'bg-purple-800 text-white' : 'text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </motion.div>,
            document.body
          )}

          {/* List View */}
          <div className="space-y-4">
            {error && (
              <div className="bg-rose-50 border border-rose-100 p-6 rounded-3xl flex items-center gap-4 text-rose-600">
                <AlertCircle className="flex-shrink-0" size={24} />
                <p className="font-bold">{error}</p>
              </div>
            )}

            {loading && !bookings.length ? (
              <div className="flex flex-col items-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-purple-600 font-bold">Retrieving records...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-purple-200">
                <Package className="mx-auto text-purple-100 mb-4" size={64} />
                <p className="text-purple-300 font-bold text-xl">No corresponding orders found.</p>
              </div>
            ) : (
              filtered.map((b, idx) => {
                const isExpanded = expanded.includes(b._id);
                const status = getStatusConfig(b.orderStatus);

                return (
                  <motion.div
                    layout
                    key={b._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`bg-white rounded-[2rem] border transition-all ${
                      isExpanded ? 'border-purple-200 shadow-xl shadow-purple-100' : 'border-purple-50 shadow-md shadow-purple-50/50 hover:shadow-lg hover:border-purple-100'
                    }`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col xl:flex-row justify-between gap-6">
                        
                        <div className="flex items-center gap-6 flex-1">
                          <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 font-black text-xl border border-purple-100">
                            {filtered.length - idx}
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl font-bold text-gray-900">{b.name}</h3>
                              <span className={`flex items-center gap-1 px-2 py-0.5 rounded-lg border text-[10px] font-black uppercase ${status.color}`}>
                                {status.icon} {b.orderStatus}
                              </span>
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 font-semibold">
                              <span className="flex items-center gap-1.5"><Mail size={14} className="text-purple-300"/> {b.email}</span>
                              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-purple-300"/> {new Date(b.createdAt).toLocaleDateString()}</span>
                              <span className="text-purple-400 uppercase text-xs">ID: {b.orderId?.slice(-8).toUpperCase()}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                          <div className="text-right px-6">
                            <p className="text-[10px] uppercase font-bold text-purple-400 tracking-wider mb-1">Total</p>
                            <p className="text-2xl font-bold text-purple-900">₹{b.finalAmount || b.totalAmount}</p>
                          </div>

                          <select
                            value={b.orderStatus}
                            disabled={loading}
                            onChange={(e) => updateStatus(b._id, e.target.value)}
                            className="pl-4 pr-10 py-2.5 border border-purple-100 rounded-xl text-xs font-bold uppercase tracking-widest outline-none focus:border-purple-600 transition-colors bg-white cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239333ea%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
                          >
                            {options.filter(o => o !== "All").map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>

                          <div className="flex gap-2">
                            <button onClick={() => toggle(b._id)} className={`p-3 rounded-xl transition-all ${isExpanded ? 'bg-purple-800 text-white' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}>
                              {isExpanded ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            <button onClick={() => deleteBooking(b._id)} className="p-3 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-600 hover:text-white transition-all">
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pt-8 mt-8 border-t border-purple-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                              
                              <div className="space-y-4">
                                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                                  <User size={14} /> Customer Profile
                                </h4>
                                <div className="bg-purple-50/50 p-5 rounded-2xl space-y-2 border border-purple-100/50">
                                  <p className="text-gray-900 font-bold flex items-center gap-2">
                                    <span className="text-purple-400">Name:</span> {b.user?.name || "N/A"}
                                  </p>
                                  <p className="text-gray-900 font-bold flex items-center gap-2">
                                    <Phone size={14} className="text-purple-300"/> {b.user?.phoneNumber || "N/A"}
                                  </p>
                                  <p className="text-xs text-purple-400 truncate">{b.user?.email || "N/A"}</p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                                  <MapPin size={14} /> Shipping Information
                                </h4>
                                <div className="bg-purple-50/50 p-5 rounded-2xl space-y-2 border border-purple-100/50">
                                  <p className="text-gray-900 font-bold flex items-center gap-2"><Phone size={14} className="text-purple-300"/> {b.phoneNumber}</p>
                                  <p className="text-sm text-gray-600 leading-relaxed">{b.address}</p>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                                  <CreditCard size={14} /> Transaction Details
                                </h4>
                                <div className="bg-purple-50/50 p-5 rounded-2xl space-y-3 border border-purple-100/50">
                                  <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Status</span>
                                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                                      b.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                                    }`}>{b.paymentStatus}</span>
                                  </div>
                                  <div className="flex justify-between items-end">
                                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Amount</span>
                                    <span className="text-2xl font-bold text-purple-950">₹{b.finalAmount || b.totalAmount}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                                  <Package size={14} /> Product Manifest
                                </h4>
                                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                  {b.items?.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-purple-50 shadow-sm group">
                                      <div className="w-12 h-12 bg-purple-50 rounded-xl overflow-hidden border border-purple-100 flex-shrink-0">
                                        {item.img ? (
                                          <img 
                                            src={item.img.startsWith('http') ? item.img : `${import.meta.env.VITE_API_BASE_URL}${item.img}`} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                          />
                                        ) : <div className="w-full h-full flex items-center justify-center text-purple-200"><Package size={18}/></div>}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{item.size || 'Unique'} × {item.qty}</p>
                                      </div>
                                      <p className="text-xs font-black text-purple-800">₹{item.price}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>

        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e9d5ff; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d8b4fe; }
      `}</style>
    </div>
  );
}

export default Booking;