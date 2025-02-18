const HeroProgramKegiatan = ({ title, subtitle, type, data }) => {
  return (
    <>
      {data.map((data) => (
        <div
          key={data.id}
          className="hero h-full"
          style={{
            backgroundImage: `url(${data.url})`,
            borderRadius: "15px",
            backgroundPosition: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-4xl text-white">
              <h1 className="mb-5 text-2xl md:text-7xl font-bold">{title}</h1>
              <h2 className="mb-5 md:text-5xl font-semibold">{subtitle}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default HeroProgramKegiatan;
