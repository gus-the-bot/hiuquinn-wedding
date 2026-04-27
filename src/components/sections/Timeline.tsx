import siteConfig from "../../config/site.config";

export default function Timeline() {
  return (
    <section className="timeline" aria-label="Wedding timeline">
      <h2>Timeline</h2>
      <div className="timeline-list">
        {siteConfig.timeline.map((t, i) => (
          <div className="timeline-item" key={i}>
            <div className="bullet" />
            <div className="text">
              <span className="time">{t.time}</span>
              <span className="label">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="trust-note">Trân trọng!</div>
    </section>
  );
}
