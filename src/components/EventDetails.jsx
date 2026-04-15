import "./EventDetails.css";
import Wed1 from '../assets/reception.jpg'
import Wed2 from '../assets/muhurtha.jpg'
import ring from '../assets/wedding-ring.png'
import table from '../assets/dinner-table.png'
import map from '../assets/map.png'
import border from "../assets/down-border.png"
import { useTranslation } from "react-i18next";

const EventDetails = () => {
  const {t} = useTranslation();

  return (
    <>
    <section className="events">
      <div className="event-card" style={{backgroundImage:`url(${Wed1})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={table} alt="" />
        <h3>{t("b1_tit")}</h3>
        <p>{t("b1_date")}</p>
        <p>{t("b1_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/Sri+Tirumala+Kalyana+Mantapa/@14.2187414,76.3639498,15z/data=!4m6!3m5!1s0x3bba752716b20417:0x1b3e5da89175012e!8m2!3d14.2187369!4d76.3742495!16s%2Fg%2F11gy9ygzxs?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
      <div className="event-card"  style={{backgroundImage:`url(${Wed2})`}}>
      <div className="overlay-ev"></div>
      <img loading="lazy" src={ring} alt="" />
      <h3>{t("b2_tit")}</h3>
        <p>{t("b2_date")}</p>
        <p>{t("b2_time")}</p>
        <h5>{t("kalyan")}</h5>
        <p>{t("address")}</p>
        <button onClick={()=>window.open("https://www.google.com/maps/place/Sri+Tirumala+Kalyana+Mantapa/@14.2187414,76.3639498,15z/data=!4m6!3m5!1s0x3bba752716b20417:0x1b3e5da89175012e!8m2!3d14.2187369!4d76.3742495!16s%2Fg%2F11gy9ygzxs?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D")}>
          <img className="map" src={map} alt="map" />
          Open Map</button>
      </div>
    </section>
      <div>
                  <img className="border-map-ev" src={border} alt="" />
          </div>
          </>
  );
};

export default EventDetails;
