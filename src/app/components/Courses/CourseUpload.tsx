// src/app/components/Courses/CourseUpload.tsx
"use client";

import React, { useState } from "react";

interface Course {
  id: number;
  title: string;
  heading: string;
  description: string;
  link: string;
}

interface Props {
  onAddCourse: (course: Course) => void;
}

const CourseUpload: React.FC<Props> = ({ onAddCourse }) => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDone = () => {
    if (!title || !heading || !description || !link) {
      alert("Please fill all fields.");
      return;
    }
    setShowConfirm(true);
  };

  const confirmAdd = () => {
    onAddCourse({
      id: Date.now(),
      title,
      heading,
      description,
      link,
    });

    setTitle("");
    setHeading("");
    setDescription("");
    setLink("");
    setShowConfirm(false);
  };

  return (
    <section className="max-w-5xl mx-auto p-6 mt-8 bg-white rounded shadow">
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l mt-10">
        <div className="border-r border-b p-4">
          <label className="text-sm font-medium text-black">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            className="text-black mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="border-r border-b p-4">
          <label className="text-sm font-medium text-black">Heading</label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter heading"
            className="text-black mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="border-r border-b p-4 sm:col-span-2">
          <label className="text-sm font-medium text-black">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Enter course description..."
            className="text-black mt-1 w-full border px-3 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="border-r border-b p-4 sm:col-span-2">
          <label className="text-sm font-medium text-black">
            Classroom Link
          </label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter classroom or YouTube link"
            className="text-black mt-1 w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
      </div>

      <button
        onClick={handleDone}
        className="cursor-pointer mt-6 w-full bg-orange-600 text-white py-3 rounded text-lg font-semibold hover:bg-orange-700"
      >
        DONE
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold text-black mb-2">Add Course?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to add this course?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border text-black rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmAdd}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseUpload;
