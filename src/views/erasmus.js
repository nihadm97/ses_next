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
import erasmus0 from '@/views/images/erasmus0.jpg';
import erasmus1 from '@/views/images/erasmus1.jpg';
import erasmus2 from '@/views/images/erasmu2.jpg';
import erasmus3 from '@/views/images/erasmu3.jpg';
import erasmus4 from '@/views/images/erasmu4.jpg';
import erasmus5 from '@/views/images/erasmus5.jpg';
import erasmus6 from '@/views/images/erasmus6.jpg';
import erasmus7 from '@/views/images/erasmus7.jpg';
import erasmus8 from '@/views/images/erasmus8.jpg';

import opis1 from '@/views/images/Opis1.png';
import opis2 from '@/views/images/Opis2.png';
import opis3 from '@/views/images/Opis3.png';
import opis4 from '@/views/images/Opis4.png';

import opisi from '@/views/images/Opisi.png';
import vodic from '@/views/images/Vodic.png';
import alat from '@/views/images/Alat_za_Procjenu_Naslovna_strana_BH.png';

import newsletter1 from '@/views/images/Newsletter1.png';
import newsletter2 from '@/views/images/letter2.jpg';
import newsletter3 from '@/views/images/newsletter3.jpg';

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

import odmah1 from '@/views/images/odmah1.jpg';
import odmah2 from '@/views/images/odmah2.jpg';
import odmah3 from '@/views/images/odmah3.jpg';
import odmah4 from '@/views/images/odmah4.jpg';
import odmah5 from '@/views/images/odmah5.jpg';
import odmah6 from '@/views/images/odmah6.jpg';
import odmah7 from '@/views/images/odmah7.jpg';

import huba1 from '@/views/images/huba1.jpg';
import huba2 from '@/views/images/huba2.jpg';
import huba3 from '@/views/images/huba3.jpg';
import huba4 from '@/views/images/huba4.jpg';
import huba5 from '@/views/images/huba5.jpg';
import huba6 from '@/views/images/huba6.jpg';
import huba7 from '@/views/images/huba7.jpg';
import huba8 from '@/views/images/huba8.jpg';
import huba9 from '@/views/images/huba9.jpg';
import huba10 from '@/views/images/huba10.jpg';
import huba11 from '@/views/images/huba11.jpg';

import najava from '@/views/images/najava.jpg';

