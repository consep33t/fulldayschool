import Carousel from "../components/Carausel";

const identitasPage = () => {
  return (
    <div className="w-full p-6">
      <Carousel />
      <div className="w-full flex gap-10 justify-between pt-10">
        <div className="w-2/3 flex flex-col items-end gap-10">
          <div className="w-3/4 bg-blue-400 h-96 rounded-md translate-y-[-15vh] shadow-md"></div>
          <div className="w-full h-96 rounded-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              tenetur aperiam debitis nam quos eveniet eum porro officiis earum.
              Architecto nobis dignissimos incidunt eos autem at repellendus qui
              nesciunt laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              tenetur aperiam debitis nam quos eveniet eum porro officiis earum.
              Architecto nobis dignissimos incidunt eos autem at repellendus qui
              nesciunt laudantium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              tenetur aperiam debitis nam quos eveniet eum porro officiis earum.
              Architecto nobis dignissimos incidunt eos autem at repellendus qui
              nesciunt laudantium.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-16">
          <div className="w-full bg-red-400 h-[90vh] rounded-md flex justify-center p-5">
            hoo
          </div>
        </div>
      </div>
    </div>
  );
};

export default identitasPage;
