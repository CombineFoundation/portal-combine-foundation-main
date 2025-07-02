"use client";

import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import ADMIN from "../../images/ADMIN.png";
import Link from "next/link";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F4F6F6]">
      {/* Header */}
      <header className="w-full bg-white flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4 shadow-sm">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
          {collapsed && (
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b689aca73d4a910f195fba599f1c1031158ed8ca"
              alt="Logo"
              width={44}
              height={44}
              className="w-10 h-10 object-contain"
            />
          )}
          <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl font-semibold text-[#1A1A1A] truncate max-w-[70vw]">
            ADMIN DASHBOARD - COMBINE FOUNDATION
          </h1>
        </div>

        {/* Profile Section */}
        <Link href="/admin/profile">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src={ADMIN}
              alt="Admin Profile"
              width={48}
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover cursor-pointer transition transform hover:scale-105"
            />
            <span className="text-xs sm:text-sm text-[#4D4D4D] hover:text-orange-500 transition transform hover:scale-105">
              ADMIN
            </span>
          </div>
        </Link>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex w-full overflow-hidden">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main Content */}
        <main className="flex-1 w-full px-4 sm:px-6 py-4 sm:py-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
