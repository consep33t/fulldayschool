import CaraouselProgramKegiatan from "../components/CarausellProgramKegiatan";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";

const programKegiatanPage = () => {
  return (
    <div className="w-full p-6">
      <div className="w-full h-[70vh]">
        <HeroProgramKegiatan />
      </div>
      <div>
        <h1 className="text-4xl py-5">program</h1>
        <CaraouselProgramKegiatan />
        <h1 className="text-4xl py-5">kegiatan</h1>
        <CaraouselProgramKegiatan />
      </div>
    </div>
  );
};
export default programKegiatanPage;