import fin1 from '@/views/images/fin1.jpg';
import fin2 from '@/views/images/fin2.jpg';
import fin3 from '@/views/images/fin3.jpg';
import fin4 from '@/views/images/fin4.jpg';
import fin5 from '@/views/images/fin5.jpg';
import fin6 from '@/views/images/fin6.jpg';
import fin7 from '@/views/images/fin7.png';
const Erasmus = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <Menu fixed/>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
              <div className="container mx-auto px-4">
                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">REALIZOVANO FINALNO TAKMIČENJE U OKVIRU ERASMUS+ PROJEKTA GTECH
    
    
    
    
    
    
    </h6>
                </span>
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                    <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                      <div className="py-5 flex-auto">
                      <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                          
                      <div>
                            <Image src={fin1} alt="" />
                        </div> 
                      <div>
                            <Image src={fin2} alt="" />
                        </div>
                        <div>
                            <Image src={fin3} alt="" />
                        </div>
                        <div>
                            <Image src={fin4} alt="" />
                        </div>
                        <div>
                            <Image src={fin5} alt="" />
                        </div>
                        <div>
                            <Image src={fin6} alt="" />
                        </div>
                        <div>
                            <Image src={fin7} alt="" />
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
    Srednja ekonomska škola Sarajevo, kao jedan od šest partnera koji učestvuju u realizaciji projekta GTECH (Green Tech Entrepreneurship Challenge Hub), aktivno je učestvovala u pripremi i organizaciji završnog događaja ovog projekta, koji se provodi od 2024. godine. 
    </p>
    <p className="mb-4 text-blueGray-500">
    Glavno takmičenje okupilo je ukupno 210 učenika raspoređenih u 60 timova iz 15 srednjih škola iz Bosne i Hercegovine. Njihovi mentori – profesori  prethodno su učestvovali u petodnevnoj edukaciji u Sloveniji i Hrvatskoj, gdje su se upoznali s metodom učenja zasnovanom na izazovima (Challenge Based Learning). Nakon obuke, profesori su uspješno položili ispit i dobili certifikate.</p>
    <p className="mb-4 text-blueGray-500">
    U okviru ove metode, učenici su rješavali konkretne izazove koristeći specijalno razvijenu digitalnu platformu za Challenge Based Learning. Platforma je sadržavala edukativne materijale, kvizove i video sadržaje koji su učenicima i nastavnicima pomogli u uspješnom savladavanju zadataka.</p>
    <p className="mb-4 text-blueGray-500">
    Nakon prvog kruga takmičenja, odabrani su najbolji timovi koji su prošli u finale, gdje su predstavili svoja inovativna rješenja u oblasti zelene tehnologije i održivosti. Izazove za učenike osmislilo je deset kompanija čime je ostvarena veza između obrazovanja i stvarnih potreba tržišta, kao i podstaknuta svijest o značaju rješenja koja oblikuju održivu budućnost.
    </p>
    <h2 className="mb-4 text-blueGray-500">
      USPJESI UČENIKA I PROFESORA SREDNJE EKONOMSKE ŠKOLE SARAJEVO NA FINALNOM GTECH TAKMIČENJU
    </h2>
    <p className="mb-4 text-blueGray-500">
    Naša škola učestvovala je na takmičenju od 5. do 16. maja 2025. godine sa četiri tima. Tri tima su se plasirala u finalno takmičenje, koje je održano na Internacionalnom BURCH univerzitetu u Sarajevu. Učenici su prezentovali svoja rješenja pred stručnom komisijom koju su činili predstavnici kompanija, kao i eksperti iz Slovenije, Hrvatske i Bosne i Hercegovine.
    </p>
    <h2 className="mb-4 text-blueGray-500">
    TIMOVI SREDNJE EKONOMSKE ŠKOLE SARAJEVO
    </h2>
    <p className="mb-4 text-blueGray-500">
    <b>Mentorica: prof. Indira Zeković</b></p>
    <p className="mb-4 text-blueGray-500">
    Tim 1: Emil Karić, Advan Durmo, Zarah Hošić, Tajra Kajmović</p>
    <p className="mb-4 text-blueGray-500">
    Tim 2: Zerina Zec, Arijana Nikšić, Ilhana Jelić</p>
    <p className="mb-4 text-blueGray-500">
    <b>Mentorica: prof. Alma Karamujić</b></p>
    <p className="mb-4 text-blueGray-500">
    Tim 3: Adna Ploskić, Alejna Hadžić, Samira Bićević, Nejla Nogo</p>
    <p className="mb-4 text-blueGray-500">
    Tim 4: Faris Čaušević, Davud Ćeman, Emina Karić
    </p>
    <h2 className="mb-4 text-blueGray-500">
    SJAJNI REZULTATI NAŠIH TIMOVA NA FINALNOM TAKMIČENJU
    </h2>
    <p className="mb-4 text-blueGray-500">
    Na kraju finalnog takmičenja na IBU u Sarajevu, naši timovi postigli su izvanredne rezultate uprkos jakoj konkurenciji – osvojena su dva druga mjesta i jedno treće mjesto:
    </p>
    <p className="mb-4 text-blueGray-500">
    •	Tim 2 – drugo mjesto (izazov kompanije DM)</p>
    <p className="mb-4 text-blueGray-500">
    •	Tim 4 – drugo mjesto (izazov kompanije Lactalis)</p>
    <p className="mb-4 text-blueGray-500">
    •	Tim 3 – treće mjesto (izazov kompanije Lactalis)
    </p>
    <p className="mb-4 text-blueGray-500">
    Iskrene čestitke upućujemo svim predstavnicima naše škole na učešću u cjelokupnom projektu – <b>direktorici Amiri Kadrispahić (voditeljica ERASMUS+ projekta), koordinatorici projekta Senidi Čeljo, kao i profesoricama mentoricama Indiri Zeković i Almi Karamujić</b>, koje su s velikim zalaganjem pripremale učenike za takmičenje.</p>
    <p className="mb-4 text-blueGray-500">
    Učenicima i učenicama želimo da stečena znanja i vještine uspješno primjenjuju u svom daljem školovanju i životu.</p>
    <p className="mb-4 text-blueGray-500">
    Završna konferencija projekta biće održana 29. 9. 2025. godine, na kojoj će biti predstavljeni rezultati GTECH  (ERASMUS+) projekta finansiranog sredstvima Evropske unije.</p>
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
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">TAKMIČENJE UČENIKA U INOVACIJAMA I PODUZETNIŠTVU U OKVIRU G-TECH PROJEKTA, KOJI SE REALIZUJE KROZ
    ERASMUS+ PROGRAM
    
    
    
    
    
    
    </h6>
                </span>
                <div className="flex flex-wrap">
                  <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                    <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                      <div className="py-5 flex-auto">
                      <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                          
                      <div>
                            <Image src={najava} alt="" />
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
    Dana 5. maja 2025. zvanično je otvoreno glavno takmičenje u okviru izazova poduzetništva u zelenim tehnologijama, koje se realizuje u sklopu međunarodnog G-TECH projekta, a trajat će do 16. maja 2025.
    </p>
    <p className="mb-4 text-blueGray-500">
    210 učenika, raspoređenih u 60 timova iz 30 škola širom Bosne i Hercegovine, imat će priliku pokazati svoje inovativne i poduzetničke vještine, stečene kroz učenje temeljeno na izazovima. 
    </p>
    <p className="mb-4 text-blueGray-500">
    Tokom takmičenja povezat će se s ekspertima i industrijskim partnerima, čime se dodatno osnažuje njihovo iskustvo.
    </p>
    <p className="mb-4 text-blueGray-500">
    Putem jedinstvene G -TECH platforme, učenici će rješavati 10 izazova koje su postavile 10 kompanija, te se takmičiti za vrijedne nagrade koje su upravo te kompanije obezbijedile. Tokom cijelog procesa, podršku i mentorstvo pružat će im njihovi profesori.
    </p>
    <p className="mb-4 text-blueGray-500">
    Poželimo sreću svim učesnicima kao i timovima iz Srednje ekonomske škole, Sarajevo.</p>
    <p className="mb-4 text-blueGray-500">
    Saznajte više o projektu ovdje: <a href='https://gtech.smion.com/'>www.gtech.smion.com</a></p>
    <p className="mb-4 text-blueGray-500">
    G -TECH partneri projekta:</p>
    <p className="mb-4 text-blueGray-500">
    @smioninnovation</p>
    <p className="mb-4 text-blueGray-500">
    @burchuniversity</p>
    <p className="mb-4 text-blueGray-500">
    @fablab_sarajevo</p>
    <p className="mb-4 text-blueGray-500">
    @gea_college</p>
    <p className="mb-4 text-blueGray-500">
    @ess_varazdin</p>
    <p className="mb-4 text-blueGray-500">
    @srednja_ekonomska_skola</p>
    <p className="mb-4 text-blueGray-500">
    G -TECH takmičenje finansijski podržava Evropska komisija.</p>
    
    </span>
                      </div>
                     
                    </div>
                  </div>
                </div>
                </div>
              </section>
        <section data-aos="fade-in" className="pb-20 bg-white w-full">
                      <div className="container mx-auto px-4">
                      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h6 className="text-xl mb-1 font-semibold uppercase mr-2">GTECH POST MOBILITY KONFERENCIJA U SREDNJOJ EKONOMSKOJ ŠKOLI, SARAJEVO
             </h6>
                <Image src={logo10} width="200" height="200" alt="" />
            </span>
                        <div className="flex flex-wrap">
                          <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                            <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                              <div className="py-5 flex-auto">
                              <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                                  
                              <div>
                                    <Image src={huba1} alt="" />
                                </div>
                                <div>
                                    <Image src={huba2} alt="" />
                                </div>
                                <div>
                                    <Image src={huba3} alt="" />
                                </div>
                                <div>
                                    <Image src={huba4} alt="" />
                                </div>
                                <div>
                                    <Image src={huba5} alt="" />
                                </div>
                                <div>
                                    <Image src={huba6} alt="" />
                                </div>
                                <div>
                                    <Image src={huba7} alt="" />
                                </div>
                                <div>
                                    <Image src={huba8} alt="" />
                                </div>
                                <div>
                                    <Image src={huba9} alt="" />
                                </div>
                                <div>
                                    <Image src={huba10} alt="" />
                                </div>
                                <div>
                                    <Image src={huba11} alt="" />
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
                              U Srednjoj ekonomskoj školi, Sarajevo, 31. januara 2025. godine, održana je <b>GTECH Post Mobility Konferencija</b>, koja je okupila 88 profesorica i profesora, kao i direktorica i direktora iz Bosne i Hercegovine u dinamičnoj razmjeni znanja i iskustava. Događaj je pratilo i 20 učenika/ca naše škole. </p>
                              <p className="mb-4 text-blueGray-500">
                              <b>GTECH projekat obuhvata</b>: razvoj inovativnih nastavnih metoda, podršku nastavnicima/cama kroz obuke i razmjenu najboljih praksi, te osnaživanje učenika/ca da postanu lideri budućih tehnoloških promjena. </p>
                              <p className="mb-4 text-blueGray-500">
                              U okviru projektnih aktivnosti, <b>Post Mobility konferencija</b> okupila je učesnike i partnere projekta koji su podijelili stečena iskustva s treninga u Ljubljani i Varaždinu, prenoseći ih kolegicama i kolegama koji su došli iz više bosanskohercegovačkih gradova. </p> 
            <p className="mb-4 text-blueGray-500">
            Poseban fokus konferencije bio je na učenju zasnovanom na izazovima (Challenge Based Learning), metodologiji koja motiviše nastavnike/ce i učenike/ce da rješavaju stvarne probleme i primjenjuju stečeno znanje u praksi. Kroz ovu metodu, u okviru GTECH projekta, u maju 2025. godine biće organizovano takmičenje za 200 učenika/ca koji će rješavati izazove postavljene od strane 10 kompanija.
            </p> 
            <p className="mb-4 text-blueGray-500">
            Konferenciju je pozdravnim govorom otvorila direktorica Amira Kadrispahić, koja je istakla važnost GTECH projekta ne samo za školu, već i za širu obrazovnu zajednicu. GTECH projekat predstavila je <b>prof. Senida Čeljo</b>, naglasivši značaj metoda aktivnog učenja i <b>vodeći interaktivnu World Café radionicu</b>. 
            </p> 
            <p className="mb-4 text-blueGray-500">
            Učesnici/ce Mobility treninga podijelili su svoja iskustva putem prezentacija, predstavili stečena znanja i vještine, te istaknuli ključne metode i alate primjenjive u nastavi.
    Tokom radionice diskusije su bile usmjerene na integraciju zelenih tehnologija, inovativnih nastavnih metoda i poduzetništva u stručno obrazovanje, s ciljem pripreme učenika/ca za digitalnu transformaciju i održivi razvoj.
    </p> 
            <p className="mb-4 text-blueGray-500">
            Na kraju konferencije, svim učesnicima su uručeni certifikati. Veliko hvala @fablab_sarajevo i svim učesnicima, partnerima koji su doprinijeli uspjehu ovog događaja!</p> 
             
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
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">Predstavnice Srednje ekonomske škole, Sarajevo na stručno-edukativnim treninzima u Ljubljani i Varaždinu
 </h6>
    <Image src={logo10} width="200" height="200" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                      
                  <div>
                        <Image src={odmah1} alt="" />
                    </div>
                    <div>
                        <Image src={odmah2} alt="" />
                    </div>
                    <div>
                        <Image src={odmah3} alt="" />
                    </div>
                    <div>
                        <Image src={odmah4} alt="" />
                    </div>
                    <div>
                        <Image src={odmah5} alt="" />
                    </div>
                    <div>
                        <Image src={odmah6} alt="" />
                    </div>
                    <div>
                        <Image src={odmah7} alt="" />
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
                  U okviru projektnih aktivnosti profesorice Srednje ekonomske škole Sarajevo, Alma Karamujić i Indira Zeković, bile su dio tima od 30 profesorica i profesora iz Bosne i Hercegovine koji su učestvovali u stručnim trenizima u okviru Erasmus+ projekta GTECH (Green Tech Entrepreneurship Challenge Hub).</p>
                  <p className="mb-4 text-blueGray-500">
                  Ovaj značajan projekt finansiran je od strane Evropske unije i ima za cilj unapređenje kapaciteta nastavnika i učenika srednjih stručnih škola, te promociju poduzetništva i inovacija u oblasti zelenih tehnologija.</p>
                  <p className="mb-4 text-blueGray-500">
                  Mobilnosti su održane u dva ključna centra:</p> 
