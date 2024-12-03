"use client";

import React, { useState } from "react";

const CreateVault: React.FC = () => {
  const [imageLink, setImageLink] = useState<string>("");
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!imageLink) {
      alert("Please enter an image link.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000?image=${encodeURIComponent(imageLink)}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to process the image.");
      }

      const data = await response.json();
      setOutputImage(data.outputImageUrl);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Upload Image for Detection</h1>
      <form
        className="flex flex-col items-center bg-white p-6 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <label className="mb-2 font-semibold text-gray-700">
          Image Link:
          <input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            className="mb-4 mt-2 ml-4 p-2 border rounded w-64"
            placeholder="Enter image link"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-950 text-white font-bold rounded hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
      {loading && (
        <p className="text-blue-500 mt-4">Processing your image...</p>
      )}
      {outputImage && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Output Image</h2>
          <img
            src={outputImage}
            alt="Processed Output"
            className="max-w-full rounded border"
          />
        </div>
      )}
    </div>
  );
};

export default CreateVault;
