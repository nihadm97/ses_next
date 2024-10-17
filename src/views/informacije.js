"use client"
import React from 'react'
import InformacijeNavbar from "@/components/Navbars/InformacijeNavbar";
import Footer from "@/components/Footers/Footer.js";
import CardAkti from "@/components/Cards/CardAkti.js";

const Informacije = () => {
  return (
    <>
    <InformacijeNavbar />
    <CardAkti/>
    <Footer/>
    </>
  )
}

export default Informacije