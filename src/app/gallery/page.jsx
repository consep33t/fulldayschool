"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState([]);

  // Ambil data gambar saat komponen dimuat
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              width={500}
              height={500}
              src={image.url}
              alt={image.namaFoto}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{image.namaFoto}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
