import Image from "next/image";

const visiMisiPage = () => {
  return (
    <>
      <div className="w-full p-6 flex flex-col py-20">
        <div className="visi-container flex gap-10 w-full">
          <div className="flex flex-col items-center p-5 bg-secondary rounded-lg text-black w-1/3 h-[75vh]">
            <h1 className="text-4xl font-semibold">visi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              totam fugit, sint labore expedita necessitatibus deleniti neque
              voluptas maxime perspiciatis similique repellendus aliquam,
              temporibus esse magnam blanditiis repudiandae nisi eveniet!
            </p>
          </div>
          <div className="w-full flex h-[75vh]">
            <div className="w-full h-[45vh]">
              <Image
                src="/maapss.png"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="misi-container flex w-full justify-end gap-10">
          <div className="w-full flex items-end h-[75vh]">
            <div className="w-full h-[45vh]">
              <Image
                src="/maapss.png"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center p-5 bg-secondary text-black rounded-lg w-1/3 h-[75vh]">
            <h1 className="text-4xl font-semibold">visi</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              totam fugit, sint labore expedita necessitatibus deleniti neque
              voluptas maxime perspiciatis similique repellendus aliquam,
              temporibus esse magnam blanditiis repudiandae nisi eveniet!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-20 bg-secBackground">
        <h1 className="text-center font-bold text-6xl text-white">
          DIRANCANG BUAT KAMU!
        </h1>
      </div>
    </>
  );
};
export default visiMisiPage;
