// src/app/admin/lectures/page.tsx

"use client";

import React, { useState } from "react";
import { LectureUpload } from "../../components/lectures/LectureUpload";
import { LectureGrid } from "../../components/lectures/LectureGrid";

interface Lecture {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  videoLink: string;
}

const LecturePage: React.FC = () => {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const handleAddLecture = (lecture: Lecture) => {
    setLectures((prev) => [lecture, ...prev]);
  };

  const handleDeleteLecture = (id: number) => {
    setLectures((prev) => prev.filter((lec) => lec.id !== id));
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Lectures</h1>
        <p className="text-gray-600 mt-1">
          Manage and publish lectures for volunteers and students.
        </p>
      </div>
      <LectureUpload onAddLecture={handleAddLecture} />
      <LectureGrid lectures={lectures} onDelete={handleDeleteLecture} />
    </div>
  );
};

export default LecturePage;
