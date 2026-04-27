import siteConfig from "../../config/site.config";

export default function InviteHero() {
  const { couple } = siteConfig;
  return (
    <section className="invite-hero">
      <div className="bride">{couple.bride.name}</div>
      <div className="amp">&amp;</div>
      <div className="groom">{couple.groom.name}</div>
    </section>
  );
}
