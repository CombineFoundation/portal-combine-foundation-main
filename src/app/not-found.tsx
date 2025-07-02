// src/app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <Image
        src="https://illustrations.popsy.co/gray/error-404.svg"
        alt="404 Not Found"
        width={300}
        height={300}
        className="mb-6"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
