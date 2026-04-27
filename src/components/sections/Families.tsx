import siteConfig from "../../config/site.config";

export default function Families() {
  const { left, right } = siteConfig.families;
  return (
    <section className="families" aria-label="Families">
      <div className="families-grid">
        <div>
          <h3>{left.title}</h3>
          {left.lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>
        <div>
          <h3>{right.title}</h3>
          {right.lines.map((l, i) => (
            <p key={i}>{l}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
