"use client";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";
import { useState, useEffect } from "react";

const KesiswaanPage = () => {
  const [heroProgramKegiatan, setHeroProgramKegiatan] = useState(null);

  useEffect(() => {
    const fetchKabarTerkini = async () => {
      try {
        const res = await fetch(
          "/api/hero_program_kegiatan/judul?search=siswa kelas 7"
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
    <div className="w-full p-6 space-y-6">
      <div>
        <h1 className="text-5xl text-black font-semibold capitalize">
          {heroProgramKegiatan.map((data) => data.judul)}
        </h1>
        <div className="w-full h-screen">
          <HeroProgramKegiatan type="kesiswaan" data={heroProgramKegiatan} />
        </div>
      </div>
    </div>
  );
};
export default KesiswaanPage;