<p className="mb-4 text-blueGray-500">
•	<b>Ljubljana (20. i 21. januar 2025.)</b> – Domaćin je bio Gea College, koji je profesorima i profesoricama pružio priliku za profesionalni razvoj kroz obuke o učenju zasnovanom na izazovima, poduzetništvu i stvaranju veza s industrijom.
</p> 
<p className="mb-4 text-blueGray-500">
•	<b>Varaždin (22.–24. januar 2025.)</b> – Elektrostrojarska škola Varaždin organizovala je praktične aktivnosti usmjerene na razvijanje vještina potrebnih za zelenu ekonomiju budućnosti. Nastavnici su imali priliku obići kompanija kao što su Solvis i Mobilisis, koje su podijelile svoje priče o održivom poslovanju.
</p> 
<p className="mb-4 text-blueGray-500">
Srednja ekonomska škola, Sarajevo se zahvaljuje svojim partnerima projekta: Gea College, Elektrostrojarska škola Varaždin, na izvanrednoj organizaciji treninga, kao i ostalim partnerima koji su dali svoj doprinos u cjelokupnoj pripremi za ovaj događaj.</p> 
<p className="mb-4 text-blueGray-500">
Projekt partneri: </p> 
<p className="mb-4 text-blueGray-500">
Smion 
</p>
<p className="mb-4 text-blueGray-500">
FabLab B&H </p>
<p className="mb-4 text-blueGray-500">
International Burch University </p>
<p className="mb-4 text-blueGray-500">
GEA College </p>
<p className="mb-4 text-blueGray-500">
Elektrostrojarska škola Varaždin </p>
<p className="mb-4 text-blueGray-500">
Srednja ekonomska škola, Sarajevo </p>  
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
    <section data-aos="fade-in" className="pb-20 bg-white w-full justify-center items-center">
          <div className="container mx-auto px-4 justify-center items-center">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Newsletter #3




