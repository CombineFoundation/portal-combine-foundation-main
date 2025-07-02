"use client";
import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-black px-4 py-6 sm:px-8 sm:py-10">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center sm:text-left">
        Admin Dashboard
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Volunteers */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-md">
          <p className="text-sm text-gray-600">Total Volunteers</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-2xl sm:text-3xl font-bold">125</span>
            <Link href="/admin/volunteers">
              <button className="bg-orange-500 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-orange-600 transition">
                VIEW
              </button>
            </Link>
          </div>
        </div>

        {/* Recent Lectures */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-md">
          <h3 className="text-sm sm:text-base font-bold text-gray-700 mb-2">
            Recent Lectures
          </h3>
          <div className="bg-orange-500 text-white p-2 rounded mb-2">
            <p className="text-sm font-semibold">LECTURE</p>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Recent Tasks */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-md">
          <h3 className="text-sm sm:text-base font-bold text-gray-700 mb-2">
            Recent Tasks
          </h3>
          <div className="bg-orange-500 text-white p-2 rounded mb-2">
            <p className="text-sm font-semibold">TASK</p>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="mt-10 w-full sm:max-w-xl mx-auto">
        <h3 className="text-sm sm:text-base font-bold text-gray-700 mb-2 text-center sm:text-left">
          Recommended Courses
        </h3>
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-md">
          <div className="bg-orange-500 text-white p-2 rounded mb-2">
            <p className="text-sm font-semibold">COURSE</p>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
