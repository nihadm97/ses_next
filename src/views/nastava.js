'use client';
import React, { useEffect } from "react";
import Navbar from '@/components/Navbars/NastavaNavbar';
import Footer from "@/components/Footers/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nastava() {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
<>
<Navbar transparent />

<main>

{/* UVOD – NASTAVA PO KURIKULUMU */}

<section className="pt-32 pb-20 bg-blueGray-200">
<div className="container mx-auto px-4">

<div className="flex flex-wrap justify-center text-center">
<div className="w-full lg:w-8/12 px-4">

<h2 className="text-4xl font-semibold mb-4">
Nastavni plan i program u JU Srednja ekonomska škola, Sarajevo
</h2>

<p className="mb-4">
Detaljan Nastavni plan i program za sve nastavne predmete dostupan je u
sljedećim dokumentima:
</p>

<ul className="list-disc pl-6 space-y-2">
<li>
Nastavni plan i program za zanimanje <strong>Ekonomski tehničar</strong> – 
<a href="https://drive.google.com/file/d/16qIi3CF8izh3WMUv050QLf5uMqYm5Oh4/view?usp=sharing"
target="_blank"
className="text-blue-600 hover:underline ml-1">
Pregled dokumenta
</a>
</li>

<li>
Nastavni plan i program za zanimanje <strong>Bankarski tehničar</strong> – 
<a href="https://drive.google.com/file/d/11ke8WSOzTdn4aEdBvA9d35PXtl-YXLB8/view?usp=sharing"
target="_blank"
className="text-blue-600 hover:underline ml-1">
Pregled dokumenta
</a>
</li>
</ul>

<hr></hr>
<br></br>

<p className="mb-4">
Nastava za opće obrazovne predmete se realizuje na osnovu odluka Ministarstva za odgoj i obrazovanje Kantona Sarajevo o implementaciji kurikuluma za srednje stručne škole. Primjena kurikuluma uređena je posebnim odlukama za svaki razred srednje škole:
</p>

<ul className="list-disc pl-6 space-y-2">

<li>
<a href="https://drive.google.com/file/d/1BEyBtIfU3smUYGDioj6qHqUPkD2Gi7e7/view?usp=sharing" target="_blank" className="text-blue-600 hover:underline">
Odluka o primjeni kurikuluma za I razred srednje škole
</a>
</li>

<li>
<a href="https://drive.google.com/file/d/1TytVEV0PDgHd3VJWosj_Df9-314WUs6N/view?usp=sharing" target="_blank" className="text-blue-600 hover:underline">
Odluka o primjeni kurikuluma za II razred srednje škole
</a>
</li>

<li>
<a href="https://drive.google.com/file/d/1_GlJqzyL7EcnWgwdpUf0miwP3oM24LAr/view?usp=sharing" target="_blank" className="text-blue-600 hover:underline">
Odluka o primjeni kurikuluma za III razred srednje škole
</a>
</li>

<li>
<a href="https://drive.google.com/file/d/1ZtU45YadYxoZDx1HiENLVgsliLYXpq6T/view?usp=sharing" target="_blank" className="text-blue-600 hover:underline">
Odluka o primjeni kurikuluma za IV razred srednje škole
</a>
</li>

</ul>
<br></br>

<h4 className="text-xl font-semibold mb-4">
Stranica kurikuluma Kantona Sarajevo
</h4>

<a href="https://kurikulum.ks.gov.ba/bs" target="_blank" className="text-blue-600 hover:underline">
Online platforma za kurikulum
</a>

</div>
</div>

<div className="flex flex-wrap mt-12 justify-center">

<div className="w-full md:w-4/12 px-4 text-center mb-6">
<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
<i className="fas fa-book text-xl"></i>
</div>
<h6 className="text-xl mt-4 font-semibold">
Savremeni kurikulum
</h6>
</div>

<div className="w-full md:w-4/12 px-4 text-center mb-6">
<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
<i className="fas fa-laptop text-xl"></i>
</div>
<h6 className="text-xl mt-4 font-semibold">
Digitalne kompetencije
</h6>
</div>

<div className="w-full md:w-4/12 px-4 text-center mb-6">
<div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
<i className="fas fa-briefcase text-xl"></i>
</div>
<h6 className="text-xl mt-4 font-semibold">
Priprema za tržište rada
</h6>
</div>

</div>
</div>
</section>


{/* EKONOMSKI TEHNIČAR */}

<section className="pb-20 bg-blueGray-200">
<div className="container mx-auto px-4 text-center md:text-left">
<div className="flex flex-wrap items-center mt-12">

<div className="w-full md:w-6/12 px-4 mr-auto ml-auto">

<h3 className="text-3xl font-semibold mb-4">
Nastavni plan – Ekonomski tehničar
</h3>

<div className="overflow-x-auto">

