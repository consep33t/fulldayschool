import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-accent text-base-content rounded-t-md p-10">
      <nav>
        <div className="grid grid-flow-col gap-10">
          <Link
            className="flex flex-col items-center justify-center"
            href="https://www.instagram.com/smppancabudimedan/?e=1ad71ef2-71d7-4d9a-90e7-bb01bd6e0c0b&g=5"
          >
            <Image
              src={"/instagram.svg"}
              width={500}
              height={500}
              alt="instagram"
              className="w-14 h-10"
            />
            Smp Panca Budi
          </Link>
          <Link
            className="flex flex-col items-center justify-center"
            href="https://pancabudi.sch.id"
          >
            <Image
              src={"/website.svg"}
              width={500}
              height={500}
              alt="website-pancabudi"
              className="w-10 h-10"
            />
            Website Perguruan Panca Budi
          </Link>
          <Link
            className="flex flex-col items-center justify-center"
            href="https://www.instagram.com/am.itbi_smppancabudi?igsh=MWdwZHRvbmE5Y3B2dQ=="
          >
            <Image
              src={"/instagram.svg"}
              width={500}
              height={500}
              alt="instagram"
              className="w-10 h-10"
            />
            Asistensi Mengajar ITBI
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - FULLDAY Class Panca Budi</p>
      </aside>
    </footer>
  );
};
export default Footer;
