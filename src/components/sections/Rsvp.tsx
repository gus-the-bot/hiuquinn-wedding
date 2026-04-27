import { useState } from "react";
import siteConfig from "../../config/site.config";

export default function Rsvp() {
  const { rsvp } = siteConfig;
  const [name, setName] = useState("");
  const [attend, setAttend] = useState<"yes" | "no">("yes");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    const payload = { name: name.trim(), attend, at: new Date().toISOString() };
    try {
      if (rsvp.endpoint) {
        await fetch(rsvp.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        console.log("[RSVP]", payload);
      }
      setSubmitted(true);
    } catch {
      // still mark submitted so the user gets feedback locally
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rsvp" aria-label="RSVP form">
      <h3>{rsvp.heading}</h3>
      <form onSubmit={submit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={rsvp.namePlaceholder}
          aria-label={rsvp.namePlaceholder}
          disabled={loading || submitted}
        />
        <div className="question">{rsvp.question}</div>
        <div className="choices">
          <label>
            <input
              type="radio"
              name="attend"
              checked={attend === "yes"}
              onChange={() => setAttend("yes")}
              disabled={loading || submitted}
            />
            {rsvp.yes}
          </label>
          <label>
            <input
              type="radio"
              name="attend"
              checked={attend === "no"}
              onChange={() => setAttend("no")}
              disabled={loading || submitted}
            />
            {rsvp.no}
          </label>
        </div>
        <button
          type="submit"
          className="submit"
          disabled={loading || submitted || !name.trim()}
        >
          {submitted ? "Cảm ơn bạn!" : rsvp.submit}
        </button>
        {submitted && (
          <div className="thanks">Xác nhận của bạn đã được ghi nhận.</div>
        )}
      </form>
    </section>
  );
}
