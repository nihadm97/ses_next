/*eslint-disable*/
import React from "react";
import Image from 'next/image';

import etwi1 from './etwi1.webp';
import etwi2 from './etwi2.webp';
import Link from 'next/link';

import erasmus from './erasmus.png';
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function UpisNavbar(props) {
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
                {/*
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold px-6"
                  href="https://sites.google.com/ses.edu.ba/srednjaekonomskakola-etwinning/o-etwinningu"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <Image src={etwi2} width="30" height="30"></Image>
                  
                </a>
              */}
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
