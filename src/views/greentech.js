"use client"
import React from 'react'
import Menu from "@/components/Navbars/ErasmusNavbar";
import Footer from "@/components/Footers/Footer.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';


import eu from '@/views/images/eu.png';

import green1 from '@/views/images/green1.png';
import green2 from '@/views/images/green2.jpg';
import green3 from '@/views/images/green3.jpg';
import green4 from '@/views/images/green4.jpg';
import green5 from '@/views/images/green5.jpg';
import green6 from '@/views/images/green6.jpg';
import green7 from '@/views/images/green7.jpg';
import green8 from '@/views/images/green8.jpg';
import green9 from '@/views/images/green9.jpg';

import sendi1 from '@/views/images/1.jpg';
import sendi2 from '@/views/images/2.jpg';
import sendi3 from '@/views/images/3.jpg';
import sendi4 from '@/views/images/4.jpg';
import sendi5 from '@/views/images/5.jpg';
import sendi6 from '@/views/images/6.png';
import sendi7 from '@/views/images/7.png';
import sendi8 from '@/views/images/8.png';

import smion1 from '@/views/images/smion1.jpg';
import smion2 from '@/views/images/smion2.jpg';
import smion3 from '@/views/images/smion3.jpg';
import logo9 from '@/views/images/logo9.png';
import logo10 from '@/views/images/logo10.png';

const GreenTech = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <Menu fixed/>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<div className="big-screen-only md:hidden">
      <Image src={logo9} width="200" height="200" alt="" />
    </div>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">PARTNERI ERASMUS+ G-TECH PROJEKTA OKUPLJENI U LJUBLJANI
 </h6>
    <Image src={logo10} width="200" height="200" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={smion1} alt="" />
                    </div>
                    <div>
                        <Image src={smion2} alt="" />
                    </div>
                    <div>
                        <Image src={smion3} alt="" />
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
                  Dana 2. decembra 2024. godine, u prostorijama Gea Collegea u Ljubljani, održan je sastanak projekta <b>Green Tech Entrepreneurship Challenge Hub</b>. Sastanak je okupio partnere i organizatore iz Slovenije, Hrvatske i Bosne i Hercegovine s ciljem usklađivanja strategija, jačanja saradnje i planiranja narednih koraka.</p> 
<p className="mb-4 text-blueGray-500">
Učesnici su analizirali dosadašnje rezultate, razgovarali o izazovima i definisali sljedeće korake za uspješno završavanje projekta. Poseban fokus bio je na pripremama za finalni izazov koji će uključiti 225 učenika iz 15 škola.
</p> 
<p className="mb-4 text-blueGray-500">
Našu školu na sastanku predstavljale su profesorice Senida Čeljo i Lejla Avdagić. Srednja ekonomska škola, Sarajevo, na čelu sa direktoricom Amirom Kadrispahić i timom profesora, uspješno realizuje sve aktivnosti predviđene projektnim planom, potvrđujući svoju posvećenost inovacijama i kvalitetnom obrazovanju.</p> 
<p className="mb-4 text-blueGray-500">
Ključni uspjesi:
</p> 
<p className="mb-4 text-blueGray-500">
Razvijene inovativne platforme i kurikulumi</p> 
<p className="mb-4 text-blueGray-500">
Saradnja s industrijskim partnerima na kvalitetnim izazovima</p> 
<p className="mb-4 text-blueGray-500">
Promocija zelenog poduzetništva u obrazovanju mladih</p> 
<p className="mb-4 text-blueGray-500">
Dan je protekao u znaku produktivnih razgovora, razmjene ideja i stvaranja važnih veza. Ovakvi događaji potvrđuju koliko su timski rad i inovacije ključni za postizanje značajnih rezultata.
</p>
<p className="mb-4 text-blueGray-500">
Radujemo se budućim uspjesima!
</p>
<p className="mb-4 text-blueGray-500">
G-Tech, ERASMUS + projekat je finansijski podržan od strane Evropske unije.
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
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">Predstavljanje dobrih praksi – VET škola:
Srednja ekonomska škola predstavila svoje projekte na Erasmus+ Info danu
 </h6>
    <Image src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={sendi1} alt="" />
                    </div>
                    <div>
                        <Image src={sendi2} alt="" />
                    </div>
                    <div>
                        <Image src={sendi3} alt="" />
                    </div>
                    <div>
                        <Image src={sendi4} alt="" />
                    </div>
                    <div>
                        <Image src={sendi5} alt="" />
                    </div>
                    <div>
                        <Image src={sendi6} alt="" />
                    </div>
                    <div>
                        <Image src={sendi7} alt="" />
                    </div>
                    <div>
                        <Image src={sendi8} alt="" />
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
                  Erasmus+ Info dan održan je 16. i 17. oktobra 2024. godine u Parlamentarnoj skupštini Bosne i Hercegovine, u organizaciji Ministarstva civilnih poslova BiH i Ureda za Erasmus+ program. Dvodnevni događaj okupio je učesnike iz oblasti obrazovanja iz cijele BiH. 
</p> 
<p className="mb-4 text-blueGray-500">
U uvodnom obraćanju prisutnima su se obratili zamjenik ambasadora Delegacije Evropske unije u BiH, Adebayo Babajide, ministrica Civilnih poslova Bosne i Hercegovine,            
dr. sc. Dubravka Bošnjak, i šef Erasmus+ ureda u Bosni i Hercegovini, Suad Muhibić.
</p> 
<p className="mb-4 text-blueGray-500">
Profesorica Senida Čeljo imala je čast predstaviti dva Erasmus+ projekta na kojima trenutno radi Srednja ekonomska škola, Sarajevo: 
</p> 
<p className="mb-4 text-blueGray-500">
1. Green Tech Entrepreneurship Challenge Hub (G-Tech) sa partnerima: Lean Startup (Hrvatska), GEA College - Fakultet za poduzetništvo (Ljubljana), Internacionalni Burch Univerzitet (Sarajevo), Fab Lab (Sarajevo) i Elektrostrojarska škola (Varaždin).
</p> 
<p className="mb-4 text-blueGray-500">
2. Open Future sa partnerima: Naučni centar za kreativni razvoj Ideall (Novi Sad), Ekonomska i upravna škola (Osijek) i Srednja mješovita škola „Danilo Kiš“ (Budva).</p>
<p className="mb-4 text-blueGray-500">
Srednja ekonomska škola, zajedno s direktoricom Amirom Kadrispahić, profesorima koji rade na projektima i svojim partnerima, dobila je čestitke i pohvale za izvanredan rad i spremnost da drugima prenesu svoja iskustva.</p> 
<p className="mb-4 text-blueGray-500">
Ovi projekti jačanja kapaciteta temelje se na međunarodnoj saradnji i multilateralnim partnerstvima organizacija aktivnih u području stručnog obrazovanja i obuke (VET) u zemljama članicama EU, kao i u trećim zemljama pridruženim programu i onima koje nisu.</p> 
<p className="mb-4 text-blueGray-500">
Uspješna suradnja i angažman učenika i profesora u međunarodnim projektima dodatno potvrđuju našu posvećenost pružanju kvalitetnog obrazovanja i osnaživanju budućih generacija.</p> 
        
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
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">ERASMUS + Projekat “Green Tech Entrepreneurship Challenge Hub” </h6>
    <Image src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                      
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
    
    
    <Footer />
    </>
  )
}

export default GreenTech