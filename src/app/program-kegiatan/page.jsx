import CaraouselProgramKegiatan from "../components/CarausellProgramKegiatan";
import HeroProgramKegiatan from "../components/HeroProgramKegiatan";

const programKegiatanPage = () => {
  return (
    <>
      <div className="w-full p-6 relative">
        <div className="w-full h-[70vh]">
          <HeroProgramKegiatan
            title="Program & Kegiatan"
            subtitle="FULLDAY CLASS"
            type="program-kegiatan"
          />
        </div>
        <div className="w-56 h-48 hover:translate-y-[-25vh] bg-secondary rounded-xl shadow-xl p-4 text-accent absolute top-[60vh] right-20 text-xs">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            minus nesciunt possimus doloremque, exercitationem placeat,
            voluptatibus nobis numquam nemo sapiente enim tenetur eius sunt
            quisquam ducimus hic. Maxime, vero repellat.
          </p>
        </div>
        <h1 className="text-3xl mt-24 md:mt-0 md:text-6xl uppercase text-accent font-bold text-center py-6">
          program kegiatan
        </h1>
        <div className="">
          <CaraouselProgramKegiatan />
        </div>
      </div>
      <div className="p-10 md:p-16 w-full bg-secondary text-white">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-end">
          IKUTI SERUNYA KEGIATAN
          <br /> BELAJAR DI KELAS FULLDAY!
        </h1>
      </div>
    </>
  );
};
export default programKegiatanPage;
