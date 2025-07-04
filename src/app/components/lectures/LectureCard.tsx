"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LectureCardProps {
  imageUrl: string;
  videoLink: string; // ✅ Add this
  title: string;
  description: string;
  onDelete: () => void;
}

const LectureCard: React.FC<LectureCardProps> = ({
  imageUrl,
  videoLink,
  title,
  description,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      {/* Thumbnail */}
      <Image
        src={imageUrl}
        alt={title}
        width={610}
        height={200}
        className="rounded mb-3 object-cover w-full h-[160px]"
      />

      {/* Title and Description */}
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-700 mt-1 flex-1">{description}</p>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center">
        {videoLink && (
          <Link
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-100 text-orange-600 px-4 py-2 rounded hover:bg-orange-200 text-sm font-medium"
          >
            Watch Now
          </Link>
        )}

        <button
          onClick={() => {
            if (confirm("Are you sure you want to delete this lecture?")) {
              onDelete();
            }
          }}
          className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default LectureCard;
