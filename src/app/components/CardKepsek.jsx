const CardKepsek = () => {
  return (
    <div className="card bg-slate-500 w-[80%] shadow-xl transform">
      <figure className="px-10 pt-10 translate-y-[-10vh]">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl h-80 w-64"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
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
