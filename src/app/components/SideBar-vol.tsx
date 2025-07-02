"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../volunteer/assest/logo.png";
import { useEffect } from "react";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("rememberMe");
    setIsCollapsed(true);
    router.push("/");
  };

  // Prevent background scroll when sidebar is open on mobile
  useEffect(() => {
    if (!isCollapsed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCollapsed]);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
          !isCollapsed
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCollapsed(true)}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-orange-200 shadow-lg z-40 
          w-64 p-6 flex flex-col transition-transform duration-300 ease-in-out
          ${
            isCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
          }
        `}
      >
        {/* Scrollable sidebar container */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Image
              src={logo}
              alt="Combine Foundation Logo"
              width={160}
              height={80}
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {[
              { href: "/volunteer/dashboard", label: "Dashboard" },
              { href: "/volunteer/lecture", label: "Lecture" },
              { href: "/volunteer/course", label: "Course" },
              { href: "/volunteer/tasks", label: "Tasks" },
              { href: "/volunteer/get-card", label: "Get Card" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition ${
                  pathname === item.href
                    ? "bg-orange-100 text-orange-600 font-medium"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`}
                onClick={() => setIsCollapsed(true)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="mt-auto">
            <button
              className="w-full text-left py-3 px-4 rounded-lg transition
                text-gray-600 hover:bg-orange-50 hover:text-orange-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
