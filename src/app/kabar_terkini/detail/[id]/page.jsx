"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContohUseEffect({ params }) {
  const { id } = params;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/kabar_terkini/${id}`);

        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }

        const result = await res.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <ul className="space-y-4">
        {data.map((item) => (
          <li
            key={item.id}
            className="border p-4 rounded shadow-md flex gap-6 flex-col justify-center items-center md:px-56"
          >
            <h2 className="md:text-3xl text-xl text-black font-semibold text-center">
              {item.judul}
            </h2>
            <Image
              src={item.url}
              width={500}
              height={500}
              alt={item.judul}
              priority
              className="rounded-md"
            />
            <p className="text-gray-600">{buatParagrafBaru(item.isi)}</p>
            <p>
              {new Date(item.tanggal_manual).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
