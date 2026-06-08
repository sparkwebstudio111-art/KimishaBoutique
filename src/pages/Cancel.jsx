import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft } from 'lucide-react';

export default function Cancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6 border border-red-100">
        <div className="flex justify-center">
          <XCircle className="text-red-500 w-24 h-24" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">Payment Cancelled</h1>
        <p className="text-gray-600 text-lg">
          Your payment process was cancelled. No charges were made.
        </p>
        <div className="pt-6">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple-600/30"
          >
            <ArrowLeft size={18} /> Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
