import Carausel from "./components/Carausel";
import CardKegiatan from "./components/CardKegiatan";
import CardKepsek from "./components/CardKepsek";

export default function Home() {
  return (
    <div className="pt-6">
      <div className="px-6 relative">
        <Carausel />
        <h1 className="text-4xl font-semibold py-5">Kegiatan Terbaru</h1>
        <div className="w-full flex py-6">
          <div className="container-card flex flex-wrap gap-6 w-8/12">
            <CardKegiatan />
            <CardKegiatan />
            <CardKegiatan />
            <CardKegiatan />
          </div>
        </div>
        <div className="flex justify-center w-1/3 h-[100vh] absolute top-[80vh] right-0">
          <CardKepsek />
        </div>
      </div>
      <div className="w-full h-96 bg bg-primary p-0 flex items-center">
        <h1 className="text-7xl uppercase text-white font-bold ml-56">
          kelas extra buat
          <br />
          kamu yang extra!!!
        </h1>
      </div>
    </div>
  );
}
