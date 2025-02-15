"use client";
import Carousel from "../components/Carausel";
import { useEffect, useState } from "react";

const IdentitasPage = () => {
  const [images, setImages] = useState([]);
  const [identitas, setIdentitas] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/carousel_identitas");
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const fetchIdentitas = async () => {
      try {
        const res = await fetch("/api/identitas");
        const data = await res.json();
        setIdentitas(data);
      } catch (error) {
        console.error("Error fetching data identitas:", error);
      }
    };

    fetchIdentitas();
  }, []);

  const buatParagrafBaru = (text) => {
    return text.split("\n").map((baris, index) => (
      <span key={index}>
        {baris}
        <br />
        <br />
      </span>
    ));
  };

  return (
    <>
      <div className="w-full p-6">
        <Carousel images={images} />
        <div className="w-full flex gap-10 justify-between pt-10 relative">
          <div className="w-2/3 flex flex-col items-end gap-10">
            <div className="w-3/4 h-96 rounded-md translate-y-[-15vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.997230602062!2d98.64025207755822!3d3.5881093870676617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f072605079d%3A0xe538864935810201!2sSMP%20PANCA%20BUDI%20MEDAN!5e0!3m2!1sid!2sid!4v1739483637954!5m2!1sid!2sid"
                className="w-full h-full object-cover rounded-xl shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-1/3 p-16 absolute top-0 right-0">
            <div className="w-full bg-secondary h-[75vh] rounded-md flex flex-col gap-3 justify-center p-5 text-black">
              <h3 className="text-center text-xl font-bold">Jadwal Masuk</h3>
              <ul className="font-semibold">
                <li>Senin : 07:30 - 16:00</li>
                <li>Selasa : 07:30 - 16:00</li>
                <li>Rabu : 07:30 - 16:00</li>
                <li>Kamis : 07:30 - 16:00</li>
                <li>Jum`at : 07:30 - 16:00</li>
                <li>
                  Sabtu : <a className="text-red-600">Libur</a>
                </li>
                <li>
                  Minggu: <a className="text-red-600">Libur</a>
                </li>
              </ul>
              <h3 className="text-justify">
                Kelas Fullday juga menawarkan beragam kegiatan ekstrakurikuler
                yang lebih banyak dan beragam. Siswa memiliki kesempatan untuk
                mengikuti berbagai aktivitas yang mendukung pengembangan
                karakter, keterampilan sosial, dan kreativitas mereka. Dengan
                lingkungan belajar yang lebih dinamis dan interaktif, kelas ini
                menjadi pilihan tepat bagi siswa yang ingin mendapatkan
                pengalaman belajar yang lebih luas dan bermanfaat.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-400">
        {identitas.map((data, index) => (
          <div key={index} className="containet-text text-white p-16 w-2/3">
            <h1 className="text-5xl pb-6 text-white font-bold">{data.judul}</h1>
            <p className="text-balance text-xl">
              {buatParagrafBaru(data.deskripsi)}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full bg-blue-600 text-white p-16">
        <h1 className="text-6xl font-bold text-end">
          KELAS FULLDAY
          <br /> BUAT KAMU YANG
          <br /> INGIN BELAJAR LEBIH!
        </h1>
      </div>
    </>
  );
};

export default IdentitasPage;
