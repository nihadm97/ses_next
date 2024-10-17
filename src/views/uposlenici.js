"use client"
import React from "react";
import UpisNavbar from "@/components/Navbars/UpisNavbar";
import Footer from "@/components/Footers/Footer.js";
import direktorica from '@/views/images/direktorica.webp';
import Background from '@/views/images/zeleno.webp'
import Background1 from '@/views/images/zeleno1.webp'
import Image from 'next/image';
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Uposleni() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "uposlenici");
  const [users1, setUsers1] = useState([]);
  const usersCollectionRef1 = collection(db, "saradnici");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef1);
      setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const sortirani = [...users].sort((a, b) => a.Broj - b.Broj);
  return (
    <>
      <UpisNavbar transparent/>
      <main className="profile-page" style={{marginTop:"-5%"}}>
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url("/pozadina.webp")` }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url("/zeleno.webp")`, backgroundSize: 'cover', alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Amira Kadrispahić
                  </h3>
                    <Image src={direktorica}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Direktorica
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Profesor islamske teologije i Magistar pedagogije
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center ">
                    <div className="w-full lg:w-9/12 px-4">
                      <p data-aos="fade-in" className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Drage učenice i dragi učenici, roditelji, uposlenice i uposlenici, partneri, a posebno, dragi heroji za katedrom 
                      i najvažniji nosioci društva u cjelini - profesorice i profesori!
                      Srednja ekonomska škola, Sarajevo je od samog postojanja pa sve do danas iznjedrila brojne generacije izuzetno uspješnih učenika. Svjesni ubrzanih tehničkih i tehnoloških promjena u društvu nastojimo biti u trendu i pratiti savremene metode učenja i podučavanja. Nastava je u našoj školi usmjerena na učenika, a životni učitelji su voditelji nastavnog procesa. Učenik istražuje, analizira, diskutuje i ima slobodu da dostojanstveno iznosi vlastito mišljenje. Velika važnost pridaje se volji i emociji učenika, što rezultira interdisciplinarnim pristupom nastavnim sadržajima, ugodnom emocionalnom atmosferom, multimedijalnim učenjem i dostizanjem individualnih maksimuma. 
                      </p>
                      <p data-aos="fade-in" className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Njegujemo partnerske odnose između nastavnika i učenika kojem zajedno doprinosimo i u kojem komuniciramo na način da obje strane slušaju i uvažavaju jedna drugu, uz zajednički formulisana pravila za rad u učionici. Prva smo škola u KS koja u nastavnom procesu implementira sedmicu učenja na daljinu od 2010. godine, a što nam je znatno olakšalo djelovanje u periodu Covid pandemije. Svjesni da živimo vrijeme u kojem je teorijsko znanje bez praktičnog rada nedovoljno, u redovno školovanje uveli smo i novo zanimanje - Bankarski tehničar na principima dualnog sistema obrazovanja, a u saradnji sa Privrednom komorom Njemačke, koji, pored nastave u učionici, zahtijeva praktičan rad u bankama sa kojima smo u partnerstvu. 
                      S obzirom da imamo izuzetno talentovane učenike koji postižu vrhunske rezultate, aktivirali smo školski hor, orkestar, folklor, dramsku, plesnu, sportsku, literarnu i likovnu sekciju, čime smo boravak učenika u našoj školi dodatno učinili zabavnijim i zanimljivijim. 

                      </p>
                      <p data-aos="fade-up" className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Posebno smo posvećeni odgojnoj komponenti koja promiče duhovni i moralni razvoj ličnosti učenika. Mentalno zdravlje naših učenika nam je veoma važno i maksimalno se trudimo da doprinesemo psiho-fizičkom zdravlju svakog pojedinca. Vlastitu inovativnost i kreativnost svakodnevno obogaćujemo značajnim projektima u skladu sa Evropskim standardima, uključujući i međunarodnu saradnju sa drugim školama. Ne izostajemo ni kada je društveno-koristan rad u pitanju te, pored redovnog učešća u uređivanju školskog dvorišta, uzgajamo i zdravu hranu na zemljištu Mojmilo, a zahvaljujući donaciji Općine Novi Grad. Izuzetno nam je važna i saradnja sa lokalnom zajednicom i mnoge naše aktivnosti su podržane od strane Općine Novo Sarajevo sa kojom imamo izuzetne partnerske odnose i podršku. Svjesni činjenice da se uspjeh u odgoju i obrazovanju ne dostiže bez kvalitetne saradnje sa roditeljima, nastojimo ih involvirati u sve naše aktivnosti i izazove koji se stavljaju pred nas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                
          {sortirani.map(obj  => 
              <div data-aos="fade-down">
              <div className="relative inline-flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url("/zeleno1.webp")`, backgroundSize: 'cover', marginTop:"-5%", alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {obj.Ime}
                  </h3>
                    <img style={{minWidth:300, minHeight:200}} src={obj.Slika}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {obj.Pozicija}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {obj.Titula}
                  </div>
                </div>
              </div>
                </div>
                </div>
                )}
              {users1.map(obj  => 
              <div data-aos="fade-down">
              <div className="relative inline-flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url("/zeleno1.webp")`, backgroundSize: 'cover', marginTop:"-5%", alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {obj.Ime}
                  </h3>
                    <img style={{minWidth:300, minHeight:200}} src={obj.Slika}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {obj.Pozicija}
                  </div>
                </div>
              </div>
                </div>
                </div>
                )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
