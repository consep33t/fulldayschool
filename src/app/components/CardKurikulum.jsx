"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CardKurikulum = () => {
  const [kurikulum, setKurikulum] = useState(null);

  useEffect(() => {
    const fetchKabarTerkini = async () => {
      try {
        const res = await fetch("/api/kurikulum");
        const data = await res.json();
        setKurikulum(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchKabarTerkini();
  }, []);

  if (!kurikulum) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {kurikulum.map((data) => (
        <div key={data.id} className="carousel-item w-[85%] md:w-[28%]">
          <div className="card bg-secondary w-full shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                width={500}
                height={500}
                src={data.url}
                alt={data.judul}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title">{data.judul}</h2>
              <p className="text-justify">{data.deskripsi}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardKurikulum;
