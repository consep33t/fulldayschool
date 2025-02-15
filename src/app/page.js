"use client";
import Carausel from "./components/Carausel";
import CardKabarTerkini from "./components/CardKabarTerkini";
import CardKepsek from "./components/CardKepsek";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/carousel_beranda");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="pt-6">
      <div className="px-6 md:relative">
        <Carausel images={images} />
        <h1 className="text-4xl font-semibold py-5 text-black">
          KabarTerkini Terbaru
        </h1>
        <div className="w-full flex py-6">
          <div className="container-card flex flex-wrap gap-6 w-full md:w-8/12">
            <CardKabarTerkini type="beranda" />
          </div>
        </div>
        <div className="flex justify-center mb-6 md:mb-0 w-full md:w-1/3 md:min-h-[100vh] md:absolute md:top-[80vh] md:right-0">
          <CardKepsek />
        </div>
      </div>
      <div className="w-full h-48 md:h-96 bg bg-primary p-0 flex items-center">
        <h1 className="text-2xl md:text-5xl lg:text-7xl uppercase text-white font-bold ml-20 md:ml-56">
          kelas extra buat
          <br />
          kamu yang extra!!!
        </h1>
      </div>
    </div>
  );
}