<table className="table-auto bg-white shadow-lg rounded-lg text-sm w-full max-w-3xl overflow-hidden">

<thead>
<tr style={{ backgroundColor: "#92d050", color: "white" }}>
<th className="px-3 py-2 rounded-tl-lg">Red. broj</th>
<th className="px-3 py-2 text-left">Nastavni predmet</th>
<th>1.r.</th>
<th>2.r.</th>
<th>3.r.</th>
<th>4.r.</th>
<th className="rounded-tr-lg">Ukupno</th>
</tr>
</thead>

<tbody className="text-center">

<tr><td>1</td><td className="text-left">Bosanski/Hrvatski/Srpski jezik i književnost</td><td>3</td><td>3</td><td>3</td><td>3</td><td>12</td></tr>
<tr><td>2</td><td className="text-left">Prvi strani jezik</td><td>3</td><td>3</td><td>3</td><td>3</td><td>12</td></tr>
<tr><td>3</td><td className="text-left">Drugi strani jezik</td><td>2</td><td>3</td><td>3</td><td>3</td><td>11</td></tr>
<tr><td>4</td><td className="text-left">Tjelesni i zdravstveni odgoj</td><td>2</td><td>2</td><td>2</td><td>2</td><td>8</td></tr>
<tr><td>5</td><td className="text-left">Matematika</td><td>4</td><td>4</td><td>2</td><td>-</td><td>10</td></tr>
<tr><td>6</td><td className="text-left">Historija</td><td>2</td><td>2</td><td>-</td><td>-</td><td>4</td></tr>
<tr><td>7</td><td className="text-left">Vjeronauka / Kultura religija</td><td>1</td><td>1</td><td>1</td><td>1</td><td>4</td></tr>
<tr><td>8</td><td className="text-left">Građansko obrazovanje</td><td>-</td><td>-</td><td>2</td><td>-</td><td>2</td></tr>
<tr><td>9</td><td className="text-left">Informatika</td><td>2</td><td>2</td><td>-</td><td>-</td><td>4</td></tr>
<tr><td>10</td><td className="text-left">Fizika</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>11</td><td className="text-left">Ekologija</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>

<tr className="bg-gray-100 font-semibold">
<td colSpan="2" className="text-left">Ukupno općeobrazovna nastava</td>
<td>23</td><td>20</td><td>16</td><td>17</td><td>71</td>
</tr>

<tr><td>12</td><td className="text-left">Geografija i ekonomska geografija</td><td>3</td><td>-</td><td>-</td><td>-</td><td>3</td></tr>
<tr><td>13</td><td className="text-left">Hemija i tehnologija sa poznavanjem robe</td><td>3</td><td>-</td><td>-</td><td>-</td><td>3</td></tr>
<tr><td>14</td><td className="text-left">Daktilografija</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>15</td><td className="text-left">Marketing</td><td>-</td><td>4</td><td>5</td><td>-</td><td>9</td></tr>
<tr><td>16</td><td className="text-left">Biznis ekonomija</td><td>-</td><td>5</td><td>5</td><td>3</td><td>13</td></tr>
<tr><td>17</td><td className="text-left">Informatičke tehnologije</td><td>-</td><td>-</td><td>3</td><td>-</td><td>3</td></tr>
<tr><td>18</td><td className="text-left">Međunarodna ekonomija</td><td>-</td><td>-</td><td>-</td><td>4</td><td>4</td></tr>
<tr><td>19</td><td className="text-left">EU i međunarodna saradnja</td><td>-</td><td>-</td><td>-</td><td>2</td><td>2</td></tr>
<tr><td>20</td><td className="text-left">Privredno pravo</td><td>-</td><td>-</td><td>-</td><td>3</td><td>3</td></tr>
<tr><td>21</td><td className="text-left">Ekonomska matematika</td><td>-</td><td>-</td><td>2</td><td>-</td><td>2</td></tr>
<tr><td>22</td><td className="text-left">Izborni predmet</td><td>-</td><td>-</td><td>-</td><td>5</td><td>5</td></tr>

<tr className="font-semibold">
<td colSpan="2" className="text-left">Ukupno stručno-teorijska nastava</td>
<td>8</td><td>9</td><td>15</td><td>12</td><td>49</td>
</tr>

<tr className="bg-green-100 font-bold">
<td colSpan="2" className="text-left">UKUPNO</td>
<td>31</td><td>29</td><td>31</td><td>29</td><td>120</td>
</tr>

</tbody>
</table>

</div>
</div>

<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
<video src="/PrviRazred.mp4" className="max-w-full rounded-lg shadow-lg" autoPlay loop muted playsInline style={{ paddingTop: "5%" }}/>
</div>

</div>
</div>
</section>


{/* BANKARSKI TEHNIČAR */}

