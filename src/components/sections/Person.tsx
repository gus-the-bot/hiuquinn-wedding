type Props = {
  label: string;
  name: string;
  birthday?: string;
  photo: string;
  align: "left" | "right";
};

export default function Person({ label, name, birthday, photo, align }: Props) {
  return (
    <section className={`person-section ${align}`}>
      <div
        className="photo-card"
        style={{ backgroundImage: `url(${photo})` }}
        aria-label={`${label} ${name}`}
      />
      <div className="text-block">
        <div className="label">{label}</div>
        <div className="name">{name}</div>
        {birthday && <div className="birthday">{birthday}</div>}
      </div>
    </section>
  );
}
