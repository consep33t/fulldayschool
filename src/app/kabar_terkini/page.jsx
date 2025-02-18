import CardKabarTerkini from "../components/CardKabarTerkini";
// import SideBarKabarTerkini from "../components/SideBarKabarTerkini";

const kabarTerkiniPage = () => {
  return (
    <div className="w-full p-6 space-y-6 flex gap-6">
      <div className="md:w-3/4 w-full flex flex-col gap-6">
        <h1 className="md:text-6xl text-4xl font-semibold text-black">
          Kabar Terkini
        </h1>
        <CardKabarTerkini />
      </div>
      {/* <div className="hidden md:block w-1/4 pl-6 fixed right-0">
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
      </div> */}
    </div>
  );
};
export default kabarTerkiniPage;
