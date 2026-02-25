export default function MissionPage() {
  return (
    <main className="inner-page mission-page">
      <header className="page-header">
        <p className="hero-kicker">Mission</p>
        <h1>Beyond The Stage</h1>
      </header>
      <p className="page-text">
        D&rsquo;Bediance&rsquo;s mission is clear: influence through excellence, represent
        with loyalty, and build culture through disciplined art.
      </p>

      <div className="mission-separator" aria-hidden="true" />

      <section className="mission-pillars" aria-label="Content pillars">
        <h2>What We Stand For</h2>
        <div className="pillars-grid">
          <article className="pillar-card">
            <span className="pillar-icon" aria-hidden="true">&#9733;</span>
            <h3>Youth Empowerment</h3>
            <p>
              Investing in the next generation through mentorship, education, and
              opportunity&mdash;giving young people the tools to lead with purpose.
            </p>
          </article>

          <article className="pillar-card">
            <span className="pillar-icon" aria-hidden="true">&#9830;</span>
            <h3>Cultural Preservation</h3>
            <p>
              Protecting and elevating the traditions, languages, and artistic
              heritage that define Cameroon and its people.
            </p>
          </article>

          <article className="pillar-card">
            <span className="pillar-icon" aria-hidden="true">&#9670;</span>
            <h3>National Integrity</h3>
            <p>
              Representing Cameroon on the global stage with dignity, discipline,
              and unwavering pride in national identity.
            </p>
          </article>

          <article className="pillar-card">
            <span className="pillar-icon" aria-hidden="true">&#9679;</span>
            <h3>Strategic Philanthropy</h3>
            <p>
              Channeling resources where they matter most&mdash;targeted giving that
              creates lasting, measurable change in communities.
            </p>
          </article>
        </div>
      </section>

      <div className="mission-separator" aria-hidden="true" />

      <section className="mission-stats" aria-label="Impact statistics">
        <h2>Impact In Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">150+</span>
            <span className="stat-label">Youth Mentored</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">12</span>
            <span className="stat-label">Projects Funded</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5</span>
            <span className="stat-label">Regions Impacted</span>
          </div>
        </div>
      </section>

      <div className="mission-separator" aria-hidden="true" />

      <section className="mission-closing" aria-label="Closing statement">
        <p>
          &ldquo;Service is not a season. It is a standard.&rdquo;
        </p>
      </section>
    </main>
  );
}
