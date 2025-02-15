import CardKabarTerkini from "../components/CardKabarTerkini";
import SideBarKabarTerkini from "../components/SideBarKabarTerkini";

const kabarTerkiniPage = () => {
  return (
    <div className="w-full p-6 space-y-6 flex gap-6">
      <div className="w-3/4 flex flex-col gap-6">
        <h1 className="text-6xl font-semibold text-black">Kabar Terkini</h1>
        <CardKabarTerkini />
      </div>
      <div className="w-1/4 pl-6 fixed right-0">
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
        <SideBarKabarTerkini />
      </div>
    </div>
  );
};
export default kabarTerkiniPage;
