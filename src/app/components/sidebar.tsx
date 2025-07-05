"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  Handshake,
  ClipboardList,
  BookOpen,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/trustee/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  { label: "Admins", path: "/trustee/admin", icon: <Users size={20} /> },
  {
    label: "Volunteers",
    path: "/trustee/volunteers",
    icon: <Handshake size={20} />,
  },
  {
    label: "Programs",
    path: "/trustee/programs",
    icon: <BookOpen size={20} />,
  },
  {
    label: "Beneficiaries",
    path: "/trustee/beneficiaries",
    icon: <ClipboardList size={20} />,
  },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("rememberMe");
    router.push("/");
    setShowLogoutConfirm(false);
  };

  const SidebarContent = (
    <div
      className={`h-screen flex flex-col bg-white shadow-md z-50 transition-all duration-300 
        ${collapsed ? "w-[80px]" : "w-[250px]"}
        ${isMobile ? "fixed top-0 left-0" : "md:fixed md:top-0 md:left-0"}
      `}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        {!collapsed && (
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b689aca73d4a910f195fba599f1c1031158ed8ca"
            alt="Logo"
            width={120}
            height={40}
          />
        )}
        <button
          onClick={() =>
            isMobile ? setShowMobileSidebar(false) : setCollapsed(!collapsed)
          }
          className="ml-auto cursor-pointer"
        >
          {collapsed ? <Menu size={24} /> : <X size={24} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-2 px-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-4 py-2 gap-3 text-sm font-medium transition-all ${
              pathname === item.path
                ? "bg-[#FF5D15] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => isMobile && setShowMobileSidebar(false)}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center px-4 py-2 gap-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </nav>
    </div>
  );

  return (
    <>
      {/* Top Bar on Mobile */}
      {isMobile && (
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-40">
          <button
            title="Toggle Sidebar"
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          >
            <Menu size={24} />
          </button>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b689aca73d4a910f195fba599f1c1031158ed8ca"
            alt="Logo"
            width={100}
            height={40}
          />
        </div>
      )}

      {/* Render Sidebar */}
      {isMobile ? (
        showMobileSidebar && SidebarContent
      ) : (
        <aside>{SidebarContent}</aside>
      )}

      {/* Padding for content */}
      <div
        className={`transition-all duration-300 ${
          isMobile ? "" : collapsed ? "ml-[80px]" : "ml-[250px]"
        }`}
      >
        {/* Your page content here */}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold text-black mb-2">Logout</h2>
            <p className="text-sm text-gray-700 mb-4">
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
                onClick={confirmLogout}
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
