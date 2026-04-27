import siteConfig from "../../config/site.config";

export default function Cover() {
  const { couple } = siteConfig;
  return (
    <section
      className="cover"
      style={{ backgroundImage: `url(${couple.coverPhoto})` }}
      aria-label="Save the date"
    >
      <div className="save-the-date">Save The Date</div>
      <div className="names">
        <span className="bride">{couple.bride.name}</span>
        <span className="amp">&amp;</span>
        <span className="groom">{couple.groom.name}</span>
      </div>
    </section>
  );
}
