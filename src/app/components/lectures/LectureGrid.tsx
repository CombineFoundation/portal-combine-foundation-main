"use client";

import React, { useState } from "react";
import LectureCard from "./LectureCard";

interface Lecture {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  videoLink: string;
}

interface LectureGridProps {
  lectures: Lecture[];
  onDelete: (id: number) => void;
}

export const LectureGrid: React.FC<LectureGridProps> = ({
  lectures,
  onDelete,
}) => {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  const sortedLectures = [...lectures].sort((a, b) =>
    sortOrder === "newest" ? b.id - a.id : a.id - b.id
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-10">
      {/* Heading & Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h2 className="text-2xl font-bold text-black uppercase">
          Recent Lectures
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-base font-medium text-black">Sort by:</span>
          <button
            onClick={toggleSort}
            className="text-base font-semibold text-orange-600 hover:underline"
          >
            {sortOrder.toUpperCase()} ↓
          </button>
        </div>
      </div>

      {/* Lecture Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedLectures.map((lecture) => (
          <LectureCard
            key={lecture.id}
            imageUrl={lecture.imageUrl}
            videoLink={lecture.videoLink}
            title={lecture.title}
            description={lecture.description}
            onDelete={() => onDelete(lecture.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default LectureGrid;
