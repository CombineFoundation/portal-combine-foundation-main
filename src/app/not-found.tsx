// app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import LOGO from "./images/logo.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-gray-800 text-center">
      <div className="w-72 sm:w-96 mb-6">
        <Image
          src={LOGO}
          alt="404 Illustration"
          width={300}
          height={300}
          className="mb-6"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
