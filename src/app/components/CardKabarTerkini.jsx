"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CardKabarTerkini = ({ type }) => {
  const [kabarTerkini, setKabarTerkini] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchKabarTerkini = async () => {
      try {
        const res = await fetch("/api/kabar_terkini");
        const data = await res.json();
        setKabarTerkini(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchKabarTerkini();
  }, []);

  const potongSebelumNewline = (text) => {
    const index = text.indexOf("\n");
    if (index !== -1) {
      return text.substring(0, index);
    }
    return text;
  };

  const dataTampil =
    type === "beranda" ? kabarTerkini.slice(0, 4) : kabarTerkini;

  const handleDetailClick = (id) => {
    router.push(`/kabar_terkini/detail/${id}`);
  };

  return (
    <>
      {dataTampil.map((data) => (
        <motion.div
          key={data.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="card md:card-side bg-primary shadow-xl md:h-72"
        >
          <figure className="w-full md:w-1/3">
            <Image
              width={500}
              height={500}
              src={data.url}
              alt={data.judul}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body text-black md:w-2/3">
            <h2
              className="card-title cursor-pointer"
              onClick={() => handleDetailClick(data.id)}
            >
              {data.judul}
            </h2>
            <p className="">{potongSebelumNewline(data.isi)}</p>
            <p className="text-slate-600">
              {new Date(data.tanggal_manual).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default CardKabarTerkini;
