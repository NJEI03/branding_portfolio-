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
        A curated body of sound with artistic album concepts, visual storytelling,
        and live moments from standout stages and cultural events.
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
          <a href="https://open.spotify.com" target="_blank" rel="noreferrer">
            Spotify
          </a>
          <a href="https://music.apple.com" target="_blank" rel="noreferrer">
            Apple Music
          </a>
          <a href="https://audiomack.com" target="_blank" rel="noreferrer">
            Audiomack
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram Updates
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            TikTok Snippets
          </a>
        </div>
      </section>

      <section className="lyrics-panel" aria-label="Lyrics excerpt">
        <h2>Lyrics</h2>
        <p>
          “From red earth roads to city midnight lights, every chorus carries
          home — steady drums, clear voice, and a future carved in rhythm.”
        </p>
      </section>

      <section className="video-section" aria-label="Music videos">
        <h2>Music Videos</h2>
        <div className="video-grid">
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
