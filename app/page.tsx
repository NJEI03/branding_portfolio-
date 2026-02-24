import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section" aria-label="Hero">
        <div className="hero-overlay" />
        <div className="hero-content">
<<<<<<< codex/create-personal-brand-website-for-musician-th5cp1
          <p className="hero-kicker">D’Bediance</p>
=======
          <p className="hero-kicker">Sound With Purpose</p>
>>>>>>> main
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
              src="https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <iframe
              title="Apple Music latest release"
              src="https://embed.music.apple.com/us/album/blinding-lights/1499378108?i=1499378115"
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
          poster="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-young-man-playing-guitar-1579/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="reel-overlay">
          <h2>Visual Reel</h2>
          <p>Quiet intensity. Deliberate movement. A measured pace.</p>
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
