import siteConfig from "../../config/site.config";

/** Render a simple month grid (Mon-first) with the wedding day highlighted. */
export default function Calendar() {
  const date = new Date(siteConfig.weddingDate);
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed
  const markedDay = date.getDate();

  // Build a 7-col grid starting on Monday
  const firstDay = new Date(year, month, 1);
  // JavaScript: Sunday=0. Convert so Monday=0.
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section className="calendar" aria-label="Wedding day calendar">
      <div className="calendar-top">
        <div className="our-wedding">
          Our wedding
          <br />
          day
        </div>
        <div className="month">{siteConfig.monthLabel}</div>
      </div>
      <div className="calendar-grid" role="grid">
        {cells.map((d, i) => (
          <div
            key={i}
            className={
              "day " + (d == null ? "empty" : d === markedDay ? "marked" : "")
            }
          >
            {d != null && <span>{d}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
