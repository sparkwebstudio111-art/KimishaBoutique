import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="text-green-500 w-24 h-24" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">Order Placed! 🎉</h1>
        <p className="text-gray-600 text-lg">
          Thank you for your purchase! Your order details have been sent to us via WhatsApp, and the order is registered under your profile.
        </p>
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/my-orders"
            className="w-full sm:w-auto px-6 py-3 bg-purple-100 text-purple-700 font-semibold rounded-xl hover:bg-purple-200 transition"
          >
            View Orders
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-600/30"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}