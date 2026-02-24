const principles = [
  "National service",
  "Loyalty",
  "Strength",
  "Intelligence",
  "Excellence"
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Cameroonian Musician</p>
        <h1>Sound With Purpose.</h1>
        <p className="lead">
          A reserved and disciplined artist shaping influence through rhythm, craft,
          and service.
        </p>
      </section>

      <section className="positioning">
        <p>
          Music is treated as mission. Every composition is structured, deliberate,
          and built to endure.
        </p>
        <blockquote>
          "Service does not ask for attention. It asks for consistency."
        </blockquote>
      </section>

      <section className="grid" aria-label="Core identity principles">
        {principles.map((principle) => (
          <article key={principle} className="card">
            <h2>{principle}</h2>
            <p>
              Expressed through calm execution, strategic thinking, and quiet
              authority.
            </p>
          </article>
        ))}
      </section>

      <footer>
        <span>Cameroon</span>
        <span className="divider" aria-hidden="true" />
        <span>Intentional Artistry</span>
      </footer>
    </main>
  );
}
