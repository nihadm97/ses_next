import React from "react";
import Link from 'next/link';
// components

import logo from './logo.png';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarSocialLinks from "./NavbarSocialLinks";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
    <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-lightBlue-500 rounded" style={{backgroundColor: '#92d050'}}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                href="/"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
              >
                <Image src={logo} alt="JU Srednja ekonomska škola Sarajevo" width={80} height={80} loading="eager" />
              </Link>
                
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-controls="glavna-navigacija"
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "Zatvori navigaciju" : "Otvori navigaciju"}
                >
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="glavna-navigacija"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/"
                    >
                      POČETNA
                    </Link>
                  </li>
                  { /* <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/informacije"
                    >
                      AKTI
                    </Link>
                      </li> */}
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1WaJfIAQeHW9-hSgO23Ylhewtq7UzBr11/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TERMINI INFORMACIJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1aDSt4lnMQW_HndlqPybB-TWPgY_NELzA/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TERMINI KONSULTACIJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1mpY0Ri9wgvlbjo3eeHmmwtUpsIw018xs/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ČLANOVI VIJEĆA RODITELJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/195wdYAgpifKIy2ssGqw3tzuiPqgftB44/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ČLANOVI VIJEĆA UČENIKA
                    </a>
                  </li>
                  <li className="flex items-center">
                    <NavbarSocialLinks />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
