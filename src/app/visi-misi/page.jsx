import Image from "next/image";

const visiMisiPage = () => {
  return (
    <>
      <div className="w-full p-6 flex flex-col md:py-20">
        <div className="visi-misi-container justify-center items-center flex-col md:flex md:flex-row gap-10 w-full">
          <div className="flex flex-col items-center min-h-[84vh] p-5 bg-secondary rounded-lg text-black md:w-1/3">
            <h1 className="text-4xl pb-10 font-semibold">Visi</h1>
            <p>
              Mewujudkan Peserta Didik yang Unggul dalam Prestasi, Beriman,
              Berilmu, Berkarakter dan Berwawasan Global.
            </p>
          </div>
          <Image
            width={500}
            height={500}
            src={"/education.png"}
            className="md:w-96 md:h-96 w-28 h-28 md:my-0 my-6"
            alt="education icon"
          />
          <div className="flex flex-col items-center p-5 bg-secondary text-black rounded-lg md:w-1/3">
            <h1 className="text-4xl pb-10 font-semibold">Misi</h1>
            <ul>
              <li>
                1. Menumbuhkan semangat berkompetisi dan berprestasi peserta
                didik di bidang akademik dan non akademik secara terukur dan
                berkelanjutan.
              </li>
              <br />
              <li>
                2. Menanmakan keimanan dan ketakwaan peserta didik melalui
                pembiasaan aktivitas keagamaan di lingkungan sekolah secara
                berkelanjutan.
              </li>
              <br />
              <li>
                3. Menumbuhkan kemampuan literasi, kecakapan pengetahuan,
                keterampilan, dan sikap, serta penguasaan teknologi peserta
                didik.
              </li>
              <br />
              <li>
                4. Menanamkan dan memberikan keteladanan penerapan budaya
                karakter religious, jujur, disiplin, dan peduli lingkungan pada
                peserta didik.
              </li>
              <br />
              <li>
                5. Menumbuhkan kemampuan dan keterampilan peserta didik yang
                kreatif dan adaptif terhadap isu global melalui kecakapan bahasa
                asing, literasi media informasi, komunikasi, dan teknologi,
                serta pertukaran antar budaya.
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full p-20 bg-secBackground">
        <h1 className="text-center font-bold text-2xl md:text-6xl text-white">
          DIRANCANG BUAT KAMU!
        </h1>
      </div>
    </>
  );
};
export default visiMisiPage;
