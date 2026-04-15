import "./CoupleSection.css";
import Backround from '../assets/blue-border.png'
import Male from '../assets/Anjusree/Groom.jpeg'
import Female from '../assets/Anjusree/Bride.jpeg'
import fb from '../assets/Fb.png'
import insta from '../assets/Insta.png'

import { useTranslation } from "react-i18next";

const CoupleSection = () => {
  const {t} = useTranslation();

  return (
    <section className="couple">
      <h2>{t("couple_title")}</h2>
      <span dangerouslySetInnerHTML={{ __html: t("couple_sub") }} />
      <div className="couple-card">
        <div className="groom-info">
          <div className="profile-container">
          <img loading="lazy" src={Male} alt="Groom" />
          <img className="lotus" src={Backround} alt="" />
          </div>
          <span>{t("chi_kum")}</span> 
          <h3>{t("male")} </h3>
          <p>B.E</p>
          <span>{t("sone_of")}</span>
          <p>{t("grrom_parents")}</p>
          <p>{t("grooms_village")}</p>
          {/* <img loading="lazy" className="social" src={fb} alt="facebook" /> */}
          {/* <img loading="lazy" className="social" src={insta} alt="instagram" /> */}
        </div>
        <div className="groom-info">
        <div className="profile-container">
        <img loading="lazy" src={Female} alt="Groom" />
        <img loading="lazy" className="lotus" src={Backround} alt="" />
        </div>
        <span>{t("chi_sow")}</span> 
          <h3>{t("female")} </h3>
          <p>B.Com</p>
          <span>{t("dau_od")}</span>
          <p>{t("bride_parents")}</p>
          <p>{t("bride_village")}</p>
          {/* <img loading="lazy" className="social" src={fb} alt="facebook" /> */}
          {/* <img loading="lazy" className="social" src={insta} alt="instagram" /> */}

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
