"use client"
import React from "react";
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpisNavbar from "@/components/Navbars/UpisNavbar";
import Footer from "@/components/Footers/Footer.js";
import biblioteka from '@/views/images/biblioteka.webp';
import Link from 'next/link';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import erasmus0 from '@/views/images/erasmus0.jpg';
import erasmus1 from '@/views/images/erasmus1.jpg';
import erasmus2 from '@/views/images/erasmu2.jpg';
import erasmus3 from '@/views/images/erasmu3.jpg';
import erasmus4 from '@/views/images/erasmu4.jpg';
import erasmus5 from '@/views/images/erasmus5.jpg';
import erasmus6 from '@/views/images/erasmus6.jpg';
import erasmus7 from '@/views/images/erasmus7.jpg';
import erasmus8 from '@/views/images/erasmus8.jpg';

import eu from '@/views/images/eu.png';

export default function Index() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "1");

  useEffect(() => {
    AOS.init({duration: 2000});
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [users1, setUsers1] = useState([]);
  const usersCollectionRef1 = collection(db, "2");

  useEffect(() => {
    const getUsers1 = async () => {
      const data = await getDocs(usersCollectionRef1);
      setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers1();
  }, []);
  const sortirani = [...users].sort((a, b) => b.Broj - a.Broj);
  const sortirani1 = [...users1].sort((a, b) => b.Broj - a.Broj);
  return (
    <>
      <section id="pocetna" className="header relative  flex h-screen bg-center" style={{
               backgroundSize: 'cover', alignSelf: 'center', minHeight: "800px"
            }}>
                
        <UpisNavbar fixed/>
        <video src="/ses.mp4"  width="800" height="600" className="backgroundVideo" autoPlay loop muted/>
        <div className="container flex flex-wrap absolute">
      

          <div  className="flex flex-wrap py-2">
          <div className="w-full md:w-8/12 ml-20 lg:w-8/12 xl:w-8/12 px-10">
            <div id = "div" className="sm:pt-0 rounded text-center lg:text-left hidden" style={{backgroundColor: "rgb(0, 0, 0, 0.5"}}>
              <h2 className="font-serif text-4xl text-white">
              Dobro došli u Ekonomsku školu!
              </h2>
              <b><p className="mt-4 text-lg leading-relaxed text-white">Čovjekov je odgoj ogledalo u kojem pokazuje svoj portret. Podučavanje je profesija koja podučava sve druge profesije.
              </p></b>
              <div className="mt-12">
                {/*<Link
                  href="/upis"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{backgroundColor: '#92d050'}} 
                >
                  Upis u SEŠ
                </Link>
              */}
                <Link
                  href="/kontakt"
                  target="_blank"
                  rel="noreferrer"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{backgroundColor: '#92d050'}} 
                >
                  Kontakt
                </Link> 
                <a 
                  href="https://drive.google.com/file/d/1REm1kN1mW7Dn80f893MUlI8tM0NQm8Gw/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{backgroundColor: 'rgb(254, 125, 1)'}}
                >
                  RASPORED
                </a>     
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10"> 
      <section className="bg-white w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div data-aos="fade-in" className="w-full text-center md:w-6/12 mt-4">
              <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: "rgb(254, 125, 1)"}}>
                    </span>
              </div>
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "rgb(254, 125, 1)"}}>Informacije za učenike</h4>
            {sortirani.map(obj  => 
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 rounded-lg">
                  <div className="flex-auto">
                  <a
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  href={obj.Link}
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  {obj.Naslov}
                  
                </a>
                  
                    </div>
                  </div>)}
                </div>
              <div data-aos="fade-in" className="w-full text-center md:w-6/12 mt-4">
              <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: '#92d050'}}>
                    </span>
              </div>
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "#92d050"}}>Ostale informacije</h4>
            {sortirani1.map(obj  => 
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 rounded-lg">
                  <div className="flex-auto">
                  <a
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  href={obj.Link}
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  {obj.Naslov}
                  
                </a>
                  
                    </div>
                  </div>)}
              </div>
              
            </div>
            </div>
          </section>
          

          </div>
        </div>
      </section>

      <section className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">Erasmus + projekat OPEN FUTURE  </h6>
    <Image src={eu} width="50" height="50" alt="" />
</span>

            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={erasmus0} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus1} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus2} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus3} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus4} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus5} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus6} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus7} alt="" />
                    </div>
                    <div>
                        <Image src={erasmus8} alt="" />
                    </div>
                    
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">
                  U nizu aktivnosti kojima naša škola obiluje i po kojima smo prepoznati, kako od strane domaćih, tako i evropskih organizacija, direktorica Amira Kadrispahić, potpisala je Memorandum o međunarodnoj saradnji sa učesnicama i učesnicima projekta Open Future u Novom Sadu.
