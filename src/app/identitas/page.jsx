import Image from "next/image";
import Carousel from "../components/Carausel";

const identitasPage = () => {
  return (
    <>
      <div className="w-full p-6">
        <Carousel />
        <div className="w-full flex gap-10 justify-between pt-10 relative">
          <div className="w-2/3 flex flex-col items-end gap-10">
            <div className="w-3/4 h-96 rounded-md translate-y-[-15vh] shadow-md">
              <Image
                src="/maapss.png"
                alt="maapss"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-1/3 p-16 absolute top-0 right-0">
            <div className="w-full bg-secondary h-[90vh] rounded-md flex justify-center p-5 text-black">
              hoo
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-400 h-96">
        <div className="containet-text text-white p-16 w-1/2">
          <h1 className="text-2xl text-white font-bold">title ...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
            aperiam debitis nam quos eveniet eum porro officiis earum.
            Architecto nobis dignissimos incidunt eos autem at repellendus qui
            nesciunt laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
            aperiam debitis nam quos eveniet eum porro officiis earum.
            Architecto nobis dignissimos incidunt eos autem at repellendus qui
            nesciunt laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
            aperiam debitis nam quos eveniet eum porro officiis earum.
            Architecto nobis dignissimos incidunt eos autem at repellendus qui
            nesciunt laudantium.
          </p>
        </div>
      </div>
      <div className="w-full bg-blue-600 text-white p-16">
        <h1 className="text-6xl font-bold text-end">
          KELAS FULLDAY
          <br /> BUAT KAMU YANG
          <br /> INGIN BELAJAR LEBIH!
        </h1>
      </div>
    </>
  );
};

export default identitasPage;
