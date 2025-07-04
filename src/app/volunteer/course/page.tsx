"use client";

import { useState } from "react";
import Sidebar from "../../components/SideBar-vol";

const CoursePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Array of course data
  const courses = [
    {
      id: 1,
      badge: "FIRST COURSE",
      title: "Web Development and Artificial Intelligence",
      description:
        "🌐 Learn Web Development with HTML, CSS, JS & more through 💻 hands-on projects and 👨‍🏫 live classes!",
      button: "Enroll Now",
      classroomUrl: "https://classroom.google.com/c/Nzg1NDgyNzU1OTM0",
    },
    {
      id: 2,
      badge: "SECOND COURSE",
      title: "Python & AI Automation",
      description:
        "🤖 Master Python, AI & Automation with 💻 hands-on projects and 👨‍🏫 expert-led classroom learning — perfect for beginners!",
      button: "Enroll Now",
      classroomUrl: "https://classroom.google.com/c/Nzg1NDgzNDExNDky",
    },
    // {
    //   id: 3,
    //   badge: "THIRD COURSE",
    //   title: "Leadership in Volunteering",
    //   description:
    //     "Develop leadership skills and learn to manage teams during community events.",
    //   // button: "Start Learning",
    //   button: "Enroll Now",
    //   classroomUrl: "https://classroom.google.com/c/third-course-id",
    // },
    // {
    //   id: 4,
    //   badge: "FOURTH COURSE",
    //   title: "Emergency Response Basics",
    //   description:
    //     "Learn basic safety, first aid, and emergency response techniques for volunteers.",
    //   // button: "Access Now",
    //   button: "Enroll Now",
    //   classroomUrl: "https://classroom.google.com/c/fourth-course-id",
    // },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-orange-600 text-white"
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

      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content */}
      <main
<<<<<<< HEAD
        className={`flex-1 p-4 md:p-8 transition-all duration-300 ${
          isCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
=======
       className={`flex-1 p-4 md:p-8 transition-all duration-300 ${
       isCollapsed ? "md:ml-16" : "md:ml-64"
      }`}
>

>>>>>>> 0c8a77c23016f002aedcc59b2ed024943fe44bdf
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pl-10 md:pl-0">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            COURSES
          </h1>
        </div>

        {/* Courses Section */}
        <div className="space-y-6 max-w-4xl mr-18 mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {course.badge}
                  </span>
                  <h3 className="text-lg font-bold text-gray-700 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
                <div>
                  <button
<<<<<<< HEAD
                    className="cursor-pointer px-4 py-3 text-white bg-orange-600 hover:bg-orange-700 w-full md:w-40 rounded-lg text-center transition-colors"
=======
                   className="cursor-pointer px-4 py-3 text-white bg-orange-600 hover:bg-orange-700 w-full md:w-40 rounded-lg text-center transition-colors"

>>>>>>> 0c8a77c23016f002aedcc59b2ed024943fe44bdf
                    aria-label={`Enroll in ${course.title}`}
                    onClick={() => window.open(course.classroomUrl, "_blank")}
                  >
                    {course.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