</h6>
            </span>
            <div className="flex flex-wrap justify-center items-center">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center  md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">

                      
                  <Image src={newsletter3} alt="" />
                        

                    </div>
                    <a href='https://drive.google.com/file/d/1Pa_F1_7Ws9Ne1QK_oD8tzvMNA-aCLzKl/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                  </div>
                </div>
              
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full justify-center items-center">
          <div className="container mx-auto px-4 justify-center items-center">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Newsletter #2




</h6>
            </span>
            <div className="flex flex-wrap justify-center items-center">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center  md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">

                      
                  <Image src={newsletter2} alt="" />
                        

                    </div>
                    <a href='https://drive.google.com/file/d/1kfZdNoTXxz7DDypsmUw-ErVMyQkH8bpf/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                  </div>
                </div>
              
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full justify-center items-center">
          <div className="container mx-auto px-4 justify-center items-center">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Newsletter #1




</h6>
            </span>
            <div className="flex flex-wrap justify-center items-center">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center  md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">

                      
                  <Image src={newsletter1} alt="" />
                        

                    </div>
                    <a href='https://drive.google.com/file/d/1RJSq3DFEv_U_oWDxdlqUz33gDBjldOt_/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                  </div>
                </div>
              
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Alat za procjenu trenutnog stanja preduzetničkih kompetencija




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">

                      
                  <Image src={alat} alt="" />
                        

                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
 
                  <p className="mb-4 text-blueGray-500">
                  Ovaj materijal je sastavljen u formi upitnika, sa ciljem da korisnici sagledaju svoj trenutni nivo znanja o 15 ključnih preduzetničkih kompetencija prema modelu EntreComp, da zatim svoje odgovore uporede sa ispravnim rješenjima i konačno, tokom obuke, upotpune svoja nedostajuća znanja iz ove oblasti. Rezultati testova se neće javno publikovati, biće poznati samo svakom individualnom učesniku i služiće kao lični putokaz o potrebi dodatne obuke.</p>
                  <br></br>
                        <p className="mb-4 text-blueGray-500">
                        </p>
                        <a href='https://drive.google.com/file/d/1-g0RhcwcQKlX7vbOSq462IJjZI0UAxy6/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>


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
          
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">Opisi preduzetničkih kompetencija</h6>
                        <Image src={opisi} alt="" />
                        <br></br>
                        <p className="mb-4 text-blueGray-500">
                        U ovom materijalu, saznaćete koje su to ključne preduzetničke kompetencije prema EntreComp modelu, kao i detaljne opise sa praktičnim primjerima svake od 15 kompetencija koje se smatraju ključnim za ovladavanje preduzetničkim načinom razmišljanja i promjenu stavova u funkciji preduzimanja inicijativa za stvaranje novih vrijednosti - umjesto klasičnih programa za osnivanje i upravljanje MSP (malim i srednjim preduzećima). </p>
                        <a href='https://drive.google.com/file/d/1MvTUMEJReeD_SDWYNYMNHRA27wXgzowR/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">Vodič za trenere</h6>
                        <Image src={vodic} alt="" />
                        <br></br>
                        <p className="mb-4 text-blueGray-500">
                        U ovom materijalu, kreiranom kao putokaz nastavnicima kako da uspješno organizuju radionice po modelu PBL (učenja zasnovanog na projektu), saznaćete, između ostalog, kako napraviti ravnotežu između izazova i podrške, kako uspostaviti povjerenje i otvoreni razgovor bez isticanja autoriteta, kako ohrabriti učešće svih bez auto-cenzure – uvođenjem prava na grešku, kako balansirati odnos između dominantnih i tihih učenika i kako stimulisati saradnju na zajedničkom rješavanju problema.</p>
                        <a href='https://drive.google.com/file/d/16PGsODckTeTeBctJGEKnClJCUCRI-BkR/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>

          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">projekat OPEN FUTURE  </h6>
    <Image src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <Image src={opis1} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <Image src={opis2} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <Image src={opis3} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <Image src={opis4} alt="" />
                    </div>

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
                  <Carousel showThumbs={false} interval="10000" transitionTime="1000" infiniteLoop>
                      
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
    
    <Footer />
    </>
  )
}

export default Erasmus