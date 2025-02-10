import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-accent h-28">
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
        <a className="btn btn-ghost text-4xl text-white">FULLDAY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg text-white">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <details className="z-50">
              <summary>Profile Sekolah</summary>
              <ul className="p-2">
                <li>
                  <Link href="/program-kegiatan">Program Kegiatan</Link>
                </li>
                <li>
                  <Link href="/identitas">identitas</Link>
                </li>
                <li>
                  <Link href="/visi-misi">Visi Misi</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/kurikulum">Kurikulum</Link>
          </li>
          <li>
            <Link href="/kesiswaan">kesiswaan</Link>
          </li>
          <li>
            <Link href="/kabar-terkini">Kabar-terkini</Link>
          </li>
          <li>
            <Link href="/galeri">galeri</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href={"/login"}
          className="btn bg-secBackground text-white text-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
