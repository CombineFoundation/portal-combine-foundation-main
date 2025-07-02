"use client";

import Sidebar from "../../components/SideBar-vol";
import { useState, useEffect } from "react";
import picture from "../../images/logo.png";
import Image from "next/image";
import Link from "next/link";
import ADMIN from "../../images/ADMIN.png";

const LecturePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const videos = [
    {
      id: 1,
      title: "Introduction to Volunteering",
      description:
        "Learn the fundamentals of volunteering and community service.",
      image: picture, //VIDEO THUMBNAIL
      link: "https://www.youtube.com/watch?v=wl_qmQpBY8c&t=8s", //VIDEO LINK OF YOUTUBE
    },
    {
      id: 2,
      title: "Community Engagement Basics",
      description: "Essential techniques for effective community interaction.",
      image: picture, //VIDEO THUMBNAIL
      link: "https://www.youtube.com/watch?v=wl_qmQpBY8c&t=8s", //VIDEO LINK OF YOUTUBE
    },
    {
      id: 3,
      title: "Advanced Volunteer Techniques",
      description: "Take your volunteering skills to the next level.",
      image: picture, //VIDEO THUMBNAIL
      link: "https://www.youtube.com/watch?v=wl_qmQpBY8c&t=8s", //VIDEO LINK OF YOUTUBE
    },
  ];

  return (
    <div className="flex bg-white h-screen">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isMobile ? isCollapsed : false}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main Content Wrapper */}
      <div
        className={`
          flex flex-col w-full
          transition-all duration-300
          ${isMobile ? (isCollapsed ? "ml-0" : "ml-64") : "md:ml-64"}
        `}
      >
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <button
            className="fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-600 text-white"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Open menu" : "Close menu"}
          >
            {isCollapsed ? (
              <svg
                className="h-6 w-6"
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
                className="h-6 w-6"
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
        )}

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8 relative">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600 w-full text-center md:text-left">
              LECTURE MATERIALS
            </h1>
            <Link
              href="/volunteer/dashboard/profile"
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Profile"
            >
              <Image
                src={ADMIN}
                alt="Avatar"
                className="avatar text-gray-800 cursor-pointer"
                width={75}
                height={75}
              />
            </Link>
          </div>

          {/* Video Lectures */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Video Lectures
            </h2>
            <div className="flex flex-col space-y-8 w-full max-w-4xl mx-auto">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex flex-col md:flex-row gap-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div className="w-full md:w-1/2 lg:w-2/5 relative aspect-video">
                    <Image
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-4">
                        {video.description}
                      </p>
                    </div>
                    <Link
                      href={`${video.link}`}
                      className="self-start md:self-end text-orange-600 hover:text-orange-700 text-sm md:text-base font-medium flex items-center"
                    >
                      Watch Now
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LecturePage;
