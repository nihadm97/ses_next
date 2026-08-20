import React from "react";
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarSocialLinks from "./NavbarSocialLinks";



export default function UpisNavbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full">
          <nav className="fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <h2 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" style={{color: '#92d050'}}>JU SREDNJA EKONOMSKA ŠKOLA, SARAJEVO</h2>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{backgroundColor: '#92d050'}}
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
                      style={{color: '#92d050'}}
                    >
                      POČETNA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/nastava"
                      style={{color: '#92d050'}}
                    >
                      NASTAVA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://docs.google.com/forms/d/e/1FAIpQLScAdSBBDsq265PqFsJqO4-hGvBMnzg_BvNexUC7mnyf5QC74A/viewform"
                      style={{color: '#92d050'}}
                    >
                      PRIJAVA KORUPCIJE
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/informacije"
                      style={{color: '#92d050'}}
                    >
                      INFORMACIJE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/projekti"
                      style={{color: '#92d050'}}
                    >
                      PROJEKTI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/aktivnosti"
                      style={{color: '#92d050'}}
                    >
                      AKTIVNOSTI
                    </Link>
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
