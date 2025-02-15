import Image from "next/image";

const CardKurikulum = () => {
  return (
    <div className="carousel-item w-[31%]">
      <div className="card bg-secondary w-full shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            width={500}
            height={500}
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            similique quibusdam, eveniet perspiciatis ad consequatur eligendi,
            dolores minus nemo eaque nam ipsam doloribus, molestias velit quasi
            id eius dolor? Rem.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardKurikulum;
