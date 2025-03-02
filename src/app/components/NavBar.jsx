import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-accent h-16 fixed z-50 rounded-b-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <p>Profie Sekolah</p>
              <ul className="p-2">
                <li>
                  <Link href="/program-kegiatan">Program Kegiatan</Link>
                </li>
                <li>
                  <Link href="/identitas">Identitas</Link>
                </li>
                <li>
                  <Link href="/visi-misi">Visi Misi</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/kurikulum">Kurikulum</Link>
            </li>
            <li>
              <Link href="/kesiswaan">Kesiswaan</Link>
            </li>
            <li>
              <Link href="/kabar_terkini">Kabar Terkini</Link>
            </li>
            <li>
              <Link href="/gallery">Galeri</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-4xl text-white">
          FULLDAY
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md text-white">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <div className="z-50 dropdown dropdown-hover">
              <div role="button">Profile Sekolah</div>
              <ul className="p-2 dropdown-content menu mt-40 translate-x-[-15px] bg-accent text-white rounded-box shadow-lg w-52">
                <li>
                  <Link href="/program-kegiatan">Program Kegiatan</Link>
                </li>
                <li>
                  <Link href="/identitas">Identitas</Link>
                </li>
                <li>
                  <Link href="/visi-misi">Visi Misi</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/kurikulum">Kurikulum</Link>
          </li>
          <li>
            <Link href="/kesiswaan">Kesiswaan</Link>
          </li>
          <li>
            <Link href="/kabar_terkini">Kabar terkini</Link>
          </li>
          <li>
            <Link href="/galeri">Galeri</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href={"/"}
          className="btn bg-secBackground btn-sm md:btn-md text-white md:text-md cursor-not-allowed"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
