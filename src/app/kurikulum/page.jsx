"use client";
import { useEffect, useState } from "react";
import CardKurikulum from "../components/CardKurikulum";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";

const KurikulumPage = () => {
  const [heroProgramKegiatan, setHeroProgramKegiatan] = useState(null);

  useEffect(() => {
    const fetchKabarTerkini = async () => {
      try {
        const res = await fetch(
          "/api/hero_program_kegiatan/judul?search=kurikulum"
        );
        const data = await res.json();
        setHeroProgramKegiatan(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchKabarTerkini();
  }, []);

  if (!heroProgramKegiatan) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full p-6 space-y-6">
        <div className="w-full bg-secondary rounded-2xl flex items-center justify-center h-[70vh]">
          <HeroProgramKegiatan
            type="kurikulum"
            title="KURIKULUM"
            data={heroProgramKegiatan}
          />
        </div>
        <h1 className="text-6xl text-black font-semibold">Kurikulum</h1>
        <div className="carousel carousel-end space-x-12">
          <CardKurikulum />
        </div>
      </div>
      <div className="bg-blue-500 w-full h-96 flex justify-end items-center p-6">
        <h1 className="text-6xl text-white font-bold text-end">
          IKUTI SERUNYA KEGIATAN
          <br /> BELAJAR DI KELAS FULLDAY!
        </h1>
      </div>
    </>
  );
};
export default KurikulumPage;
