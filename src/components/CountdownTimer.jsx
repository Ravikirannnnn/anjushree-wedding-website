import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import border from '../assets/down-border.png'
import { useTranslation } from "react-i18next";
import couple from '../assets/ggg.gif'

const CountdownTimer = () => {
  const {t} = useTranslation();


  const calculateTimeLeft = () => {
    const weddingDate = new Date("2026-05-18T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = weddingDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <img loading="lazy" className="border" src={border} alt="" />
      <h2>{t("count_til")}</h2>
      <h3 className="cssanimation lePushReleaseFrom">{t("count_sub")}</h3>
      <p dangerouslySetInnerHTML={{ __html: t("count_para") }} />
                  <div class="tile__img">
         <img class="tile__img" src={couple} alt=""  />
       </div>
      <h1>{t("date")}</h1>
      
      <div className="timer">
        <span>{timeLeft.days}
        <h5>D</h5>        
          </span>
        <span>{timeLeft.hours}
        <h5>H</h5>
          </span>
        <span>{timeLeft.minutes}
        <h5>M</h5>
        </span>
        <span>{timeLeft.seconds}
        <h5>S</h5>
        </span>
      </div>

    </div>
  );
};

export default CountdownTimer;
