"use client"
import React from 'react'
import ProjektiNavbar from "@/components/Navbars/ProjektiNavbar.js";
import Footer from "@/components/Footers/Footer.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import slika1 from '@/views/images/slika1.jpg';
import slika2 from '@/views/images/slika2.jpg';
import asa1 from '@/views/images/asa1.jpg';
import asa2 from '@/views/images/asa2.jpg';
import asa3 from '@/views/images/asa3.jpg';
import medijske0 from '@/views/images/medijske0.jpg';
import medijske1 from '@/views/images/medijske1.jpg';
import medijske2 from '@/views/images/medijske2.jpg';
import medijske3 from '@/views/images/medijske3.jpg';
import Image from 'next/image';



import eu from '@/views/images/eu.png';
import erasmus0 from '@/views/images/erasmus0.jpg';
import erasmus1 from '@/views/images/erasmus1.jpg';
import erasmus2 from '@/views/images/erasmu2.jpg';
import erasmus3 from '@/views/images/erasmu3.jpg';
import erasmus4 from '@/views/images/erasmu4.jpg';
import erasmus5 from '@/views/images/erasmus5.jpg';
import erasmus6 from '@/views/images/erasmus6.jpg';
import erasmus7 from '@/views/images/erasmus7.jpg';
import erasmus8 from '@/views/images/erasmus8.jpg';

import mu1 from '@/views/images/mu1.jpg';
import mu2 from '@/views/images/mu2.jpg';

import kamp1 from '@/views/images/kamp1.jpg';
import kamp2 from '@/views/images/kamp2.jpg';
import kamp3 from '@/views/images/kamp3.jpg';
import kamp4 from '@/views/images/kamp4.jpg';
import kamp5 from '@/views/images/kamp5.jpg';

import green1 from '@/views/images/green1.png';
import green2 from '@/views/images/green2.jpg';
import green3 from '@/views/images/green3.jpg';
import green4 from '@/views/images/green4.jpg';
import green5 from '@/views/images/green5.jpg';
import green6 from '@/views/images/green6.jpg';
import green7 from '@/views/images/green7.jpg';
import green8 from '@/views/images/green8.jpg';
import green9 from '@/views/images/green9.jpg';


