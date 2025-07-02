'use client';

import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaIdCard,
  FaGraduationCap,
} from 'react-icons/fa';
import Sidebar from "../../../components/SideBar-vol";
import { useRef, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import ADMIN from "../../../images/ADMIN.png";

export default function Profile() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-3 bg-white shadow-sm md:hidden">
        <button
          className="p-2 rounded-md bg-orange-600 text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Open menu' : 'Close menu'}
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
        <h1 className="text-lg font-bold text-orange-600">PROFILE</h1>
        <div className="w-8"></div>
      </div>

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'md:ml-0' : 'md:ml-64'} mt-14 md:mt-0`}>
        <div className="p-3 sm:p-4 md:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Profile Card */}
            <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex flex-col items-center">
                {/* Clickable Image */}
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative rounded-full overflow-hidden mb-3 sm:mb-4 cursor-pointer group"
                  onClick={handleImageClick}
                >
                  <Image
                    src={selectedImage || ADMIN}
                    alt="Avatar"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center">Muhammad Ali</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">muhammadali221@gmail.com</p>

                <div className="w-full space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-800">
                    <FaPhoneAlt className="text-gray-600 text-sm" />
                    <span>03127473404</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-800">
                    <FaMapMarkerAlt className="text-gray-600 mt-0.5 text-sm" />
                    <span className="flex-1">Lorem Ipsum Is Simply Dummy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Boxes */}
            <div className="w-full lg:w-2/3 space-y-4 sm:space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <FaUser className="text-gray-600 text-sm" />
                        <span className="text-xs sm:text-sm font-medium">Full Name</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 ml-5 sm:ml-6">Muhammad Ali</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <FaCalendarAlt className="text-gray-600 text-sm" />
                        <span className="text-xs sm:text-sm font-medium">Date Of Birth</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 ml-5 sm:ml-6">July 28, 2010</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <FaUser className="text-gray-600 text-sm" />
                        <span className="text-xs sm:text-sm font-medium">Gender</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 ml-5 sm:ml-6">Male</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 mb-1">
                        <FaIdCard className="text-gray-600 text-sm" />
                        <span className="text-xs sm:text-sm font-medium">CNIC</span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 ml-5 sm:ml-6">42206856687</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                <div className="flex items-center gap-2 text-gray-700 mb-1 sm:mb-2">
                  <FaGraduationCap className="text-gray-600 text-sm" />
                  <span className="text-xs sm:text-sm font-medium">Qualification</span>
                </div>
                <p className="text-sm sm:text-base text-gray-800 ml-5 sm:ml-6">Intermediate</p>
              </div>

              {/* Course Info */}
              <div className="bg-orange-50 rounded-lg shadow p-4 sm:p-6 border border-orange-100">
                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Active Course</p>
                <p className="text-sm sm:text-base text-gray-800">
                  Course Name: <strong className="font-semibold">Lorem</strong> | Roll Number: <strong className="font-semibold">99088</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
