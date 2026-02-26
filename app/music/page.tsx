import Image from "next/image";

export default function MusicPage() {
  const albums = [
    {
      name: "Velvet Ember Protocol",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
      href: "#streaming-links"
    },
    {
      name: "Palmwine After Midnight",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
      href: "#streaming-links"
    },
    {
      name: "Bronze Bloom Frequency",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
      href: "#streaming-links"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  ];

  return (
    <main className="inner-page">
      <header className="page-header">
        <p className="hero-kicker">Music</p>
        <h1>Rhythm As Discipline</h1>
      </header>

      <p className="page-text">
        D’Bediance is a prolific Afrobeats singer, songwriter, actor, and
        performer from Cameroon. Welcome to the world of hype and
        entertainment.
      </p>

      <section className="album-section" aria-label="Album concepts">
        <h2>Album Concepts</h2>
        <div className="album-grid">
          {albums.map((album) => (
            <a key={album.name} className="album-tile" href={album.href}>
              <Image
                src={album.image}
                alt={`${album.name} album cover`}
                className="album-image"
                fill
                unoptimized
                sizes="(max-width: 860px) 100vw, 33vw"
              />
              <div className="album-overlay" aria-hidden="true">
                <span className="play-icon">▶</span>
              </div>
              <div className="album-meta">
                <p>{album.name}</p>
                <span>{album.year}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="streaming-links" className="music-links" aria-label="Streaming and social links">
        <h2>Streaming & Latest Release Links</h2>
        <div className="music-link-list">
          <a href="https://open.spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify" title="Spotify">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm4.8 15.1a.8.8 0 0 1-1.1.3c-3-1.8-6.8-2.1-11.2-.9a.8.8 0 1 1-.4-1.6c4.9-1.3 9.1-1 12.5 1 .4.2.5.8.2 1.2Zm1.6-2.9a1 1 0 0 1-1.3.4c-3.5-2.1-8.8-2.7-12.9-1.2a1 1 0 1 1-.7-1.9c4.8-1.8 10.7-1.2 14.6 1.3.5.3.6 1 .3 1.4Zm.2-3a1.2 1.2 0 0 1-1.6.4C13 8.8 6.9 8.6 3.3 9.8a1.2 1.2 0 1 1-.8-2.3c4.1-1.4 10.9-1.1 15.6 1.6.6.3.8 1 .5 1.6Z" />
            </svg>
            <span className="sr-only">Spotify</span>
          </a>
          <a href="https://music.apple.com" target="_blank" rel="noreferrer" aria-label="Apple Music" title="Apple Music">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.5-3-1.6-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.9.9-3.6 2.2-1.6 2.8-.4 7 1.1 9.2.8 1.1 1.7 2.3 2.9 2.2 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.3-2.6 1.3-2.7 0 0-2.3-.9-2.3-3.9ZM14.7 6.6c.7-.9 1.1-2.1 1-3.3-1 .1-2.2.7-2.9 1.6-.6.7-1.2 2-1 3.2 1.1.1 2.2-.5 2.9-1.5Z" />
            </svg>
            <span className="sr-only">Apple Music</span>
          </a>
          <a href="https://www.facebook.com/share/1AmKgNFCq7/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13.4 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2h-2.5V14h2.5v7h3.1Z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://youtube.com/@dbediance?si=EZ0VpUA2eZZzqZCm" target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21.8 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-7.8-.5-7.8-.5s-6 0-7.8.5a2.8 2.8 0 0 0-2 2A29.9 29.9 0 0 0 1.7 12c0 1.3.2 2.6.5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7.8.5 7.8.5s6 0 7.8-.5a2.8 2.8 0 0 0 2-2c.3-1.2.5-2.5.5-3.8 0-1.3-.2-2.6-.5-3.8ZM10 15.1V8.9l5.4 3.1-5.4 3.1Z" />
            </svg>
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://www.instagram.com/_dbediance?igsh=YnRtZzQ4bjF4Z3Ji" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              <path d="M17.4 2.8H6.6A3.8 3.8 0 0 0 2.8 6.6v10.8a3.8 3.8 0 0 0 3.8 3.8h10.8a3.8 3.8 0 0 0 3.8-3.8V6.6a3.8 3.8 0 0 0-3.8-3.8Zm2 14.6c0 1.1-.9 2-2 2H6.6c-1.1 0-2-.9-2-2V6.6c0-1.1.9-2 2-2h10.8c1.1 0 2 .9 2 2v10.8Z" />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@dbediance.official?_r=1&_t=ZS-93OE8yQ9AGe" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14.7 3h2.7c.2 1.7 1.4 3.1 3 3.6v2.8a7.1 7.1 0 0 1-3-.7v5.8a6.2 6.2 0 1 1-6.2-6.2c.4 0 .8 0 1.2.1v2.8a3.4 3.4 0 1 0 2.3 3.3V3Z" />
            </svg>
            <span className="sr-only">TikTok</span>
          </a>
        </div>
      </section>

      <section className="video-section" aria-label="Music videos">
        <h2>Music Videos</h2>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/moW06KHI6qY"
            title="Biggest hit on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Music video one"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/9bZkp7q19f0"
            title="Music video two"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="gallery-section" aria-label="Posters and event gallery">
        <h2>Posters, Performances & Events</h2>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={image} className="gallery-item">
              <Image
                src={image}
                alt={`Performance moment ${index + 1}`}
                className="gallery-image"
                fill
                unoptimized
                sizes="(max-width: 860px) 100vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
