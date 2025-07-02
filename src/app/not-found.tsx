// app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import LOGO from "./images/logo.png"; // make sure this is inside the /app/not-found/images/ directory

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src={LOGO}
          alt="Combine Foundation Logo"
          width={200}
          height={200}
          className="mx-auto"
          priority
        />
      </div>

      {/* Big 404 Number */}
      <h1 className="text-6xl sm:text-7xl font-extrabold text-orange-500 mb-2">
        404
      </h1>

      {/* Page Not Found Title */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist, was removed,
        or the link was broken.
      </p>

      {/* Button to Home */}
      <Link
        href="/"
        className="px-6 py-3 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition-all duration-200 font-medium"
      >
        ⬅️ Go Back Home
      </Link>
    </div>
  );
}
