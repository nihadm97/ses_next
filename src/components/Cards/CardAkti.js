import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

// components


export default function CardAkti({ color }) {
  const [dropdownPopoverShow1, setDropdownPopoverShow1] = React.useState(false);
  const [dropdownPopoverShow2, setDropdownPopoverShow2] = React.useState(false);
  const [dropdownPopoverShow3, setDropdownPopoverShow3] = React.useState(false);
  const [dropdownPopoverShow4, setDropdownPopoverShow4] = React.useState(false);
  const [dropdownPopoverShow5, setDropdownPopoverShow5] = React.useState(false);
  const popoverDropdownRef1 = React.createRef();
  const popoverDropdownRef2 = React.createRef();
  const popoverDropdownRef3 = React.createRef();
  const popoverDropdownRef4 = React.createRef();
  const popoverDropdownRef5 = React.createRef();
  const btnDropdownRef1 = React.createRef();
  const btnDropdownRef2 = React.createRef();
  const btnDropdownRef3 = React.createRef();
  const btnDropdownRef4 = React.createRef();
  const btnDropdownRef5 = React.createRef();
  const popperInstance = React.useRef(null);

  const openDropdownPopover1 = () => {
    popperInstance.current = createPopper(btnDropdownRef1.current, popoverDropdownRef1.current, {
      placement: "left-start",
    });
    setTimeout(() => {
      popperInstance.current.update();
    }, 0);
    setDropdownPopoverShow1(true);
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow3(false);
    setDropdownPopoverShow4(false);
    setDropdownPopoverShow5(false);
  };
  const closeDropdownPopover1 = () => {
    setDropdownPopoverShow1(false);
  };
  const openDropdownPopover2 = () => {
    popperInstance.current = createPopper(btnDropdownRef2.current, popoverDropdownRef2.current, {
      placement: "left-start",
    });
    setTimeout(() => {
      popperInstance.current.update();
    }, 0);
    setDropdownPopoverShow2(true);
    setDropdownPopoverShow1(false);
    setDropdownPopoverShow3(false);
    setDropdownPopoverShow4(false);
    setDropdownPopoverShow5(false);
  };
  const closeDropdownPopover2 = () => {
    setDropdownPopoverShow2(false);
  };
  const openDropdownPopover3 = () => {
    popperInstance.current = createPopper(btnDropdownRef3.current, popoverDropdownRef3.current, {
      placement: "left-start",
    });
    setTimeout(() => {
      popperInstance.current.update();
    }, 0);
    setDropdownPopoverShow3(true);
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow1(false);
    setDropdownPopoverShow4(false);
    setDropdownPopoverShow5(false);
  };
  const closeDropdownPopover3 = () => {
    setDropdownPopoverShow3(false);
  };
  const openDropdownPopover4 = () => {
    popperInstance.current = createPopper(btnDropdownRef4.current, popoverDropdownRef4.current, {
      placement: "left-start",
    });
    setTimeout(() => {
      popperInstance.current.update();
    }, 0);
    setDropdownPopoverShow4(true);
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow3(false);
    setDropdownPopoverShow1(false);
    setDropdownPopoverShow5(false);
  };
  const closeDropdownPopover4 = () => {
    setDropdownPopoverShow4(false);
  };
  const openDropdownPopover5 = () => {
    popperInstance.current = createPopper(btnDropdownRef5.current, popoverDropdownRef5.current, {
      placement: "left-start",
    });
    setTimeout(() => {
      popperInstance.current.update();
    }, 0);
    setDropdownPopoverShow5(true);
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow3(false);
    setDropdownPopoverShow4(false);
    setDropdownPopoverShow1(false);
  };
  const closeDropdownPopover5 = () => {
    setDropdownPopoverShow5(false);
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        style={{marginBottom: "10%"}}
      >
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  GRUPA
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  BROJ DOKUMENATA
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  ODNOSI SE NA
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    ŠKOLSKI AKTI
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  17
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  OSOBLJE I UČENIKE
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef1}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow1 ? closeDropdownPopover1() : openDropdownPopover1();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef1}
        className={
          (dropdownPopoverShow1 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/10ydsxl3rhHL2XswRnQiCKW-BPs1PTA7R/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravila škole
        </a>
        <a
          href="https://drive.google.com/file/d/1z0svW4oU8Gp7YXky21GG65kIJ0H2zoV6/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o kućnom redu 
        </a>
        <a
          href="https://drive.google.com/file/d/1RTKn3Ajk9vTGTrT8e12xSIPzRI5LsFIZ/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o video nazdornom sistemu
        </a>
        <a
          href="https://drive.google.com/file/d/1NGqfBFg6KuV0HTsqEyyi-qZ71Ob5Eunb/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o korištenju vlastitih prihoda
        </a>
        <a
          href="https://drive.google.com/file/d/1-GCAppQ9v9-KUGtpUC0r1eQVUNANOPpn/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o sukobu interesa
        </a>
        <a
          href="https://drive.google.com/file/d/1uSzeMjKNz71nl-YxnbLQyAktgXMCyl41/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o zaštiti na radu 
        </a>
        <a
          href="https://drive.google.com/file/d/1fY68_q27E7ActhnFUY6OSrRKpJXp5lMJ/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o radu
        </a>
        <a
          href="https://drive.google.com/file/d/1ThCB-iJ7wED4DHXPjtcuJjb8RyhKePuE/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Poslovnik o radu stručnih organa
        </a>
        <a
          href="https://drive.google.com/file/d/1dh0Bb3yG_hcaf-yQEwGzBXITKzBkZRRD/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Poslovnik o radu školskog odbora
        </a>
                <a
          href="https://drive.google.com/file/d/1di68b4Z1znvZj4Dx5JmnfYeiJh_Zl2LE/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o izmjenama i dopunama pravilnika o radu 2025.
        </a>
        <a
          href="https://drive.google.com/file/d/19yiBPFZZXFfQPrA1mc76I1GaY3WljkTw/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o izmjenama i dopunama pravilnika o radu 2024.
        </a>
        <a
          href="https://drive.google.com/file/d/1JMN5WUAJ6vZjjzsApnFhYojlO9LL_dKU/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravila školske ishrane
        </a>
        <a
          href="https://drive.google.com/file/d/1CEcYGCjX5ZgLB_-aAcmMyUi7_IARsCkd/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o poslovnima nastavnika
        </a>
        <a
          href="https://drive.google.com/file/d/1UdSLFi_D9xwdHFLUC3xSqyW96ZrlFzDA/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Privremeni plan nabavke za 2025.
        </a>
        <a
          href="https://drive.google.com/file/d/14QvL_wmRltuzQ_yncQT1l31JCMq1TFGy/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Plan nabavke za 2025.
        </a>
        <a
          href="https://drive.google.com/file/d/12ALV6CUD3DwimD-aNihWZ_5Knl2eY7Jj/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          I izmjena plana nabavki za 2025.
        </a>
                <a
          href="https://drive.google.com/file/d/1e-CF-pltUG7Fb2uFfx-_w5mXnes1yiwy/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          II izmjena plana nabavki za 2025.
        </a>
          </div>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    USTAV
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  OSOBLJE I UČENIKE
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef2}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow2 ? closeDropdownPopover2() : openDropdownPopover2();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef2}
        className={
          (dropdownPopoverShow2 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/1HaCGxs9dtT7dVm7RRSZqavw05OBf4uUA/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Ustav Kantona Sarajevo
        </a>
        
      </div>
                </td>
              </tr><tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    ZAKONI
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  7
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  OSOBLJE I UČENIKE
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef3}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow3 ? closeDropdownPopover3() : openDropdownPopover3();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef3}
        className={
          (dropdownPopoverShow3 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/1XTFeByTbVG15cJivu1IsOEEH06fljE0V/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi u KS
        </a>
        <a
          href="https://drive.google.com/file/d/1ApKlMK_oAEhW3-ycY7oq5DRUHpjuvSQS/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Okvirni zakon o osnovnom i srednjem obrazovanju u BIH
        </a>
        <a
          href="https://drive.google.com/file/d/1y95SJ7NuZ5H50t-Uo3kExKwJcymeNSWZ/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o radu Federacije BiH
        </a>
        <a
          href="https://drive.google.com/file/d/1a6lkVAaFXn282Pze_8Y-ThndMB5Nzv0V/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
         Zakon o izmjenama Zakona o radu     
        </a>
        <a
          href="https://drive.google.com/file/d/1rLH0ZbasEqwhVpaEyDb-HGz79Oje9Hpo/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
         Zakon o izmjenama i dopunama Zakona o radu     
        </a>
        <a
          href="https://drive.google.com/file/d/1dpvoOEDw8TU8eKT0YtJkrY4N3N6f_t7-/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o javnim nabavkama
        </a>
        <a
          href="https://drive.google.com/file/d/1DC2JhC3LDWOwFDtPoDUSmW6qp4UUDIEy/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o izmjenama i dopunama Zakona o javnim nabavkama
        </a>
        
      </div>
                </td>
              </tr><tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    PRAVILNICI
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  20
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  OSOBLJE I UČENIKE
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef4}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow4 ? closeDropdownPopover4() : openDropdownPopover4();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef4}
        className={
          (dropdownPopoverShow4 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/1HxfQVU6TRMU73laRA1T59A5AF_SquWHx/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravila školske ishrane
        </a>
        <a
          href="https://drive.google.com/file/d/1FyrC7yyP6gJlrG1EkFJUs-wM5rpZD-GP/view?ts=6391b5dd"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o prijavljivanju korupcije
        </a>
       <a
          href="https://drive.google.com/file/d/1F3Sv3TO8kdrQbarfknOnxS2jL273AEA9/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pedagoški standardi i normativi za odgoj i obrazovanje u osnovnoj i srednjoj školi 
        </a>

        <a
          href="https://drive.google.com/file/d/1XR2uBC4EpsMXxUJ2M_kHBypdL0JSTJMp/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o vođenju pedagoske dokum i evid
        </a>
        <a
          href="https://drive.google.com/file/d/15NKxsRyviEGGISEbsufBsJc1pLghsdQv/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izmjenama i dopunama pravilnika o vođenju pedagoške dokumentacije i evid u srednj šk
        </a>
        <a
          href="https://drive.google.com/file/d/1f2569-NNBpOFDw8qsz24I47RzeRRCE77/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o praćenju, vrednovanju i ocjenjivanju učenika
        </a>
        <a
          href="https://drive.google.com/file/d/1WRDbJMP_YtvjH2FHSQE3crZ_8zo1ckCe/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o dopuni Pravilnika o praćenju, vrednovanju i ocjenjivanju učenika osnovnih i srednjih škola u KS
        </a>
        <a
          href="https://drive.google.com/file/d/1k9ndUNoshsothwUr9eWaATqD-HsC9wQ9/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o sadržaju i načinu polaganja mature
        </a>
        <a
          href="https://drive.google.com/file/d/16aApZEbMVZVIus6VObbNf5zg-MeKSkZ7/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o ishrani učenika u osnovnim i srednjim školama KS
        </a>
        <a
          href="https://drive.google.com/file/d/1QmXrcup-6wyZCQakpcKOXmFl_u3iMlqg/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o organizaciji i realizaciji izleta
        </a>
        <a
          href="https://drive.google.com/file/d/13ar0MYFilUkfmWp4XKFhyBZb1eGxU0rH/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o inkluzivnom obrazovanju
        </a>
        <a
          href="https://drive.google.com/file/d/1rldLtslV1Kl7Y2___dCFBwflob3XJBuE/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
           Pravilnik o izmjenama Pravilnika o inkluzivnom obrazovanju
        </a>
                <a
          href="https://drive.google.com/file/d/1r8ZPLbr_cMirgwNUApE6BF-q9AbdQsyN/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
           Pravilnik o provođenju mjera odgojno-obrazovne podrške i stručnog tretmana učenika
        </a>
        <a
          href="https://drive.google.com/file/d/1rrEtmVYM1gZEM_u6Hl2zUDvGavLe_LDf/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o vođenju evidencije o neprihvatljivim oblicima ponašanja
        </a>
                <a
          href="https://drive.google.com/file/d/1tsyBK0m1UXrNyEV72M6fHoDfYhhKoytL/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
           Pravilnik o izmjeni pravilnika o neprihvatljivim oblicima ponašanja
        </a>
        <a
          href="https://drive.google.com/file/d/1wSau8-x0BMYfV8e3254cBAKBYWotZKqq/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o ocjenjivanju, napredovanju i sticanju stručnih zvanja
        </a>
        <a
          href="https://drive.google.com/file/d/1_Utqaw3fv3ZCJdjZQvnOKeaYo3VRx5vG/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik sa kriterijima za prijem radnika u radni odnos
        </a>
        <a
          href="https://drive.google.com/file/d/1WupO5G2co1rAlifgFVsP3XCe9qVZeyKa/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izmjenama Pravilnika za prijem radnika u radni odnos u osnovnim i srednjim školama u KS
        </a>
        <a
          href="https://drive.google.com/file/d/1SfvuTQdUTQIUGrsnAp64w16A6O5WT5Un/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik sa kriterijima za iskazivanje prestanka potrebe za zaposlenicima
        </a>
        <a
          href="https://drive.google.com/file/d/1qFGbtleryR6xE8KgkD_EaPDu0Z0Sh68c/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izboru, nadležnostima i načinu rada školskih odbora
        </a>
        <a
          href="https://drive.google.com/file/d/1GbXXLsF-6iL7ONvZjwhMAGtAj2ZjROsP/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o internoj evaluaciji znanja učenika
        </a>
        <a
          href="https://drive.google.com/file/d/1T1ybtIUUDpnuk6azTdsQ580TxoJdeReY/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o načinu rada školskih odbora
        </a>
        <a
          href="https://drive.google.com/file/d/1DYLnrjKWqGufk1s9oYaCQ_fFwbDA0OLz/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izboru, kriterijima za izbor, nadležnostima i radu direktora
        </a>
        <a
          href="https://drive.google.com/file/d/116gUYAFulRCRbplfeHU1LMS9eKf44Ou7/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o vlastitim javnim prihodima
        </a>
      </div>
                </td>
              </tr><tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    OSTALO
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  3
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  OSOBLJE
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef5}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow5 ? closeDropdownPopover5() : openDropdownPopover5();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef5}
        className={
          (dropdownPopoverShow5 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/1ZaYvO8ZZlmItEt1NjTJdIcfD1cutRgbS/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Kolektivni ugovor
        </a>
        <a
          href="https://mon.ks.gov.ba/propisi"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Ostali propisi
        </a>
        <a
          href="https://drive.google.com/file/d/1Fbx7hqvAdCM39Rl2A7imAy7rQlDqchvL/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Obrazac za prijavu korupcije
        </a>
      </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardAkti.defaultProps = {
  color: "light",
};

CardAkti.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
