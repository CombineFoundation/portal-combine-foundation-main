// app/forgot-password/page.tsx
"use client";

import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Sending reset link...");

    try {
      const res = await fetch("/api/send-reset-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Reset link sent! Check your email.");
      } else {
        setMessage(`❌ ${data.error || "Failed to send link"}`);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-lg text-gray-600">Forgot Password</h2>
        <form className="space-y-4" onSubmit={handleSendLink}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Send Reset Link
          </button>
          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
