const HeroProgramKegiatan = ({ title, subtitle, type }) => {
  return (
    <>
      {type === "program-kegiatan" ? (
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            borderRadius: "15px",
          }}
        >
          <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl text-white">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <h2 className="mb-5 text-4xl font-semibold">{subtitle}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="hero h-full"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            borderRadius: "15px",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroProgramKegiatan;
