"use client";

import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import LOGO from "../images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("🚫 Please fill in all fields");
      return;
    }

    const users = [
      {
        email: "admin@example.com",
        password: "adminpass123",
        role: "admin",
        redirect: "/admin/dashboard",
      },
      {
        email: "trustee@example.com",
        password: "trusteepass123",
        role: "trustee",
        redirect: "/trustee/dashboard",
      },
      {
        email: "volunteer@example.com",
        password: "volunteerpass123",
        role: "volunteer",
        redirect: "/volunteer/dashboard",
      },
    ];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      toast.success(`✅ Login successful as ${user.role}`);
      setTimeout(() => {
        window.location.href = user.redirect;
      }, 1000);
    } else {
      toast.error("❌ Incorrect email or password");
    }
  };

  const handleRememberMe = () => {
    const newValue = !rememberMe;
    setRememberMe(newValue);
    if (newValue) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* ⚠️ Remember Me Popup */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-orange-100/60 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full relative">
            <button
              onClick={() => setShowCard(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🔒 Remember Me
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              You selected <strong>Remember me</strong>. This keeps you signed
              in — please ensure you&apos;re using a private device.
            </p>
            <button
              onClick={() => setShowCard(false)}
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Login Form */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={LOGO}
            alt="Combine Foundation Logo"
            height={160}
            width={160}
            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40"
          />
          <h1 className="text-3xl font-bold text-black mt-4">
            Welcome to Combine Foundation
          </h1>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mt-6">
          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Secure Login
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 
                        0-1.02.152-2.004.437-2.94m1.97-2.97A9.953 9.953 0 0112 3c5.523 
                        0 10 4.477 10 10 0 1.291-.245 2.523-.69 3.652M15 12a3 3 0 11-6 
                        0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 
                        0zM2.458 12C3.732 7.943 7.523 5 12 
                        5c4.478 0 8.268 2.943 9.542 
                        7-.345 1.143-.922 2.203-1.696 
                        3.125M15.036 17.964A9.955 9.955 0 0112 
                        19c-4.478 0-8.268-2.943-9.542-7a9.96 
                        9.96 0 013.514-4.452"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  className="form-checkbox"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-orange-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
