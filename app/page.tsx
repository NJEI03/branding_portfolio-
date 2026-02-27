import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section" aria-label="Hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker">D’Bediance</p>
          <h1>Discipline. Sound. Service.</h1>
          <p className="hero-subtext">From Cameroon to the world.</p>
          <div className="hero-actions">
            <Link href="/music" className="gold-link-button">
              Listen Now
            </Link>
            <Link href="/mission" className="gold-link-button">
              View Mission
            </Link>
          </div>
        </div>
      </section>

      <section className="statement-section" aria-label="Statement">
        <p>Every note carries responsibility. Every lyric carries weight.</p>
      </section>

      <section className="latest-release-section" aria-label="Latest Release">
        <div className="release-card">
          <h2>Latest Release</h2>
          <p>Listen to the newest work across your preferred platform.</p>
          <div className="embed-grid">
            <iframe
              title="Spotify latest release"
              src="https://open.spotify.com/embed/track/38FEsmgIfhWMSr4jNpb0tJ?si=0Q4duPlAR7SkMqpjbCzqAQ"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title="Apple Music latest release"
              src="https://embed.music.apple.com/fr/song/fou-de-toi/1867302758"
              loading="lazy"
              allow="autoplay *; encrypted-media *; fullscreen *"
            />
          </div>
        </div>
      </section>

      <section className="reel-section" aria-label="Visual Reel">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.ibb.co/Cs5fp1CV/image.png"
        >

          <source
            src="https://cdn.coverr.co/videos/coverr-young-man-playing-guitar-1579/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="reel-overlay">
          <h2>New Single</h2>
          <p>Fou de Toi - <span style={{ color: "#D4AF37" }}>2026</span></p>
        </div>
      </section>

      <section className="purpose-section" aria-label="Call to Purpose">
        <h2>Stand For Something.</h2>
        <Link href="/mission" className="solid-button">
          Explore the Mission
        </Link>
      </section>
    </main>
  );
}
