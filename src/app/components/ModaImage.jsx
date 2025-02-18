// components/Carousel.js
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImages(data);
        setActiveIndex(Math.floor(data.length / 2));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-6">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
        >
          &lt;
        </button>
        <div className="w-full h-[70vh] flex items-center justify-center">
          {images.length > 0 ? (
            <Image
              width={800}
              height={600}
              src={images[activeIndex].url}
              alt={images[activeIndex].namaFoto}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="flex gap-2 overflow-x-scroll w-2/3 py-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer ${
              activeIndex === index ? "border-4 border-blue-500 rounded-md" : ""
            }`}
          >
            <Image
              width={80}
              height={80}
              src={image.url} // Menggunakan url dari response API
              alt={image.namaFoto}
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
