"use client";
import CaraouselProgramKegiatan from "../components/CarausellProgramKegiatan";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";
import { useState, useEffect } from "react";

const ProgramKegiatanPage = () => {
  const [heroProgramKegiatan, setHeroProgramKegiatan] = useState(null);
  const [popUp, setPopUp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, popUpRes] = await Promise.all([
          fetch("/api/hero_program_kegiatan/judul?search=program kegiatan"),
          fetch("/api/popup_program_kegiatan"),
        ]);

        const heroData = await heroRes.json();
        const popUpData = await popUpRes.json();

        setHeroProgramKegiatan(heroData);
        setPopUp(popUpData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-black uppercase">loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-black uppercase">ERROR: 500 </h1>
        <h4 className="text-4xl text-black uppercase">
          server bermasalah silakan coba lagi dalam beberapa saat
        </h4>
      </div>
    );
  }

  return (
    <>
      <div className="w-full p-6 relative">
        <div className="w-full h-[70vh]">
          <HeroProgramKegiatan
            data={heroProgramKegiatan}
            title="Program & Kegiatan"
            subtitle="FULLDAY CLASS"
            type="program-kegiatan"
          />
        </div>
        {popUp.map((data, index) => (
          <button
            key={index}
            className="w-56 h-48 bg-secondary rounded-xl shadow-xl p-4 text-white absolute top-[60vh] right-20 text-xs"
          >
            <p className="text-lg font-light text-center">{data.paragraf}</p>
          </button>
        ))}
        <h1 className="text-3xl mt-24 md:mt-0 md:text-4xl md:my-5 uppercase text-accent font-bold text-center py-6">
          program kegiatan
        </h1>
        <div>
          <CaraouselProgramKegiatan />
        </div>
      </div>
      <div className="p-10 md:p-16 w-full bg-secondary text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-end">
          IKUTI SERUNYA KEGIATAN
          <br /> BELAJAR DI KELAS FULLDAY!
        </h1>
      </div>
    </>
  );
};

export default ProgramKegiatanPage;
