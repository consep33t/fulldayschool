import CardKurikulum from "../components/CardKurikulum";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";

const KurikulumPage = () => {
  return (
    <>
      <div className="w-full p-6 space-y-6">
        <div className="w-full h-[70vh]">
          <HeroProgramKegiatan />
        </div>
        <h1 className="text-6xl text-black font-semibold">Kurikulum</h1>
        <div className="carousel carousel-end space-x-12">
          <CardKurikulum />
          <CardKurikulum />
          <CardKurikulum />
          <CardKurikulum />
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
