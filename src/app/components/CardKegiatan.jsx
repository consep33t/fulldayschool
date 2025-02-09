import * as motion from "motion/react-client";

const CardKegiatan = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="card card-side bg-primary shadow-xl h-72"
    >
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </motion.div>
  );
};
export default CardKegiatan;