<section className="py-20" style={{ paddingTop: "5%" }}>
<div className="container mx-auto px-4 text-center md:text-left">
<div className="flex flex-wrap items-center">

<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
<video src="/DrugiRazred.mp4" className="max-w-full rounded-lg shadow-lg" autoPlay loop muted playsInline/>
</div>

<div className="w-full md:w-6/12 ml-auto mr-auto px-4">

<h3 className="text-3xl font-semibold mb-4" style={{ paddingTop: "5%" }}>
Nastavni plan – Bankarski tehničar
</h3>

<div className="overflow-x-auto">

<table className="table-auto bg-blueGray-200 shadow-lg rounded-lg text-sm w-full max-w-3xl overflow-hidden">

<thead>
<tr className="bg-orange-500 text-white">
<th className="px-3 py-2 rounded-tl-lg">Red. broj</th>
<th className="px-3 py-2 text-left">Nastavni predmet</th>
<th>1.r.</th>
<th>2.r.</th>
<th>3.r.</th>
<th>4.r.</th>
<th className="rounded-tr-lg">Ukupno</th>
</tr>
</thead>

<tbody className="text-center">

<tr><td>1</td><td className="text-left">Bosanski/Hrvatski/Srpski jezik i književnost</td><td>3</td><td>3</td><td>2</td><td>2</td><td>10</td></tr>
<tr><td>2</td><td className="text-left">Prvi strani jezik – engleski jezik</td><td>3</td><td>3</td><td>2</td><td>2</td><td>10</td></tr>
<tr><td>3</td><td className="text-left">Drugi strani jezik – njemački jezik</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>4</td><td className="text-left">Tjelesni i zdravstveni odgoj</td><td>2</td><td>1</td><td>1</td><td>1</td><td>5</td></tr>
<tr><td>5</td><td className="text-left">Matematika</td><td>3</td><td>3</td><td>2</td><td>2</td><td>10</td></tr>
<tr><td>6</td><td className="text-left">Historija</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>7</td><td className="text-left">Vjeronauka / Kultura religija</td><td>1</td><td>1</td><td>1</td><td>1</td><td>4</td></tr>
<tr><td>8</td><td className="text-left">Građansko obrazovanje</td><td>-</td><td>-</td><td>1</td><td>-</td><td>1</td></tr>
<tr><td>9</td><td className="text-left">Informatika</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>10</td><td className="text-left">Ekologija</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>11</td><td className="text-left">Geografija</td><td>3</td><td>-</td><td>-</td><td>-</td><td>3</td></tr>
<tr><td>12</td><td className="text-left">Hemija</td><td>3</td><td>-</td><td>-</td><td>-</td><td>3</td></tr>

<tr className="bg-gray-100 font-semibold">
<td colSpan="2" className="text-left">Ukupno općeobrazovna nastava</td>
<td>26</td><td>11</td><td>9</td><td>8</td><td>54</td>
</tr>

<tr><td>13</td><td className="text-left">Daktilografija sa poslovnim komunikacijama</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>14</td><td className="text-left">Osnove ekonomije</td><td>2</td><td>-</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>15</td><td className="text-left">Tehnike bankarskog računanja</td><td>1</td><td>2</td><td>-</td><td>-</td><td>3</td></tr>
<tr><td>16</td><td className="text-left">Bankarsko poslovanje</td><td>2</td><td>2</td><td>2</td><td>2</td><td>8</td></tr>
<tr><td>17</td><td className="text-left">Poslovna informatika</td><td>-</td><td>2</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>18</td><td className="text-left">Marketing u bankarstvu</td><td>-</td><td>2</td><td>-</td><td>-</td><td>2</td></tr>
<tr><td>19</td><td className="text-left">Uvod u poslovno pravo</td><td>-</td><td>-</td><td>1</td><td>-</td><td>1</td></tr>
<tr><td>20</td><td className="text-left">Poslovno pravo</td><td>-</td><td>-</td><td>-</td><td>2</td><td>2</td></tr>
<tr><td>21</td><td className="text-left">Poslovni engleski jezik</td><td>-</td><td>-</td><td>-</td><td>1</td><td>1</td></tr>
<tr><td>22</td><td className="text-left">Poslovni njemački jezik</td><td>-</td><td>1</td><td>1</td><td>-</td><td>2</td></tr>
<tr><td>23</td><td className="text-left">Praktična nastava u bankama</td><td>-</td><td>14</td><td>21</td><td>21</td><td>56</td></tr>

<tr className="font-semibold">
<td colSpan="2" className="text-left">Ukupno stručno-teorijska nastava</td>
<td>7</td><td>23</td><td>25</td><td>26</td><td>81</td>
</tr>

<tr className="font-bold">
<td colSpan="2" className="text-left">UKUPNO</td>
<td>33</td><td>34</td><td>34</td><td>34</td><td>135</td>
</tr>

</tbody>
</table>

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