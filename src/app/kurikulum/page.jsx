import CardKurikulum from "../components/CardKurikulum";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";

const KurikulumPage = () => {
  return (
    <div className="w-full p-6 space-y-6">
      <div className="w-full h-[70vh]">
        <HeroProgramKegiatan />
      </div>
      <h1 className="text-4xl">Kurikulum</h1>
      <div className="flex flex-wrap justify-between gap-6">
        <CardKurikulum />
        <CardKurikulum />
        <CardKurikulum />
      </div>
    </div>
  );
};
export default KurikulumPage;