</p> 
<p className="mb-4 text-blueGray-500">
Nosilac i koordinator Projekta je Naučni centar za kreativni razvoj Ideall - Novi Sad.
</p> 
<p className="mb-4 text-blueGray-500">
Učesnice i učesnici u Projektu, pored naše škole, su Ekonomska i upravna škola iz Osijeka i Srednja mješovita škola „Danilo Kiš“ iz Budve.
</p> 
<p className="mb-4 text-blueGray-500">
Finansijer Projekta, koji će trajati dvije godine u periodu <b>od 1.12.2023. do 30.11.2025. godine</b>,  jeste <b>Evropska Unija - program Erasmus +.</b></p>
<p className="mb-4 text-blueGray-500">
Projekat ima za cilj razvoj i jačanje nivoa ključnih preduzetničkih kompetencija profesorica/profesora i učenica/učenika stručnih škola primjenom sistematske metodologije, inovativnog pristupa i posebno razvijenih materijala za ove namjene, što će rezultirati poboljšanim nivoom potencijala zaposlenosti. 
</p> 
<p className="mb-4 text-blueGray-500">
Osnovni cilj sticanja preduzetničkih kompetencija za svakog pojedinca je razvijanje sposobnosti za aktivno učešće u društvu, upravljanje sopstvenim životom i karijerom, te preduzimanje inicijativa za stvaranje novih vrijednosti. 
</p> 
<p className="mb-4 text-blueGray-500">
Zadatak Projekta je obuka za petnaest ključnih preduzetničkih vještina prema usvojenom <b>EntreComp modelu</b>, koje su važne za sve vrste aktivnosti iz svakodnevnog života, a odnose se na lični razvoj, razmišljanje, vještine i sposobnosti u okviru tehnoloških, demografskih i društvenih izazova. Učenice i učenici će u toku planiranih projektnih aktivnosti, između ostalog, razvijati i  kritičko razmišljanje, kreativnost i komunikacijske vještine, koje će podsticati njihovo samopouzdanje, samopoštovanje i sinergiju između učenica/učenika i njihovih profesorica/profesora.
</p> 
<p className="mb-4 text-blueGray-500">
Program predviđa obuku profesorica/profesora, a zatim prijenos stečenih znanja i vještina učenicama/učenicima putem <b>PBL (Project Based Learning)</b> - učenja zasnovanog na projektima, gdje učenice i učenici aktivno učestvuju u pronalaženju načina za rješavanje problema.
</p> 
<p className="mb-4 text-blueGray-500">
Prvi susret u Novom Sadu i pripremne aktivnosti za realizaciju Projekta će nam ostati u dubokom sjećanju zahvaljujući izuzetnom profesionalcu, prof.dr. Zdravku Živković, kojem smo neizmjerno zahvalni što je našu školu birao za partnera u Projektu.
</p> 
<p className="mb-4 text-blueGray-500">
Direktorici su se na ovom putovanju pridružile i profesorice Edina Kopić i Lamija Šabanović, koje, također, učestvuju u realizaciji Projekta.
</p> 
<p className="mb-4 text-blueGray-500">
Sigurni smo da će i učenice/učenici škola učesnica, pored projektnih aktivnosti, steći nove životne prijatelje kao i mi, a što je i najviša blagodat ovakvih susreta.
</p> 
             
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>

      
      <section data-aos="fade-in" className="pb-40 relative bg-blueGray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32" style={{marginTop: "15%"}}>
              <div className="relative flex flex-col min-w-0 break-words bg-lightBlue w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500" style={{backgroundColor: '#92d050'}}>
              <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/biblioteka.webp?alt=media&token=95b9e38e-f127-4abf-9159-80485a526ff2" alt="Logo" width={"100"} height={"100"} className="w-full align-middle rounded-t-lg"/>
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                      style={{color: '#92d050'}}
                    ></polygon>
                  </svg>
                  <h4 className="text-2xl font-bold text-white">
                    BIBLIOTEKA
                  </h4>
                  <p className="text-xl font-light mt-2 text-white">
                 U nizu aktivnosti kojima obiluje Srednja ekonomska škola, Sarajevo želja nam je podići i čitalačku svijest mladih.  
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      <b>"Da uništite kulturu, ne morate spaliti knjige. Dovoljno je da ih ljudi prestanu čitati.”</b><br></br><p className="mb-4 text-blueGray-500 text-sm" style={{float: "right"}}> – Ray Bradbury</p> 
                      </h6>
                      <br></br>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Knjige
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      U prostorijama biblioteke korisnici se mogu koristiti knjigama, časopisima, novinama i ostalom knjižnom i neknjižnom građom.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Posudbe</h6>
                      <p className="mb-4 text-blueGray-500">
                      Izvan biblioteke može se posuditi odjednom 2 knjige na rok od 15 dana, a lektira na rok od 7 dana.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                    <br></br>
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Radno vrijeme i kontakt
                      </h6>
                      <p className="mb-1 text-blueGray-500">
                      Svaki radni dan od 08–16h
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Kontakt: 033/724–617
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Amra Lagumdžija, bibliotekar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



       
      </section>
      <Footer />
    </>
  );
}
