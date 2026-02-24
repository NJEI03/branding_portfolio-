export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="page-header">
        <p className="hero-kicker">About</p>
        <h1>Calm Strength. Enduring Purpose.</h1>
      </header>

      <section className="about-layout">
        <div className="portrait-panel" aria-hidden="true" />

        <article className="story-panel">
          <p>
            Raised in Cameroon, he learned early that resilience is not performative.
            It is practiced quietly, day after day.
          </p>
          <p>
            His discipline shaped his craft. His craft shaped his mission. Music
            became a form of responsibility—measured, intentional, and precise.
          </p>
          <p>
            Some serve loudly. Others serve quietly. His work belongs to the
            second path.
          </p>
        </article>
      </section>

      <section className="timeline" aria-label="Career timeline">
        <h2>Timeline</h2>
        <ol>
          <li>
            <span>Early Life</span>
            <p>Foundations built through discipline, family values, and focus.</p>
          </li>
          <li>
            <span>First Project</span>
            <p>First independent body of work established his artistic direction.</p>
          </li>
          <li>
            <span>National Recognition</span>
            <p>Respected presence across Cameroon for consistency and depth.</p>
          </li>
          <li>
            <span>International Growth</span>
            <p>Audience expanded globally while preserving identity and standards.</p>
          </li>
        </ol>
      </section>
    </main>
  );
}
