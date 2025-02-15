"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CaraouselProgramKegiatan = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const res = await fetch("/api/program_kegiatan");
        const data = await res.json();
        setKegiatan(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchKegiatan();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? kegiatan.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === kegiatan.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {kegiatan.map((data, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="card min-h-[70vh] md:card-side h-full bg-secondary shadow-xl w-full">
              <figure className="w-full lg:w-1/3">
                <Image
                  width={500}
                  height={500}
                  src={data.url}
                  alt="Album"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body w-full lg:w-2/3 text-lg text-white">
                <h2 className="card-title font-bold text-3xl">{data.judul}</h2>
                <p>{data.isi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={handlePrev} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
};

export default CaraouselProgramKegiatan;
