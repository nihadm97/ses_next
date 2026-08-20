import Image from "next/image";

import erasmus from "./erasmus.png";
import etwinning from "./etwi1.webp";

const linkClassName =
  "hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold";

export default function NavbarSocialLinks() {
  return (
    <>
      <a
        className={linkClassName}
        href="https://www.facebook.com/Srednja-ekonomska-%C5%A1kola-Sarajevo-847192995623370/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook profil škole"
      >
        <i
          className="px-2 text-blueGray-400 fab fa-facebook text-lg leading-lg"
          aria-hidden="true"
        />
      </a>
      <a
        className={linkClassName}
        href="https://www.instagram.com/srednja_ekonomska_skola/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram profil škole"
      >
        <i
          className="px-2 text-blueGray-400 fab fa-instagram text-lg leading-lg"
          aria-hidden="true"
        />
      </a>
      <a
        className={linkClassName}
        href="https://school-education.ec.europa.eu/en/networking/schools-organisations/srednja-ekonomska-skola-sarajevo"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={etwinning}
          alt="European School Education Platform"
          width={40}
          height={40}
          style={{ width: 40, height: 40 }}
        />
      </a>
      <a
        className={linkClassName}
        href="https://erasmus-plus.ec.europa.eu/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={erasmus}
          alt="Erasmus+"
          width={40}
          height={40}
          style={{ width: 40, height: 40 }}
        />
      </a>
    </>
  );
}
