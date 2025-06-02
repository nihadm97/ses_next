import React from "react";
import brošura from './brošura.webp';
import časopis from './Časopis.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
  className="text-blueGray-200 fill-current"
  points="2560 0 2560 105 0 105"
></polygon>

          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4 ml-auto">
              <h4 className="text-4xl font-semibold">Pogledajte naš digitalni časopis!</h4><br></br>
              <a href="https://www.canva.com/design/DAGIZScuSOo/YDj-eFsFkotbRdHBgJx85w/view?utm_content=DAGIZScuSOo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h09f5e91723#1" target="_blank" rel="noreferrer">
              <Image src={časopis} alt="Logo" className="lg:w-4/12 px-2 ml-auto inline-block"/></a>
              
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <br></br>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        JU Srednja ekonomska škola, Sarajevo
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Zmaja od Bosne 39
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        71000, Sarajevo
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Bosna i Hercegovina
                      </a>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/kontakt"
                      >
                        Kontaktirajte nas
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/uposlenici"
                      >
                        Radnice i radnici
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="http://upis.unsa.ba/"
                      >
                        Upis na fakultet
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <br></br>
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    OSTALE REFERENCE
                  </span>
                  <ul className="list-unstyled">
                  <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.anticorrupiks.com/institucija/867DF5AE-1867-864E-8EBF-879AC0D6637E/registar-javnih-nabavki"
                      >
                        Javne nabavke
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/137gt-MuKMKNFhlkOvTLlaoRFnSEGQ6mH/view?usp=sharing"
                      >
                        Plan integriteta
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/1IP1ZG_f3nyugmlH8n1qWuV6racqKCBYt/view"
                      >
                        Dopunjeni plan integriteta
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/1r4Cfg5sNGS8AGF8yw6uYojIBixihhP-2/view"
                      >
                        Nabavka opreme za fuskulturnu salu
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/1HxfQVU6TRMU73laRA1T59A5AF_SquWHx/view?usp=sharing"
                      >
                        Pravila školske ishrane
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} by{" "}
                <a
                  href="https://nihadm97.github.io/Portfolio/#/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Nihad Mehmedović
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
