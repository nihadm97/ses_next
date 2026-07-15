import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

const grupe = [
  {
    naziv: "ŠKOLSKI AKTI",
    broj: "18",
    odnosiSeNa: "OSOBLJE I UČENIKE",
    dokumenti: [
      {
        naziv: "Pravila škole",
        link: "https://drive.google.com/file/d/1TBrO3iytVSliFmHaSVD97UUzs-ifYI7R/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o kućnom redu",
        link: "https://drive.google.com/file/d/16Mc0pc3ALTuyzmMJptwbjWS2UARpGw32/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o video nazdornom sistemu",
        link: "https://drive.google.com/file/d/1DpvhUdJ-8YYVlXzPJPYswwkz68MyBCbB/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o korištenju vlastitih prihoda",
        link: "https://drive.google.com/file/d/1NGqfBFg6KuV0HTsqEyyi-qZ71Ob5Eunb/view",
      },
      {
        naziv: "Pravilnik o sukobu interesa",
        link: "https://drive.google.com/file/d/1-GCAppQ9v9-KUGtpUC0r1eQVUNANOPpn/view",
      },
      {
        naziv: "Pravilnik o zaštiti na radu",
        link: "https://drive.google.com/file/d/1uSzeMjKNz71nl-YxnbLQyAktgXMCyl41/view",
      },
      {
        naziv: "Pravilnik o radu",
        link: "https://drive.google.com/file/d/1fY68_q27E7ActhnFUY6OSrRKpJXp5lMJ/view",
      },
      {
        naziv: "Poslovnik o radu stručnih organa",
        link: "https://drive.google.com/file/d/1ThCB-iJ7wED4DHXPjtcuJjb8RyhKePuE/view?usp=sharing",
      },
      {
        naziv: "Poslovnik o radu školskog odbora",
        link: "https://drive.google.com/file/d/1dh0Bb3yG_hcaf-yQEwGzBXITKzBkZRRD/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o izmjenama i dopunama pravilnika o radu 2025.",
        link: "https://drive.google.com/file/d/1di68b4Z1znvZj4Dx5JmnfYeiJh_Zl2LE/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o izmjenama i dopunama pravilnika o radu 2024.",
        link: "https://drive.google.com/file/d/19yiBPFZZXFfQPrA1mc76I1GaY3WljkTw/view?usp=sharing",
      },
      {
        naziv: "Pravila školske ishrane",
        link: "https://drive.google.com/file/d/1JMN5WUAJ6vZjjzsApnFhYojlO9LL_dKU/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o poslovnima nastavnika",
        link: "https://drive.google.com/file/d/1CEcYGCjX5ZgLB_-aAcmMyUi7_IARsCkd/view?usp=sharing",
      },
      {
        naziv: "Plan nabavke za 2025.",
        link: "https://drive.google.com/file/d/14QvL_wmRltuzQ_yncQT1l31JCMq1TFGy/view?usp=sharing",
      },
      {
        naziv: "I izmjena plana nabavki za 2025.",
        link: "https://drive.google.com/file/d/12ALV6CUD3DwimD-aNihWZ_5Knl2eY7Jj/view?usp=sharing",
      },
      {
        naziv: "II izmjena plana nabavki za 2025.",
        link: "https://drive.google.com/file/d/1e-CF-pltUG7Fb2uFfx-_w5mXnes1yiwy/view?usp=sharing",
      },
      {
        naziv: "Plan nabavke za 2026.",
        link: "https://drive.google.com/file/d/1n7AYeS5-0IAiUh3-hC1i9a4ovhhm7hNS/view?usp=sharing",
      },
      {
        naziv: "I izmjena plana nabavki za 2026.",
        link: "https://drive.google.com/file/d/1dhZ25BlH2ix257zgeqgwWtJyEwYD_6CB/view?usp=sharing",
      },
    ],
  },

  {
    naziv: "USTAV",
    broj: "1",
    odnosiSeNa: "OSOBLJE I UČENIKE",
    dokumenti: [
      {
        naziv: "Ustav Kantona Sarajevo",
        link: "https://drive.google.com/file/d/1HaCGxs9dtT7dVm7RRSZqavw05OBf4uUA/view",
      },
    ],
  },

  {
    naziv: "ZAKONI",
    broj: "7",
    odnosiSeNa: "OSOBLJE I UČENIKE",
    dokumenti: [
      {
        naziv:
          "Zakon o odgoju i obrazovanju u osnovnoj i srednjoj školi u KS",
        link: "https://drive.google.com/file/d/1XTFeByTbVG15cJivu1IsOEEH06fljE0V/view?usp=sharing",
      },
      {
        naziv: "Okvirni zakon o osnovnom i srednjem obrazovanju u BIH",
        link: "https://drive.google.com/file/d/1ApKlMK_oAEhW3-ycY7oq5DRUHpjuvSQS/view?usp=sharing",
      },
      {
        naziv: "Zakon o radu Federacije BiH",
        link: "https://drive.google.com/file/d/1y95SJ7NuZ5H50t-Uo3kExKwJcymeNSWZ/view",
      },
      {
        naziv: "Zakon o izmjenama Zakona o radu",
        link: "https://drive.google.com/file/d/1a6lkVAaFXn282Pze_8Y-ThndMB5Nzv0V/view?usp=sharing",
      },
      {
        naziv: "Zakon o izmjenama i dopunama Zakona o radu",
        link: "https://drive.google.com/file/d/1rLH0ZbasEqwhVpaEyDb-HGz79Oje9Hpo/view",
      },
      {
        naziv: "Zakon o javnim nabavkama",
        link: "https://drive.google.com/file/d/1dpvoOEDw8TU8eKT0YtJkrY4N3N6f_t7-/view",
      },
      {
        naziv: "Zakon o izmjenama i dopunama Zakona o javnim nabavkama",
        link: "https://drive.google.com/file/d/1DC2JhC3LDWOwFDtPoDUSmW6qp4UUDIEy/view?usp=sharing",
      },
    ],
  },

  {
    naziv: "PRAVILNICI",
    broj: "22",
    odnosiSeNa: "OSOBLJE I UČENIKE",
    dokumenti: [
      {
        naziv: "Pravila školske ishrane",
        link: "https://drive.google.com/file/d/1HxfQVU6TRMU73laRA1T59A5AF_SquWHx/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o prijavljivanju korupcije",
        link: "https://drive.google.com/file/d/1FyrC7yyP6gJlrG1EkFJUs-wM5rpZD-GP/view?ts=6391b5dd",
      },
      {
        naziv:
          "Pedagoški standardi i normativi za odgoj i obrazovanje u osnovnoj i srednjoj školi",
        link: "https://drive.google.com/file/d/1F3Sv3TO8kdrQbarfknOnxS2jL273AEA9/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o vođenju pedagoske dokum i evid",
        link: "https://drive.google.com/file/d/1XR2uBC4EpsMXxUJ2M_kHBypdL0JSTJMp/view",
      },
      {
        naziv:
          "Pravilnik o izmjenama i dopunama pravilnika o vođenju pedagoške dokumentacije i evid u srednj šk",
        link: "https://drive.google.com/file/d/15NKxsRyviEGGISEbsufBsJc1pLghsdQv/view",
      },
      {
        naziv:
          "Pravilnik o praćenju, vrednovanju i ocjenjivanju učenika",
        link: "https://drive.google.com/file/d/1f2569-NNBpOFDw8qsz24I47RzeRRCE77/view",
      },
      {
        naziv:
          "Pravilnik o dopuni Pravilnika o praćenju, vrednovanju i ocjenjivanju učenika osnovnih i srednjih škola u KS",
        link: "https://drive.google.com/file/d/1WRDbJMP_YtvjH2FHSQE3crZ_8zo1ckCe/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o sadržaju i načinu polaganja mature",
        link: "https://drive.google.com/file/d/1k9ndUNoshsothwUr9eWaATqD-HsC9wQ9/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o ishrani učenika u osnovnim i srednjim školama KS",
        link: "https://drive.google.com/file/d/16aApZEbMVZVIus6VObbNf5zg-MeKSkZ7/view",
      },
      {
        naziv: "Pravilnik o organizaciji i realizaciji izleta",
        link: "https://drive.google.com/file/d/1QmXrcup-6wyZCQakpcKOXmFl_u3iMlqg/view",
      },
      {
        naziv: "Pravilnik o inkluzivnom obrazovanju",
        link: "https://drive.google.com/file/d/13ar0MYFilUkfmWp4XKFhyBZb1eGxU0rH/view",
      },
      {
        naziv: "Pravilnik o izmjenama Pravilnika o inkluzivnom obrazovanju",
        link: "https://drive.google.com/file/d/1rldLtslV1Kl7Y2___dCFBwflob3XJBuE/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o provođenju mjera odgojno-obrazovne podrške i stručnog tretmana učenika",
        link: "https://drive.google.com/file/d/1r8ZPLbr_cMirgwNUApE6BF-q9AbdQsyN/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o vođenju evidencije o neprihvatljivim oblicima ponašanja",
        link: "https://drive.google.com/file/d/1rrEtmVYM1gZEM_u6Hl2zUDvGavLe_LDf/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o izmjeni pravilnika o neprihvatljivim oblicima ponašanja",
        link: "https://drive.google.com/file/d/1tsyBK0m1UXrNyEV72M6fHoDfYhhKoytL/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o ocjenjivanju, napredovanju i sticanju stručnih zvanja",
        link: "https://drive.google.com/file/d/1wSau8-x0BMYfV8e3254cBAKBYWotZKqq/view",
      },
      {
        naziv: "Pravilnik sa kriterijima za prijem radnika u radni odnos",
        link: "https://drive.google.com/file/d/1_Utqaw3fv3ZCJdjZQvnOKeaYo3VRx5vG/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik o izmjenama Pravilnika za prijem radnika u radni odnos u osnovnim i srednjim školama u KS",
        link: "https://drive.google.com/file/d/1WupO5G2co1rAlifgFVsP3XCe9qVZeyKa/view?usp=sharing",
      },
      {
        naziv:
          "Pravilnik sa kriterijima za iskazivanje prestanka potrebe za zaposlenicima",
        link: "https://drive.google.com/file/d/1SfvuTQdUTQIUGrsnAp64w16A6O5WT5Un/view",
      },
      {
        naziv:
          "Pravilnik o izboru, nadležnostima i načinu rada školskih odbora",
        link: "https://drive.google.com/file/d/1qFGbtleryR6xE8KgkD_EaPDu0Z0Sh68c/view",
      },
      {
        naziv: "Pravilnik o internoj evaluaciji znanja učenika",
        link: "https://drive.google.com/file/d/1GbXXLsF-6iL7ONvZjwhMAGtAj2ZjROsP/view",
      },
      {
        naziv: "Pravilnik o načinu rada školskih odbora",
        link: "https://drive.google.com/file/d/1T1ybtIUUDpnuk6azTdsQ580TxoJdeReY/view",
      },
      {
        naziv:
          "Pravilnik o izboru, kriterijima za izbor, nadležnostima i radu direktora",
        link: "https://drive.google.com/file/d/1DYLnrjKWqGufk1s9oYaCQ_fFwbDA0OLz/view",
      },
      {
        naziv: "Pravilnik o vlastitim javnim prihodima",
        link: "https://drive.google.com/file/d/116gUYAFulRCRbplfeHU1LMS9eKf44Ou7/view?usp=sharing",
      },
      {
        naziv: "Pravilnik o javnim nabavkama",
        link: "https://drive.google.com/file/d/1bZyyprdyCcD8g1AhWoADreRpnXBqcf0j/view",
      },
      {
        naziv: "Pravilnik o izmjenama i dopunama pravilnika o radu",
        link: "https://drive.google.com/file/d/1T9oezwxcN9RYq01fXCcEAEKPHwGYV4VU/view",
      },
    ],
  },

  {
    naziv: "OSTALO",
    broj: "3",
    odnosiSeNa: "OSOBLJE",
    dokumenti: [
      {
        naziv: "Kolektivni ugovor",
        link: "https://drive.google.com/file/d/1ZaYvO8ZZlmItEt1NjTJdIcfD1cutRgbS/view?usp=sharing",
      },
      {
        naziv: "Ostali propisi",
        link: "https://mon.ks.gov.ba/propisi",
      },
      {
        naziv: "Obrazac za prijavu korupcije",
        link: "https://drive.google.com/file/d/1Fbx7hqvAdCM39Rl2A7imAy7rQlDqchvL/view?usp=sharing",
      },
    ],
  },
];

