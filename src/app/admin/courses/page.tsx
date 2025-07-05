"use client";

import React from "react";
import CourseGrid from "../../components/Courses/CourseGrid";

const CoursesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-10 px-6">
      {/* Page Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Courses</h1>
        <p className="text-gray-600 mt-1">
          Manage and publish courses for volunteers and students.
        </p>
      </div>

      <CourseGrid />
    </div>
  );
};

export default CoursesPage;
