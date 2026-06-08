import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Trash2, Search } from "lucide-react";
import AdminNavbar from "./AdminNavbar";

function ListPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const LIST_PATH = "/api/products";

  const mapServerToUI = (item) => {
    let img = item.image ?? item.img ?? "";

    if (typeof img === "string" && img.startsWith("/")) {
      img = `${API_BASE}${img}`;
    }

    return {
      id: item._id,
      name: item.name,
      desc: item.description ?? item.desc ?? "",
      price: item.price,
      category: item.category ?? "Brand",
      sizes: item.sizes ?? [],
      img,
    };
  };

  useEffect(() => {
    let mounted = true;

    const fetchProducts = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`${API_BASE}${LIST_PATH}?limit=10000`);
        const data = res.data;

        const items =
          Array.isArray(data)
            ? data
            : data?.products || data?.items || data?.results || [];

        const mapped = items.map(mapServerToUI);

        if (mounted) {
          setProducts(mapped);
          setFiltered(mapped);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load products");

        if (mounted) {
          setProducts([]);
          setFiltered([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchProducts();
    return () => (mounted = false);
  }, []);

  const handleSearch = (value) => {
    setQuery(value);
    setCurrentPage(1);

    if (!value.trim()) {
      setFiltered(products);
      return;
    }

    const q = value.toLowerCase();

    const result = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.category?.toLowerCase().includes(q)
    );

    setFiltered(result);
  };

  const handleDelete = async (id) => {
    const backup = [...products];

    setProducts((prev) => prev.filter((p) => p.id !== id));
    setFiltered((prev) => prev.filter((p) => p.id !== id));
    setDeletingId(id);

    try {
      const token =
        localStorage.getItem("authToken") ||
        sessionStorage.getItem("authToken");

      await axios.delete(`${API_BASE}${LIST_PATH}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Deleted successfully");
    } catch (err) {
      toast.error("Delete failed");
      setProducts(backup);
      setFiltered(backup);
    } finally {
      setDeletingId(null);
    }
  };

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div>
      <AdminNavbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-200 pt-30 via-white to-purple-300 p-6">
        <ToastContainer />

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-900">
            Products Dashboard
          </h1>
          <p className="text-purple-500 text-sm mt-5">
            Search by product name or category
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 bg-white border border-purple-100 shadow-sm rounded-2xl px-4 py-3 w-full max-w-lg">
            <Search className="text-purple-500" size={18} />
            <input
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search product or category..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center text-purple-500">Loading...</div>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((pro) => (
                <div
                  key={pro.id}
                  className="w-[260px] bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-purple-100 overflow-hidden"
                >
                  <div className="h-44 bg-purple-50 flex items-center justify-center">
                    <img
                      src={pro.img}
                      alt={pro.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="p-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-sm font-semibold text-purple-900 truncate">
                        {pro.name}
                      </h2>
                      <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                        ₹{pro.price}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2">
                      {pro.desc}
                    </p>

                    <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-1 rounded-full inline-block">
                      {pro.category}
                    </span>

                    {pro.sizes?.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {pro.sizes.map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-purple-50 text-purple-700 px-2 py-1 rounded"
                          >
                            {s.size}:{s.quantity}
                          </span>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => handleDelete(pro.id)}
                      disabled={deletingId === pro.id}
                      className="w-full mt-2 flex items-center justify-center gap-1 bg-purple-900 hover:bg-purple-800 cursor-pointer text-white text-xs py-1.5 rounded-lg"
                    >
                      <Trash2 size={14} />
                      {deletingId === pro.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PURPLE PAGINATION */}
        {!loading && filtered.length > 0 && (
          <div className="flex justify-center mt-10 flex-wrap gap-2 items-center">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-lg cursor-pointer text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 disabled:opacity-40"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 cursor-pointer rounded-lg text-sm transition 
                  ${
                    currentPage === num
                      ? "bg-purple-900 text-white"
                      : "bg-white text-purple-700 border border-purple-200 hover:bg-purple-100"
                  }`}
              >
                {num}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 cursor-pointer py-1 rounded-lg text-sm bg-purple-100 text-purple-700 hover:bg-purple-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center text-purple-400 mt-10">
            No products found
          </div>
        )}
      </div>
    </div>
  );
}

export default ListPage;