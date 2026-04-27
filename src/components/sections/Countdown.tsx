import { useEffect, useMemo, useState } from "react";
import siteConfig from "../../config/site.config";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function Countdown() {
  const target = useMemo(() => new Date(siteConfig.weddingDate), []);
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="countdown" aria-label="Countdown">
      <h2>Countdown</h2>
      <div className="boxes">
        <div className="box">
          <span className="num">{t.days}</span>
          <span className="unit">ngày</span>
        </div>
        <div className="box">
          <span className="num">{t.hours}</span>
          <span className="unit">giờ</span>
        </div>
        <div className="box">
          <span className="num">{t.minutes}</span>
          <span className="unit">phút</span>
        </div>
        <div className="box">
          <span className="num">{t.seconds}</span>
          <span className="unit">giây</span>
        </div>
      </div>
      <p>{siteConfig.invitation.intro}</p>
    </section>
  );
}
