"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Sidebar } from "../../components/sidebar";
import ADMIN from "../../images/ADMIN.png";

const Profile = () => {
  const router = useRouter();

  interface TrusteeData {
    name: string;
    email: string;
  }

  const [trusteeData, setTrusteeData] = useState<TrusteeData | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("trusteeData");
    if (data) {
      setTrusteeData(JSON.parse(data));
    } else {
      router.push("/trustee/profile");
    }
  }, [router]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden cursor-pointer"
              onClick={handleImageClick}
              title="Click to change profile picture"
            >
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={ADMIN}
                  alt="Default Avatar"
                  className="w-full h-full object-cover"
                  width={96}
                  height={96}
                />
              )}
            </div>
            {/* Hidden input to trigger on click */}
            <input
              title="Upload Profile Picture"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
          </div>

          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Trustee Profile
          </h1>

          {trusteeData ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium">Name:</p>
                <p className="text-gray-600">{trusteeData.name}</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium">Email:</p>
                <p className="text-gray-600">{trusteeData.email}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">Loading profile...</div>
          )}

          <div className="mt-6 flex justify-center gap-4">
            <button
              className="w-full py-2 bg-gray-300 text-gray-700 cursor-pointer rounded-md shadow-md hover:bg-gray-400 transition-colors"
              onClick={() => router.push("/trustee")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
