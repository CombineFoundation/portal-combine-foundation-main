// app/reset-password/ResetPasswordForm.tsx
"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const ResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email parameter is missing.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Password has been reset successfully!");
    setTimeout(() => router.push("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-lg text-gray-600 mb-6">
          Reset Password
        </h2>
        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              tabIndex={-1}
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Reset Password
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
