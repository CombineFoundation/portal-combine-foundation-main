"use client";

import { Sidebar } from "../../components/sidebar";
import React, { useState } from "react";

const VolunteersPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const volunteers = [
    { name: "Hamza Ali", joined: "Jan 2024", programs: "web dev , python" },
    { name: "Muhammad Umar", joined: "Feb 2024", programs: "data science" },
    { name: "Jibran", joined: "Mar 2024", programs: "graphic design" },
    { name: "Ali", joined: "Apr 2024", programs: "web dev" },
    { name: "Maliha", joined: "May 2024", programs: "data science" },
  ];

  return (
    <div className="text-gray-700">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`transition-all duration-300 p-4 sm:p-6 ${
          collapsed ? "sm:ml-[80px] ml-0" : "sm:ml-[250px] ml-0"
        }`}
      >
        <h1 className="text-2xl font-semibold mb-4">Volunteers List</h1>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Joined</th>
                <th className="px-6 py-3">Programs Participated</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {volunteer.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {volunteer.joined}
                  </td>
                  <td className="px-6 py-4 text-gray-800">
                    {volunteer.programs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VolunteersPage;
