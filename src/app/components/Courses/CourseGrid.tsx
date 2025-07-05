// src/app/components/Courses/CourseGrid.tsx
"use client";

import React, { useState } from "react";
import CourseUpload from "./CourseUpload";
import CourseCard from "./CourseCard";

interface Course {
  id: number;
  title: string;
  heading: string;
  description: string;
  link: string;
}

const CourseGrid: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");

  const handleAddCourse = (course: Course) => {
    setCourses((prev) => [...prev, course]);
  };

  const handleDeleteCourse = (id: number) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "Newest" ? "Oldest" : "Newest"));
  };

  const sortedCourses = [...courses].sort((a, b) =>
    sortOrder === "Newest" ? b.id - a.id : a.id - b.id
  );

  return (
    <>
      <CourseUpload onAddCourse={handleAddCourse} />

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Recent Courses</h2>
          <button
            onClick={toggleSort}
            className="text-base font-semibold text-black hover:underline"
          >
            Sort: {sortOrder}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {sortedCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              heading={course.heading}
              description={course.description}
              link={course.link}
              onDelete={() => handleDeleteCourse(course.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseGrid;
