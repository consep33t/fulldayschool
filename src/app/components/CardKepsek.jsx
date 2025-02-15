"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const CardKepsek = () => {
  const [kepsek, setKepsek] = useState([]);

  // Ambil data gambar saat komponen dimuat
  useEffect(() => {
    const fetchKepsek = async () => {
      try {
        const res = await fetch("/api/kepala_sekolah");
        const data = await res.json();
        setKepsek(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchKepsek();
  }, []);

  return (
    <div className="card bg-white bg-opacity-75 border-2 border-secondary w-full md:w-[70%] shadow-xl transform md:translate-y-[-20%]">
      {kepsek.map((data) => (
        <div key={data.id}>
          <figure className="pt-10">
            <Image
              width={500}
              height={500}
              src={data.url}
              alt="foto kepala sekolah"
              className="rounded-xl h-80 w-64 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title mb-6 text-background font-semibold">
              {data.nama}
            </h2>
            <p className="text-sm text-justify">{data.paragraf}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardKepsek;