export default function CardAkti({ color }) {
  const [otvorenMeni, setOtvorenMeni] = React.useState(null);

  const dugmeRefovi = React.useRef(grupe.map(() => React.createRef()));
  const meniRefovi = React.useRef(grupe.map(() => React.createRef()));
  const popperInstance = React.useRef(null);

  const otvoriMeni = (indeks) => {
    if (popperInstance.current) {
      popperInstance.current.destroy();
      popperInstance.current = null;
    }

    popperInstance.current = createPopper(
      dugmeRefovi.current[indeks].current,
      meniRefovi.current[indeks].current,
      {
        placement: "left-start",
        strategy: "fixed",

        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: [
                "right-start",
                "bottom-start",
                "top-start",
              ],
            },
          },

          {
            name: "preventOverflow",
            options: {
              boundary: "viewport",
              padding: 12,
            },
          },
        ],
      }
    );

    setOtvorenMeni(indeks);

    setTimeout(() => {
      if (popperInstance.current) {
        popperInstance.current.update();
      }
    }, 0);
  };

  const zatvoriMeni = () => {
    setOtvorenMeni(null);

    if (popperInstance.current) {
      popperInstance.current.destroy();
      popperInstance.current = null;
    }
  };

  React.useEffect(() => {
    return () => {
      if (popperInstance.current) {
        popperInstance.current.destroy();
      }
    };
  }, []);

  const stilZaglavlja =
    color === "light"
      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700";

  const stilNaziva =
    color === "light" ? "text-blueGray-600" : "text-white";

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light"
            ? "bg-white"
            : "bg-lightBlue-900 text-white")
        }
        style={{ marginBottom: "10%" }}
      >
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    stilZaglavlja
                  }
                >
                  GRUPA
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    stilZaglavlja
                  }
                >
                  BROJ DOKUMENATA
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    stilZaglavlja
                  }
                >
                  ODNOSI SE NA
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    stilZaglavlja
                  }
                ></th>
              </tr>
            </thead>

            <tbody>
              {grupe.map((grupa, indeks) => (
                <tr key={grupa.naziv}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <span className={"ml-3 font-bold " + stilNaziva}>
                      {grupa.naziv}
                    </span>
                  </th>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {grupa.broj}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {grupa.odnosiSeNa}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <a
                      className="text-blueGray-500 py-1 px-3"
                      href="#pablo"
                      ref={dugmeRefovi.current[indeks]}
                      onClick={(e) => {
                        e.preventDefault();

                        if (otvorenMeni === indeks) {
                          zatvoriMeni();
                        } else {
                          otvoriMeni(indeks);
                        }
                      }}
                    >
                      <i className="fas fa-ellipsis-v"></i>
                    </a>

                    <div
                      ref={meniRefovi.current[indeks]}
                      className={
                        (otvorenMeni === indeks ? "block " : "hidden ") +
                        "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                      }
                      style={{
                        maxHeight: "min(70vh, 560px)",
                        overflowY: "auto",
                        overflowX: "hidden",
                        width: "min(420px, calc(100vw - 24px))",
                        maxWidth: "calc(100vw - 24px)",
                        WebkitOverflowScrolling: "touch",
                      }}
                    >
                      {grupa.dokumenti.map((dokument) => (
                        <a
                          key={dokument.link}
                          href={dokument.link}
                          className="text-sm py-2 px-4 font-normal block w-full whitespace-normal break-words bg-transparent text-blueGray-700"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {dokument.naziv}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
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