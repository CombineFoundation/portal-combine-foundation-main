"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Handshake,
  BookOpen,
  GraduationCap,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const currentPath = usePathname();
  const router = useRouter();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const menuItems = [
    { label: "Profile", path: "/admin/profile", icon: <User size={22} /> },
    {
      label: "Volunteers",
      path: "/admin/volunteers",
      icon: <Handshake size={22} />,
    },
    {
      label: "Lectures",
      path: "/admin/lectures",
      icon: <BookOpen size={22} />,
    },
    {
      label: "Courses",
      path: "/admin/courses",
      icon: <GraduationCap size={22} />,
    },
    { label: "LogOut", path: "#logout", icon: <LogOut size={22} /> }, // Special handler
  ];

  useEffect(() => {
    if (!collapsed) {
      document.body.style.paddingLeft = "295px";
    } else {
      document.body.style.paddingLeft = "80px";
    }
    return () => {
      document.body.style.paddingLeft = "0px";
    };
  }, [collapsed]);

  const handleLogoutConfirm = () => {
    localStorage.removeItem("rememberMe");
    router.push("/");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-screen bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 z-50 ${
          collapsed ? "w-[80px]" : "w-[295px]"
        } flex flex-col`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ChevronsRight size={24} />
            ) : (
              <ChevronsLeft size={24} />
            )}
          </button>
        </div>

        {!collapsed && (
          <div className="flex justify-center items-center px-4 pb-2">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b689aca73d4a910f195fba599f1c1031158ed8ca"
              alt="CF Logo"
              width={140}
              height={100}
            />
          </div>
        )}

        <div className="flex-1 flex flex-col">
          {menuItems.map((item) => {
            if (item.label === "LogOut") {
              return (
                <button
                  key="logout"
                  onClick={() => setShowLogoutConfirm(true)}
                  className={`flex items-center h-11 px-4 text-xl font-medium border-b text-[#121212] hover:bg-[#f9f9f9] transition-all ${
                    collapsed ? "justify-center" : ""
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center h-11 px-4 ${
                  currentPath === item.path
                    ? "bg-[#FF5D15] text-white"
                    : "border-b border-[#E6E6E6] text-[#121212]"
                } text-xl font-medium hover:bg-[#f9f9f9] transition-all ${
                  collapsed ? "justify-center" : ""
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold text-black mb-2">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 border text-black rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
