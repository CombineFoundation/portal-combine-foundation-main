// src/app/components/lectures/LectureGrid.tsx

"use client";

import React from "react";
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
  const [sortOrder, setSortOrder] = React.useState<"newest" | "oldest">(
    "newest"
  );

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
  };

  const sortedLectures = [...lectures].sort((a, b) => {
    return sortOrder === "newest" ? b.id - a.id : a.id - b.id;
  });

  return (
    <section>
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-xl font-semibold text-black">
          RECENT LECTURE&apos;S
        </h2>
        <div className="flex items-center gap-6">
          <span className="text-xl font-semibold text-black">Sort By:</span>
          <button
            onClick={toggleSort}
            className="text-xl font-semibold text-black cursor-pointer"
          >
            {sortOrder.toUpperCase()} ↓
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
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
