"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/SideBar-vol";
import QRCode from "react-qr-code";
import Image from "next/image";
import logo from "../../volunteer/assest/logo.png";

interface VolunteerData {
  fullName: string;
  cnic: string;
  email: string;
  volunteerId: string;
  joinDate: string;
  validFrom: string;
  validThru: string;
}

const VolunteerCard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [volunteerData, setVolunteerData] = useState<VolunteerData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("volunteerData");
    if (storedData) {
      setVolunteerData(JSON.parse(storedData));
    } else {
      setVolunteerData({
        fullName: "M. Umar",
        cnic: "12345-6789012-3",
        email: "m.umar@example.com",
        volunteerId: "37521",
        joinDate: "May 01, 2025",
        validFrom: "JUN 01, 2025",
        validThru: "AUG 01, 2025",
      });
    }
    setIsLoading(false);
  }, []);

  const getInitials = (name: string | undefined) => {
    if (!name) return "CF";
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className="flex-1 p-4 md:p-8">
          <p className="text-gray-500">Loading volunteer data...</p>
        </div>
      </div>
    );
  }

  const qrData = JSON.stringify({
    name: volunteerData?.fullName,
    id: volunteerData?.volunteerId,
    foundation: "COMBINE FOUNDATION",
  });

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-3 bg-white shadow-sm md:hidden">
        <button
          className="p-2 rounded-md bg-orange-600 text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Open menu" : "Close menu"}
        >
          {isCollapsed ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <h1 className="text-lg font-bold text-orange-600">ID CARD</h1>
        <div className="w-8"></div>
      </div>

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "md:ml-0" : "md:ml-64"
        } mt-14 md:mt-0`}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Page Header - Added md:ml-8 for medium+ devices */}
          <div
            className={`fixed top-14 md:top-0 left-0 right-0 z-30 bg-white py-3 px-4 shadow-sm md:relative md:shadow-none ${
              isCollapsed ? "md:left-0 md:ml-60" : "md:left-64 md:ml-8"
            } transition-all duration-300`}
          >
            <div
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-7xl mx-auto`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">
                VOLUNTEER ID CARD
              </h1>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => window.print()}
                aria-label="Print ID card"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Container - Added pt-16 to account for fixed header */}
          <div className="flex flex-col items-center lg:flex-row gap-6 xl:gap-8 ml-55 justify-center pt-16 md:pt-4">
            {/* Front Side */}
            <div className="w-full max-w-md lg:w-[420px] xl:w-[450px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Logo Header Section */}
              <div className="bg-[#e67e22] py-4 sm:py-5 px-6 flex flex-col items-center justify-center">
                <div className="mb-3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative bg-white rounded-full p-2 shadow-md">
                  <Image
                    src={logo}
                    alt="Combine Foundation Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                    priority
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wider">
                  COMBINE FOUNDATION
                </h2>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                {/* Volunteer Avatar Placeholder */}
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-orange-100 border-4 border-orange-200 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">
                      {getInitials(volunteerData?.fullName)}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
                  {volunteerData?.fullName}
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 text-center">
                  Co-ordinator and Innovation Lead
                </p>

                <div className="border-t-2 border-gray-200 my-4 sm:my-5"></div>

                <div className="flex justify-center">
                  <div className="space-y-3 sm:space-y-4 text-center">
                    <p className="text-base sm:text-lg text-gray-700">
                      <span className="font-semibold">ID:</span>{" "}
                      {volunteerData?.volunteerId}
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                      <span className="font-semibold">Join Date:</span>{" "}
                      {volunteerData?.joinDate}
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                      <span className="font-semibold">Phone:</span> +92 316
                      378243
                    </p>
                  </div>
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-[#e67e22] tracking-wider">
                    COMBINE FOUNDATION
                  </h3>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Back Side */}
            <div className="w-full max-w-md lg:w-[420px] xl:w-[450px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-white p-4 sm:p-5 text-center border-b border-gray-300">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Volunteer Information
                </h2>
              </div>

              <div className="p-5 sm:p-6 space-y-5 sm:space-y-6">
                <div className="flex justify-center">
                  <div className="p-3 sm:p-4 border-2 border-gray-300 rounded-lg bg-white">
                    <QRCode
                      value={qrData}
                      size={140}
                      level="H"
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {volunteerData?.fullName}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700">
                    <span className="font-semibold">Valid from:</span>{" "}
                    {volunteerData?.validFrom}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <span className="font-semibold">Valid thru:</span>{" "}
                    {volunteerData?.validThru}
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    <span className="font-semibold">CNIC:</span>{" "}
                    {volunteerData?.cnic}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-gray-100 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-center mb-2 text-gray-800 text-base sm:text-lg">
                    In Case of Emergency
                  </h4>
                  <p className="text-sm sm:text-base text-center text-gray-700">
                    Please contact COMBINE FOUNDATION
                  </p>
                  <p className="text-sm sm:text-base text-center font-bold mt-2 text-gray-800">
                    +92 316 378243
                  </p>
                </div>

                <div className="text-center mt-8 sm:mt-10">
                  <h3 className="text-lg sm:text-xl font-bold text-[#e67e22] tracking-wider">
                    COMBINE FOUNDATION
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolunteerCard;
