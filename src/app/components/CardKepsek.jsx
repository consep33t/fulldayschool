const CardKepsek = () => {
  return (
    <div className="card bg-background w-[70%] shadow-xl transform translate-y-[-20%]">
      <figure className="pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl h-80 w-64 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title text-white">Shoes!</h2>
        <p>
          If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Alias tempore dolore, autem
          deleniti officia labore magni esse vero sed architecto nobis sequi
          illo ea, perspiciatis quo obcaecati, ipsam nesciunt doloribus?
        </p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default CardKepsek;
