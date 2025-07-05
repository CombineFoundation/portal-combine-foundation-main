"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Props {
  title: string;
  heading: string;
  description: string;
  link: string;
  onDelete: () => void;
}

const CourseCard: React.FC<Props> = ({
  title,
  heading,
  description,
  link,
  onDelete,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete();
    setShowConfirm(false);
  };

  return (
    <>
      <article className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <header className="bg-[#FF5D15] px-4 py-4 sm:px-6 sm:py-5">
          <h1 className="text-white text-lg sm:text-xl font-bold uppercase">
            {title}
          </h1>
        </header>

        <div className="px-4 py-4 sm:px-6 sm:py-5 space-y-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            {heading}
          </h2>
          <p className="text-sm text-gray-700 uppercase">{description}</p>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-4">
            <Link
              href={link}
              target="_blank"
              className="text-center bg-orange-100 text-orange-600 px-4 py-2 rounded hover:bg-orange-200 text-sm font-medium w-full sm:w-auto"
            >
              Enroll Now
            </Link>

            <button
              onClick={handleDelete}
              className="bg-[#FF5D15] hover:bg-[#e54d0d] text-white text-sm font-semibold py-2 px-4 rounded-md w-full sm:w-auto"
            >
              Delete Course
            </button>
          </div>
        </div>
      </article>

      {/* Confirm Delete Popup */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h3 className="text-lg font-bold text-black mb-2">
              Delete Course?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete this course?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border text-black rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
