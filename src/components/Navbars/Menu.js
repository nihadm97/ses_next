import React from "react";
import logo from './logo.png';
import Link from 'next/link';
import etwi1 from './etwi1.webp';
import erasmus from './erasmus.png';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg rounded" style={{backgroundColor: '#92d050'}}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                href="/"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <Image src={logo} alt="Logo" width={"80"} height={"80"} />
              </Link>
                
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
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
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/nastava"
                    >
                      NASTAVA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/informacije"
                    >
                      INFORMACIJE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/projekti"
                    >
                      PROJEKTI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/aktivnosti"
                    >
                      AKTIVNOSTI
                    </Link>
                  </li>
                  <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/Srednja-ekonomska-%C5%A1kola-Sarajevo-847192995623370/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="px-2 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/srednja_ekonomska_skola/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <i className="px-2 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://school-education.ec.europa.eu/en/networking/schools-organisations/srednja-ekonomska-skola-sarajevo"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <Image src={etwi1} width="40" height="40"></Image>
                  
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://erasmus-plus.ec.europa.eu/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <Image src={erasmus} width="40" height="40"></Image>
                  
                </a>
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