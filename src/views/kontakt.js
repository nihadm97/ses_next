"use client"
import React from 'react'
import Menu from "@/components/Navbars/Menu.js";
import Footer from "@/components/Footers/Footer.js";
import {useState} from "react";
import { send } from 'emailjs-com';
import MapExample from '@/components/Maps/MapExample';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Kontakt = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const [toReceive, setReceive] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend);
    send(
      'service_3w7ljkp',
      'template_rhbvj7n',
      toSend,
      '0yh5Kt8PCChHJPyOL'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setReceive("USPJEŠNO POSLANA PORUKA !");
        setTimeout(window.location.reload(), 30000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Menu fixed/>
      <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
          <MapExample />
          <form data-aos="fade-down" className="flex-auto p-5 lg:p-10" onSubmit={onSubmit}><br></br>
                    <h3 style={{color: "black"}}>{toReceive}</h3>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        IME I PREZIME
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Ime Prezimenić"
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="vaš_email@gmail.com"
                        name='from_email'
                        value={toSend.from_email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="mobile"
                      >
                        MOBITEL
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="063/123-456"
                        name='from_mobile'
                        value={toSend.from_mobile}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        PORUKA
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Vaša poruka..."
                        name='message'
                        value={toSend.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type='submit'
                      >
                        POŠALJI PORUKU
                      </button>
                    </div>
                  </form>
                  <section className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div data-aos="fade-in" className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg rounded-lg">
                  <div className="py-5 flex-auto">
                  <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: 'rgb(254, 125, 1)'}}>
                    </span>
                  </div>
                  <h6 class="text-xl font-semibold">Kontakt</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">Tehnički sekretar: +387 33 724 610</p>
                  <p class="mt-2 mb-4 text-blueGray-500">Email: ses@ses.edu.ba</p>
                    </div>
                  </div>
                </div>
              <div data-aos="fade-in" className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: '#92d050'}}>
                    </span>
                  </div>
                  <h6 class="text-xl font-semibold">Ostalo</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">Fax: +387 33 724 618</p>
                  <p class="mt-2 mb-4 text-blueGray-500">Uredništvo web stranice: web@ses.edu.ba</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Kontakt