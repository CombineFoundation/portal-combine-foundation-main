"use client";

import { Sidebar } from "../../components/sidebar";
import React, { useState, useEffect } from "react";

const programs = [
  {
    title: "Youth Empowerment",
    description:
      "Providing skill development and mentorship for young individuals.",
  },
  {
    title: "Health Awareness",
    description:
      "Organizing medical camps and health education for rural communities.",
  },
  {
    title: "Education Support",
    description:
      "Supporting underprivileged students with resources and scholarships.",
  },
  {
    title: "Women Upliftment",
    description:
      "Initiatives to empower women through training and self-help groups.",
  },
];

const ProgramsPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true); // Auto collapse sidebar on small screens
    }
  }, [isMobile]);

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={(val) => {
          if (!isMobile) setCollapsed(val); // Disable toggle on small screens
        }}
      />

      <main
        className={`min-h-screen bg-gray-50 px-6 py-12 transition-all duration-300 ${
          collapsed ? "ml-20" : "ml-64"
        } max-md:ml-0`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Our Programs
          </h1>
          <p className="text-gray-600 mb-10">
            Explore the impactful initiatives run by Combine Foundation to
            support and uplift communities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {program.title}
                </h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProgramsPage;
