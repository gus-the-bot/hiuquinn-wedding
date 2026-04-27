import siteConfig from "../../config/site.config";

export default function LoveStory() {
  const { loveStory } = siteConfig;
  return (
    <section className="love-story" aria-label="Our love story">
      <h2 className="title">{loveStory.title}</h2>
      <div className="note">
        <p>{loveStory.paragraph}</p>
        {loveStory.closing.map((line, i) => (
          <p key={i} className="closing">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
