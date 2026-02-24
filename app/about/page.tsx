export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="page-header">
        <p className="hero-kicker">About</p>
        <h1>D’Bediance — Calm Strength. Enduring Purpose.</h1>
      </header>

      <section className="about-layout" aria-label="Artist story">
        <div className="portrait-panel" role="img" aria-label="Black and white portrait" />

        <article className="story-panel">
          <p className="story-lead">
            Raised in Cameroon, he was shaped by resilience, restraint, and respect
            for responsibility.
          </p>
          <p>
            Discipline became his daily standard. Over time, that same discipline
            defined his sound: intentional, precise, and built to endure.
          </p>
          <p>
            Music is not treated as noise. It is treated as duty—crafted with care,
            carried with purpose.
          </p>
          <blockquote>
            “Some serve loudly. Others serve quietly.”
          </blockquote>
        </article>
      </section>

      <section className="timeline" aria-label="Career timeline">
        <h2>Timeline</h2>
        <ol>
          <li>
            <span>Early Life</span>
            <p>
              Foundations formed in Cameroon through family values, discipline, and
              consistency.
            </p>
          </li>
          <li>
            <span>First Project</span>
            <p>
              First official release established a clear artistic direction and
              principled voice.
            </p>
          </li>
          <li>
            <span>National Recognition</span>
            <p>
              Earned respect across Cameroon for thoughtful lyrics and measured
              execution.
            </p>
          </li>
          <li>
            <span>International Growth</span>
            <p>
              Expanded to wider audiences while preserving identity, standards, and
              mission.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
