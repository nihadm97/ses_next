'use client';
import React from "react";
// components
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbars/NastavaNavbar';
import Footer from "@/components/Footers/Footer";
import { useState } from 'react';


export default function Nastava() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

    const [showBankarski, setShowBankarski] = useState('ekonomski tehničar:');

    const toggleText = () => {
      setShowBankarski(!showBankarski);
    };
  return (
    <>
      <Navbar transparent />
      <main>
      <section className="pb-20 bg-blueGray-200 -mt-24" style={{ paddingTop: '15%' }}>
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Predmeti koji se izučavaju u prvom razredu za
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                style={{
                  backgroundColor: showBankarski ? 'rgb(254, 125, 1)' : 'rgb(146, 208, 80)',
                }}
                onClick={toggleText}
              >
                {showBankarski ? 'bankarski tehničar:' : 'ekonomski tehničar:'}
              </button>
            </h3>
            <ul className="text-lg leading-relaxed mt-4 mb-4">
              <li>BHS jezik i knjiženost</li>
              <li>Engleski jezik</li>
              <li>Njemački jezik / Turski jezik</li>
              <li>Tjelesni i zdravstveni odgoj</li>
              <li>Matematika</li>
              <li>Historija</li>
              <li>Vjeronauka ili Kultura religija</li>
              <li>Informatika</li>
              <li>Daktilografija sa poslovnim komunikacijama</li>
              <li>Ekologija</li>
              {!showBankarski ? (
                <>
                  <li>Fizika</li>
                  <li>Geografija i ekonomska geografija</li>
                  <li>Hemija i tehnologija sa poznavanjem robe</li>
                  
                </>
              ) : (
                <>
                  <li>Osnove ekonomije</li>
                  <li>Geografija</li>
                  <li>Hemija</li>
                  <li>Tehnike bankarskog računanja</li>
                  <li>Bankarsko poslovanje</li>
                </>
              )}
            </ul>
          </div>
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <video src="/PrviRazred.mp4"  className="max-w-full rounded-lg shadow-lg" autoPlay playsInline loop muted/>
          </div>
        </div>
      </div>
    </section>
        

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div  data-aos="fade-in" className="container mx-auto px-4 text-center md:text-left" style={{marginBottom: "10%"}}>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <video src="/DrugiRazred.mp4"  className="max-w-full rounded-lg shadow-lg" autoPlay playsInline loop muted/>

              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                <h3 className="text-2xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u drugom za
                <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                style={{
                  backgroundColor: showBankarski ? 'rgb(254, 125, 1)' : 'rgb(146, 208, 80)',
                }}
                onClick={toggleText}
              >
                {showBankarski ? 'bankarski tehničar:' : 'ekonomski tehničar:'}
              </button>
                </h3>
                <ul className="mt-4 text-lg leading-relaxed"><li>BHS jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Tjelesni i zdravstveni odgoj </li>
                <li>Matematika</li>
                <li>Vjeronauka ili Kultura  religija</li>
                {!showBankarski ? (
                <>
                  <li>Historija</li>
                  <li>Njemački jezik / Turski jezik</li>
                  <li>Informatika</li>
                  <li>Marketing</li>
                  <li>Biznis ekonomija</li>


                  
                </>
              ) : (
                <>
                  <li>Bankarsko poslovanje</li>
                  <li>Poslovni njemački jezik</li>
                  <li>Poslovna informatika</li>
                  <li>Marketing u bankarstvu</li>
                  <li>Tehnike bankarskog računanja</li>
                  <li>Bankarsko poslovanje</li>
                  <li>Praktična nastava u bankama 2 dana sedmično</li>

                </>
              )}
                
                </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-in" className="pb-20 bg-blueGray-200 -mt-24" style={{paddingTop: "15%"}}>
          <div className="container mx-auto px-4 text-center md:text-left">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u trećem razredu za
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                style={{
                  backgroundColor: showBankarski ? 'rgb(254, 125, 1)' : 'rgb(146, 208, 80)',
                }}
                onClick={toggleText}
              >
                {showBankarski ? 'bankarski tehničar:' : 'ekonomski tehničar:'}
              </button>
              </h3>
              <ul className="text-lg leading-relaxed mt-4 mb-4">
                <li>BHS jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Tjelesni i zdravstveni odgoj</li>
                <li>Matematika</li>
                <li>Vjeronauka ili Kultura religija</li>
                <li>Građansko obrazovanje/Demokracija i ljudska prava</li>
                {!showBankarski ? (
                <>
                  <li>Njemački jezik / Turski jezik</li>
                  <li>Marketing</li>
                  <li>Biznis ekonomija</li>
                  <li>Informatičke tehnologije</li>
                  <li>Ekonomska matematika</li>




                  
                </>
              ) : (
                <>
                  <li>Uvod u poslovno pravo</li>
                  <li>Poslovni njemački jezik</li>
                  <li>Bankarsko poslovanje</li>
                  <li>Praktična nastava u bankama 3 dana sedmično</li>

                </>
              )}
                
                </ul>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <video src="/TreciRazred.mp4"  className="max-w-full rounded-lg shadow-lg" autoPlay playsInline loop muted/>

              </div>
            </div>
          </div>
        </section>


        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div  data-aos="fade-in" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <video src="/CetvrtiRazred.mp4"  className="max-w-full rounded-lg shadow-lg" autoPlay playsInline loop muted/>

              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-center md:text-left">
                <div className="md:pr-12">
                <h3 className="text-2xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u četvrtom razredu za
                <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                style={{
                  backgroundColor: showBankarski ? 'rgb(254, 125, 1)' : 'rgb(146, 208, 80)',
                }}
                onClick={toggleText}
              >
                {showBankarski ? 'bankarski tehničar:' : 'ekonomski tehničar:'}
              </button>
                </h3>
                <ul className="mt-4 text-lg leading-relaxed">
                  <li>BHS jezik i knjiženost</li>
                  <li>Tjelesni i zdravstveni odgoj</li>
                  <li>Vjeronauka ili Kultura religija</li>
                  {!showBankarski ? (
                <>
                  <li>Engleski jezik</li>
                  <li>Njemački jezik / Turski jezik</li>
                  <li>Međunarodna ekonomija</li>
                  <li>Biznis ekonomija</li>
                  <li>Evropska unija i međunarodna saradnja</li>
                  <li>Privredno Pravo</li>
                  <li>Izborni predmet (Knjigovodstvo, Bankarsko poslovanje, Preduzeće za vježbu, Matematika)</li>

                  
                </>
              ) : (
                <>
                  <li>Poslovni engleski jezik</li>
                  <li>Poslovno pravo</li>
                  <li>Bankarsko poslovanje</li>
                  <li>Praktična nastava u bankama 3 dana sedmično</li>

                </>
              )}
                  
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