const Projekti = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "projekti");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const sortirani = [...users].sort((a, b) => b.Broj - a.Broj);
  return (
    <>
    <ProjektiNavbar fixed/>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">ERASMUS + Projekat “Green Tech Entrepreneurship Challenge Hub” </h6>
    <Image src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="1000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <Image src={green1} alt="" />
                    </div>
                    <div>
                        <Image src={green2} alt="" />
                    </div>
                    <div>
                        <Image src={green3} alt="" />
                    </div>
                    <div>
                        <Image src={green4} alt="" />
                    </div>
                    <div>
                        <Image src={green5} alt="" />
                    </div>
                    <div>
                        <Image src={green7} alt="" />
                    </div>
                    <div>
                        <Image src={green8} alt="" />
                    </div>
                    <div>
                        <Image src={green9} alt="" />
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
                  Nakon što je direktorica Amira Kadrispahić potpisala Ugovor o saradnji sa pet organizacija: Lean Startup i Elektrostrojarska škola Varaždin iz Hrvatske, GEA College - Fakultet za podjetništvo iz Slovenije, Internacionalni Burch Univerzitet i FabLab iz Bosne i Hercegovine, o zajedničkoj realizaciji ERASMUS+ projekta “Green Tech Entrepreneurship Challenge Hub,” koji je odobrila Izvršna agencija za obrazovanje, audiovizuelnu umjetnost i kulturu Evropske unije (EACEA), Srednja ekonomska škola, Sarajevo započela je dvogodišnji rad na ovom značajnom projektu.

</p> 
<p className="mb-4 text-blueGray-500">
Glavni cilj ovog projekta je jačanje kapaciteta nastavnog osoblja u oblasti stručnog obrazovanja te promovisanje preduzetništva i inovacija u oblasti zelene tehnologije među nastavnicima i učenicima u Bosni i Hercegovini.</p> 
<p className="mb-4 text-blueGray-500">
Pored toga, Projekat će omogućiti mobilnu obuku za osoblje srednjih stručnih škola u ove tri zemlje, kako bi unaprijedili svoje profesionalne vještine u oblasti učenja zasnovanog na izazovima, preduzetništvu i izgradnji industrijskih partnerstava. </p> 
<p className="mb-4 text-blueGray-500">
Partneri su zajedničkim radom uspostavili platformu za učenje zasnovanu na izazovima pod nazivom Challenge Hub. </p>
<p className="mb-4 text-blueGray-500">
Ova platforma pruža učenicima edukativni sadržaj o preduzetništvu i zelenoj tehnologiji, a služi i za takmičenja u inovacijama za srednjoškolce.</p> 
<p className="mb-4 text-blueGray-500">
Prvo takmičenje, koje je održano na Internacionalnom Burch Univerzitetu, 25. 09. 2024. godine, okupilo je šezdeset učenica i učenika iz tri srednje škole. Zadatke su rješavali putem video lekcija i kvizova znanja na platformi Challenge Hub, razvijajući rješenja za izazove koje su im ponudile kompanije Sika BiH i BN-Step.</p> 
<p className="mb-4 text-blueGray-500">
Na Projektu je, ispred Srednje ekonomske škole, Sarajevo učestvovalo dvadeset učenica i učenika, raspoređenih u pet timova. Uz podršku direktorice Amire Kadrispahić, te profesorica i profesora: Senide Čeljo, Emira Ustavdića, Alme Kalamujić i Selme Jusić, učenice i učenici naše škole postigli su izvanredne rezultate:</p> 
<p className="mb-4 text-blueGray-500">
Izazov BN-Step:</p> 
<p className="mb-4 text-blueGray-500">
1. mjesto - Bjelak Irhad, Ploskić Adna, Hadžić Alejna i Nogo Nejla.</p> 
<p className="mb-4 text-blueGray-500">

3. mjesto - Gibović Amina, Efendić Lejla, Ljuta Lejla i Ljutika Lejla.</p> 
<p className="mb-4 text-blueGray-500">
Izazov Sika d.o.o.:</p> 
<p className="mb-4 text-blueGray-500">
2. mjesto - Šatara Nejra, Borišić Lamija, Džekman Naida i Koštrebić Sanija.
</p> 
<p className="mb-4 text-blueGray-500">

3. mjesto - Marić Elma, Ramić Arman, Pamuk Davud  i Jelašković Zerina.</p> 
<p className="mb-4 text-blueGray-500">
Specijalna nagrada žirija je također otišla u ruke učenicama i učenicima naše škole i to timu kojeg su činili: Harun Begić, Hadžić Arman, Karić Emina i Šehović Dalila.</p> 
<p className="mb-4 text-blueGray-500">

Čestitamo svim takmičarkama i takmičarima za postignute rezultate i zahvaljujemo organizatorima koji su ih nagradili prigodnim poklonima!</p>           
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">eTwinning ljetni kamp</h6>
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={kamp1} alt="" />
                    </div>
                    <div>
                        <Image src={kamp2} alt="" />
                    </div>
                    <div>
                        <Image src={kamp3} alt="" />
                    </div>
                    <div>
                        <Image src={kamp4} alt="" />
                    </div>
                    <div>
                        <Image src={kamp5} alt="" />
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
                  Od 20. do 21. augusta je, u prelijepom  Konjicu, održan Ljetni eTwinning kamp za početnike "eTwinning je VAŠ-pokaži šta ZNAŠ!". Kamp je održan u organizaciji Državne agencije APOSO, koja ima ulogu Drzavnog koordinatora za eTwinning u Bosni i Hercegovini.
</p> 
<p className="mb-4 text-blueGray-500">
Bila je to prilika za susret eTwinnera iz cijele Bosne i Hercegovine, za razmjenu ideja, inovacije postojećih praksi, te za dobro druženje.
</p> 
<p className="mb-4 text-blueGray-500">
Profesorica Lejla Hujdur, kao eTwinning ambasadorica Bosne i Hercegovine, je uzela aktivno učešće u ovom događaju: bila je voditeljica nekoliko eTw radionica, te jedna od moderatorica na plenarnim sesijama. 
Uvjereni smo da će se iz brojnih zanimljivih i kreativnih aktivnosti sa kampa izroditi mnoštvo dobrih eTwinning projekata u kojima će i eTwinning tim naše škole uzeti učešće.
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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">Priznanje "eTwinning School Label 2023/24" za Srednju ekonomsku školu, Sarajevo </h6>
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={mu1} alt="" />
                    </div>
                    <div>
                        <Image src={mu2} alt="" />
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
                  Dana 20. februara 2024. godine, Srednja ekonomska škola, Sarajevo je ponosno, po treći put, primila prestižno priznanje "eTwinning School Label 2023/24" koje nam je uručila APOSO,  Državna organizacija za podršku eTwinningu u BiH. 
</p> 
<p className="mb-4 text-blueGray-500">
Oznaka eTwinning škola nije samo simbol, već i pokazatelj pozitivnog uticaja na unapređenje kvalitete rada i reputaciju svake od nagrađenih škola. Ova prestižna oznaka također predstavlja priznanje za izuzetno angažovanje u promovisanju vrijednosti eTwinninga, poticanju međunarodne saradnje te doprinosu razvoju školske zajednice.
</p> 
<p className="mb-4 text-blueGray-500">
eTwinning projekti su ključni za pružanje autentičnih i motivirajućih iskustava, kako za učenike, tako i za nastavnike. Kroz ove projekte, razvijaju se ključne kompetencije neophodne za cjeloživotno učenje i uspješno funkcionisanje u savremenom društvu. Digitalne vještine, interkulturalna osviještenost, saradničke vještine, komunikacijske vještine, kritičko razmišljanje, rješavanje problema i jezičke kompetencije postaju sastavni dio ličnog i akademskog razvoja učenika.
</p> 
<p className="mb-4 text-blueGray-500">
Čestitamo  svim učenicima-eTwinnerima i eTwinning timu profesora Srednje ekonomske škole, Sarajevo na izuzetnom angažmanu i doprinosu razvoju obrazovanja! Njihova predanost unapređenju obrazovnog iskustva ostavlja trajni pečat na lokalnoj i međunarodnoj sceni obrazovanja, te doprinosi prepoznatljivosti naše škole u evropskoj obrazovnoj zajednici.</p>

             
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Obilježavanje Svjetskog dana štednje</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Stednja%202.jpg?alt=media&token=b5134740-bd9e-48e1-9307-da1e948139ee" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Stednja%203.jpg?alt=media&token=80629c3e-daa7-4869-8354-56975520504a" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Stednja%201.jpg?alt=media&token=b38553d5-5b52-4933-8688-8dbfd684cf41" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Stednja%204.jpg?alt=media&token=12aaed9f-87c3-46fc-989f-b24a37d92046" alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Srednja ekonomska škola, Sarajevo je 31.10.2023. godine tradicionalno obilježila Svjetski dan štednje s ciljem edukacije učenika o štednji i njenoj važnosti.  Program su pripremili i realizovali učenici i učenice od drugog do četvrtog razreda, smjerovi ekonomski i bankarski tehničar, zajedno sa profesoricama Sandom Dupovac i Amrom Hodžić. </p>
                  <p className="mb-4 text-blueGray-500">U okviru programa koji je počeo izvedbom numere na violini prikazane su prezentacije na temu štednje, dječije štednje, štednje na kupovini hrane i štednji energije, te igrokaz na temu štednje. Osim prezentacija i igrokaza, program je obogatio, recital učenica, obilježavanje trećeg rođendana Bankija i Ekonomija – maskote naše škole i kviz o štednji u kojem su gosti pristupili preko digitalnog QR koda. </p>
                  <p className="mb-4 text-blueGray-500">U programu koji je prikazan ostvarena je korelacija između slijedećih nastavnih predmeta: Bankarsko poslovanje, Marketing, Informatika, Bosanski / hrvatski / srpski jezik i književnost, Likovna kultura i Muzička kultura gdje su učenici pokazali zavidan nivo kompetencija za medijsku, informatičku i finansijsku pismenost.</p> 
                  <p className="mb-4 text-blueGray-500"> Prikazani program je primjer dobre prakse kako se u okviru realizacije vannastavnih aktivnosti i stručno-teorijske nastave može sprovesti kurikularala reforma.</p>
                        
              
 

</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Radionica Medijska i informacijska pismenost uz eTwinning</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                    <div>
                        <Image src={medijske0} alt="" />
                    </div>
                    <div>
                        <Image src={medijske1} alt="" />
                    </div>
                    <div>
                        <Image src={medijske2} alt="" />
                    </div>
                    <div>
                        <Image src={medijske3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">U srijedu, 25.10.2023. godine, održan je Sajam medijske i informacijske pismenosti. </p>
                  <p className="mb-4 text-blueGray-500">Centralnu manifestaciju Dana medijske i informacijske pismenosti, organizovala je Regulatorna agencija za komunikacije Bosne i Hercegovine (RAK). </p>
                  <p className="mb-4 text-blueGray-500">Učenice drugog razreda naše škole, u pratnji profesorice Lejle Hujdur, posjetile su Sajam i učestvovale u radionici Medijska i informacijska pismenost uz eTwinning. Bila je to prilika da učenice dobiju više informacija o eTwinningu i projektnoj nastavi, o načinima sigurnog korištenja interneta, o tehnikama razvoja kritickog mišljenja, te da, kroz interaktivne kvizove, nauče koristiti neke od web alata. </p> 
                  <p className="mb-4 text-blueGray-500">Učenice su ostvarile nova poznanstva, te istakle da im je ovaj Sajam bio jako zanimljiv i koristan.</p>      
              
 

</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nastavak saradnje sa ASA bankom</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                    <div>
                        <Image src={asa1} alt="" />
                    </div>
                    <div>
                        <Image src={asa2} alt="" />
                    </div>
                    <div>
                        <Image src={asa3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500"><i>"Niko nije beskoristan na ovom svijetu ko olakšava breme drugog."</i> - Charles Dickens</p>
                  <p className="mb-4 text-blueGray-500">U okviru Memoranduma o saradnji, kojeg je naša škola potpisala sa ASA bankom prošle godine, Školi je donirano izuzetno vrijedno nastavno sredstvo - smart TV.</p>
                  <p className="mb-4 text-blueGray-500">Ovom gestom, ASA banka je pokazala da je društveno odgovorna organizacija, te da je ulaganje u obrazovanje, ulaganje u budućnost.</p> 
                  <p className="mb-4 text-blueGray-500">Radujemo se nastavku naše saradnje, koju je započela direktorica Škole, Amira Kadrispahić, a u cilju unaprjeđenja nastavnog procesa.</p>      
              
 

</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">U POSJETI SPARKASSE BANK, SARAJEVO</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      
                    <div>
                        <Image src={slika1} alt="" />
                    </div>
                    <div>
                        <Image src={slika2} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Učenice i učenici III5 razreda posjetili su SPARKASSE BANK, SARAJEVO.</p>
                  <p className="mb-4 text-blueGray-500">Sparkasse Bank dd BiH, članica je austrijske finansijske institucije Steiermärkische Sparkasse. Njihova matična banka Steiermärkische Sparkasse je najveća regionalna banka na jugu Austrije sa dvjestogodišnjom tradicijom poslovanja, te dugoročnom i održivom strategijom razvoja u zemljama regije.</p> 
                  <p className="mb-4 text-blueGray-500">Kao članica Erste Bank und Sparkassen Austrija, dio je najjače grupe banaka fokusiranih na poslovanje sa stanovništvom, malim i srednjim preduzećima u Evropi.</p> 
                  <p className="mb-4 text-blueGray-500">Nude široku paletu finansijskih proizvoda stanovništvu, malim i srednjim preduzećima, velikim kompanijama, institucionalnim klijentima, te javnom sektoru, stavljajući akcenat na brzinu i efikasnost pružanja usluga, te jačanje povjerenja i lojalnosti klijenata. Pokrenuli su i veliki broj društveno korisnih projekata za našu zajednicu u raznim segmentima. Dvostruki su vlasnik nagrade „DOBRO“ za korporativnu filantropiju i volonterizam.</p> 
                  <p className="mb-4 text-blueGray-500">Uposlenice i uposlenici banke upoznale/i su naše učenice i učenike sa vrijednostima banke, finansijskim proizvodima, organizacionim, marketinškim aspektima poslovanja, savremenim izazovima u bankarstvu i odgovorili na sva pitanja učenica i učenika koje/i su pokazale/i stanovit interes za aktivnosti banke.</p> 
                  <p className="mb-4 text-blueGray-500">Posjeta je realizovana u okviru projekta Upoznaj privredu Kantona Sarajevo, kojeg vodi Indira Zeković, prof.</p>  
              
 

</span>
                  </div>
                 
                </div>
              </div>
            </div>
            </div>
          </section>
    {sortirani.map(obj  => 
      <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">{obj.naslov}</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel interval="10000" transitionTime="1000" infiniteLoop>
                      {obj.slike.map(slika  => 
                    <div>
                        <img src={slika} alt="" />
                    </div>
                    )}
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    {obj.paragrafi.map(paragraf  => 
                  <p className="mb-4 text-blueGray-500">{paragraf}</p> 
              )}
 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  {typeof obj.link=="string" ? <a href={obj.link} target="_blank" rel="noreferrer" style={{color: "#fe7d01"}} > Pročitaj više: </a>: ""} 
      {typeof obj.video=="string" ? <video src={obj.video} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> : ""} 
              </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          
)}
    <Footer />
    </>
  )
}

export default Projekti