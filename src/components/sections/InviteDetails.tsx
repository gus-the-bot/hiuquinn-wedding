import siteConfig from "../../config/site.config";

export default function InviteDetails() {
  const { invitation, monthLabel, yearLabel, lunarNote, weddingDate, couple } =
    siteConfig;
  const day = new Date(weddingDate).getDate();
  return (
    <section className="invite-details" aria-label="Wedding details">
      <p className="intro">{invitation.intro}</p>
      <div className="date-row">
        <div className="month">{monthLabel}</div>
        <div className="big-day">{day}</div>
        <div className="year">{yearLabel}</div>
      </div>
      {lunarNote && <div className="lunar">{lunarNote}</div>}
      <div className="venue">{invitation.venueName}</div>
      <div className="address">Địa chỉ: {invitation.venueAddress}</div>
      <div
        className="hero-photo"
        style={{ backgroundImage: `url(${couple.heroPhoto})` }}
      />
    </section>
  );
}
