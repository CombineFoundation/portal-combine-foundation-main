"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface Lecture {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  videoLink: string;
}

interface Props {
  onAddLecture: (lecture: Lecture) => void;
}

export const LectureUpload: React.FC<Props> = ({ onAddLecture }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChooseFilesClick = () => fileInputRef.current?.click();

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl);
    }
  };

  const handleDone = () => {
    if (!title || !description || !link || !thumbnail) {
      alert("Please fill all fields and upload a thumbnail image.");
      return;
    }
    setShowConfirm(true);
  };

  const confirmAdd = () => {
    onAddLecture({
      id: Date.now(),
      imageUrl: thumbnail!,
      title,
      description,
      videoLink: link,
    });

    setTitle("");
    setLink("");
    setDescription("");
    setThumbnail(null);
    setShowConfirm(false);
  };

  return (
    <section className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded shadow mt-8">
      {/* Upload Area */}
      <div className="border-2 border-dashed rounded p-6 text-center border-gray-300">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt="Thumbnail Preview"
            width={200}
            height={150}
            className="mx-auto mb-4 rounded"
          />
        ) : (
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff74cc58e7224af3a17d4d23bee40a555b71ebe6"
            alt="Upload"
            width={200}
            height={150}
            className="mx-auto mb-4"
          />
        )}
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2">
          DRAG VIDEO THUMBNAIL HERE TO ADD THEM OR
        </h2>
        <button
          onClick={handleChooseFilesClick}
          className="text-lg sm:text-xl font-semibold text-orange-600 hover:underline cursor-pointer"
        >
          CHOOSE YOUR FILES
        </button>
        <input
          title="Upload Lecture"
          type="file"
          ref={fileInputRef}
          onChange={handleThumbnailUpload}
          className="hidden"
          accept=".png,.jpg,.jpeg"
        />
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l mt-10">
        <div className="border-r border-b p-4">
          <label className="text-sm font-medium text-black">Link</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter YouTube link"
            className="mt-1 w-full border px-3 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="border-r border-b p-4">
          <label className="text-sm font-medium text-black">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="mt-1 w-full border px-3 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div className="border-r border-b p-4 sm:col-span-2">
          <label className="text-sm font-medium text-black">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Enter description..."
            className="mt-1 w-full border px-3 py-2 text-black rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
      </div>

      {/* Done Button */}
      <button
        onClick={handleDone}
        className="cursor-pointer mt-6 w-full bg-orange-600 text-white py-3 rounded text-lg font-semibold hover:bg-orange-700 transition"
      >
        DONE
      </button>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold text-black mb-2">Add Lecture?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to add this lecture?
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

export default LectureUpload;
