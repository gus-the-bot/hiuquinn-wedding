import { useState } from "react";
import siteConfig from "../../config/site.config";

export default function LoveBox() {
  const { loveBox } = siteConfig;
  const [value, setValue] = useState("");
  const [wishes, setWishes] = useState<string[]>([]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    setWishes((prev) => [v, ...prev].slice(0, 10));
    setValue("");
  };

  return (
    <section className="love-box" aria-label="Love box">
      <h3>{loveBox.heading}</h3>
      <p>{loveBox.body}</p>
      <form className="input-row" onSubmit={send}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={loveBox.placeholder}
          aria-label={loveBox.placeholder}
        />
        <button type="submit" className="heart-btn">
          ❤ {loveBox.sendButton}
        </button>
      </form>
      {wishes.length > 0 && (
        <div className="wishes">
          {wishes.map((w, i) => (
            <div key={i} className="chip">
              {w}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
