export default function PressPage() {
  return (
    <main className="inner-page">
      <header className="page-header">
        <p className="hero-kicker">Press</p>
        <h1>Media & Features</h1>
      </header>

      <section className="press-grid" aria-label="Press information">
        <article className="press-card">
          <h2>Press mentions</h2>
          <ul>
            <li>
              No official press mentions are published yet; verified coverage will
              be listed here as soon as it is live.
            </li>
          </ul>
        </article>

        <article className="press-card">
          <h2>Interviews</h2>
          <ul>
            <li>
              Interview slots are currently in preparation. Confirmed recordings
              and publication links will be added in this section.
            </li>
          </ul>
        </article>

        <article className="press-card">
          <h2>Awards</h2>
          <ul>
            <li>
              No awards have been publicly announced at this time. Future
              recognitions and nominations will be archived here.
            </li>
          </ul>
        </article>

        <article className="press-card">
          <h2>Public statements</h2>
          <ul>
            <li>
              There is no official press release at the moment. Any verified
              statement from the team will be posted directly in this section.
            </li>
          </ul>
        </article>
      </section>

      <section className="press-quote" aria-label="Press quote section">
        <p>
          “No official press release has been issued yet — when it is ready, it
          will be shared here with full context and authenticity.”
        </p>
      </section>
    </main>
  );
}
