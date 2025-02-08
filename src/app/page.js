import Carausel from "./components/Carausel";
import CardKegiatan from "./components/CardKegiatan";
import CardKepsek from "./components/CardKepsek";

export default function Home() {
  return (
    <div className="px-6">
      <Carausel />
      <h1 className="text-4xl font-semibold py-5">Kegiatan Terbaru</h1>
      <div className="w-full gap-5 flex pb-5">
        <div className="container-card flex flex-wrap gap-4 h-auto w-4/6">
          <CardKegiatan />
          <CardKegiatan />
          <CardKegiatan />
          <CardKegiatan />
        </div>
        <div className="w-4/12 flex justify-end">
          <CardKepsek />
        </div>
      </div>
    </div>
  );
}
