import Carausel from "./components/Carausel";
import CardKegiatan from "./components/CardKegiatan";
import CardKepsek from "./components/CardKepsek";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carausel />
      <div className="w-full justify-between flex p-16">
        <div>
          <h1 className="text-2xl">Kegiatan Terbaru</h1>
          <div className="flex flex-wrap gap-4 h-32">
            <CardKegiatan />
            <CardKegiatan />
          </div>
        </div>
        <CardKepsek />
      </div>
      <Footer />
    </div>
  );
}
