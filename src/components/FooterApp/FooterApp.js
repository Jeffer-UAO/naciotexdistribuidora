import { WhatsApp } from "../WhatsApp";
import styles from "./FooterApp.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { BtnLink } from "../Common";

export function FooterApp() {
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={20} />} />
        <BtnLink
          link={"/featured"}
          title={"EXCL"}
          logo={<MdOutlineCategory size={20} />}
        />

        <WhatsApp
          phoneNumber="+573106556056"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />
        <BtnLink
          link={"/ofert"}
          title={"OFER"}
          logo={<MdOutlineLocalOffer size={20} />}
        />
        <BtnLink
          link={
            "https://naciotexdistribuidora.catalogointeractivo.com.co/admin-dashboard/"
          }
          title={"ADMI"}
          logo={<CiUser size={20} />}
        />
      </div>
    </div>
  );
}
