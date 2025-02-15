import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-accent h-16 fixed z-50 rounded-b-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
              <a>Beranda</a>
            </li>
            <li>
              <a>Profie Sekolah</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
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
          href={"/login"}
          className="btn bg-secBackground text-white text-md"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
