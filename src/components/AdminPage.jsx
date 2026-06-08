import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AdminPage() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const getToken = () => localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    fetchAnalytics();
    fetchUsers(page);
    fetchUserCount();
  }, [page]);

  // ================= FETCH =================
  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/orders/analytics/daily`,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );

      if (res.data?.success) {
        setData(res.data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async (pageNumber = 1) => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/auth/users?page=${pageNumber}`,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );

      if (res.data.success) {
        setUsers(res.data.users);
        setTotalPages(res.data.pages);
        setPage(res.data.page);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUserCount = async () => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/auth/users/count`,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );

      if (res.data.success) {
        setUserCount(res.data.count);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(
        `${API_BASE}/api/auth/users/${id}`,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );

      fetchUsers(page);
      fetchUserCount();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= CALCULATIONS =================
  const totalRevenue = data.reduce((sum, i) => sum + i.revenue, 0);
  const totalOrders = data.reduce((sum, i) => sum + i.orders, 0);

  // ✅ TODAY REVENUE (REAL)
  const today = new Date();
  const todayRevenue = data
    .filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate.toDateString() === today.toDateString();
    })
    .reduce((sum, item) => sum + item.revenue, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 pb-20">

      <AdminNavbar />

      <div className="px-4 md:px-6 space-y-8 pt-30 max-w-7xl mx-auto">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-purple-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            Manage users and analytics
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard title="Orders" value={loading ? "..." : totalOrders} />
          <StatCard title="Revenue" value={`₹${totalRevenue}`} />
          <StatCard title="Today Revenue" value={`₹${todayRevenue}`} />
          <StatCard title="Users" value={userCount} />
        </div>

        {/* CHART */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-purple-900 mb-4">
            Daily Analytics
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#7c3aed" />
              <Line type="monotone" dataKey="revenue" stroke="#a855f7" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* USERS */}
        <div className="bg-white rounded-2xl shadow-xl">

          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-purple-900">
              Users
            </h2>

            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
              {userCount} Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-50">
                <tr>
                  <th className="p-4 text-left">#</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u, index) => (
                  <tr key={u._id} className="border-b hover:bg-purple-50">
                    <td className="p-4 text-gray-500 font-medium">
                      {userCount - ((page - 1) * 10 + index)}
                    </td>

                    <td className="p-4 font-semibold text-gray-800">
                      {u.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {u.email}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDeleteUser(u._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                No users found
              </p>
            )}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-between items-center px-6 py-4 border-t">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm">
              Page {page} / {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================= STAT CARD =================
function StatCard({ title, value }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-md">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold text-purple-700 mt-2">
        {value}
      </h2>
    </div>
  );
}

export default AdminPage;