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
      <div className="flex min-h-screen bg-white items-center justify-center">
        <p className="text-gray-500">Loading volunteer data...</p>
      </div>
    );
  }

  const qrData = JSON.stringify({
    name: volunteerData?.fullName,
    id: volunteerData?.volunteerId,
    foundation: "COMBINE FOUNDATION",
  });

  return (
    <div className="flex bg-white min-h-screen">
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
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
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
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
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
        <div className="w-8" />
      </div>

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <main
        className={`flex-1 mt-14 md:mt-0 transition-all duration-300 ${isCollapsed ? "md:ml-0" : "md:ml-64"}`}
      >
        <div className="p-4 sm:p-6 lg:p-10 md:ml-64">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <h1 className="text-2xl font-bold text-orange-600">
              VOLUNTEER ID CARD
            </h1>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => window.print()}
              aria-label="Print ID card"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center print:flex print:flex-col print:items-center">
            {/* Front Card */}
            <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden print:break-after-page">
              <div className="bg-orange-600 py-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-md p-2 mb-4">
                  <Image src={logo} alt="Logo" width={96} height={96} />
                </div>
                <h2 className="text-white text-xl font-bold">
                  COMBINE FOUNDATION
                </h2>
              </div>
              <div className="p-6 text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-orange-100 border-4 border-orange-200 mx-auto flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-600">
                    {getInitials(volunteerData?.fullName)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {volunteerData?.fullName}
                </h3>
                <p className="text-gray-700">
                  Co-ordinator and Innovation Lead
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">ID:</span>{" "}
                  {volunteerData?.volunteerId}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Join Date:</span>{" "}
                  {volunteerData?.joinDate}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> +92 316 378243
                </p>
              </div>
            </div>
            {/* Back Card */}
            <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
              <div className="p-5 text-center border-b border-gray-200">
                <br />
                <h2 className="text-xl font-bold text-gray-800">
                  Volunteer Information
                </h2>
              </div>
              <div className="p-6 space-y-4 text-center">
                <div className="flex justify-center">
                  <div className="p-3 border border-gray-300 rounded-lg">
                    <QRCode value={qrData} size={120} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {volunteerData?.fullName}
                </h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Valid from:</span>{" "}
                  {volunteerData?.validFrom}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Valid thru:</span>{" "}
                  {volunteerData?.validThru}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">CNIC:</span>{" "}
                  {volunteerData?.cnic}
                </p>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mt-4">
                  <p className="font-bold text-gray-800 mb-1">
                    In Case of Emergency
                  </p>
                  <p className="text-gray-700">
                    Please contact COMBINE FOUNDATION
                  </p>
                  <p className="font-bold text-gray-800 mt-1">+92 316 378243</p>
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
