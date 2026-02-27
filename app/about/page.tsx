import "../globals.css"
const films = [
  {
    title: "Rage Pass",
    link: "https://www.youtube.com/watch?v=qYk8WZ4W"
  },
  {
    title: "Mother Hen",
    link: "https://www.youtube.com/watch?v=qYk8WZ4W"
  },
  {
    title: "Reckoning",
    link: "https://www.youtube.com/watch?v=qYk8WZ4W"
  },
];


const filmStyles = "font-medium italic underline underline-offset-4 decoration-amber-500/40 text-amber-600 hover:text-amber-500 transition-colors";


export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <header className="page-header">
        <p className="hero-kicker">About</p>
        <h1>About D’Bediance </h1>
      </header>

      <section className="about-layout" aria-label="Artist story">
        <div className="portrait-panel" role="img" aria-label="Black and white portrait" />

        <article className="story-panel">
          <p className="story-lead">
            D'Bediance is a Cameroonian musician, actor and scriptwriter with a strong focus on dramatic
            stroytelling.
          </p>
          <p>
            Known for his emotionally grounded performances, he has appeared in Cameroonian films such as <a href={films[0].link} style={{ color: "#D4AF37", fontStyle: "italic", fontSize: "medium" }}>{films[0].title}</a>
            ,<a href={films[1].link} style={{ color: "#D4AF37", fontStyle: "italic", fontSize: "medium" }}>{films[1].title}</a>, and <a href={films[2].link} style={{ color: "#D4AF37", fontStyle: "italic", fontSize: "medium" }}>{films[2].title}</a>, where his ability to embody complex characters has earned him growing recognition within the local film industry.
          </p>
          <p>
            Driven by passion for authentic African narratives, D'Bediance approaches acting as both an art and responsibility.
          </p>
          <p>
            Beyong acting, D'Bediance is also a musician and scriptwriter. As a musician, he uses sound and rythm as another form of storytelling, while his work as a scriptwriter refelcts his interest in meaningful narratives that
            challenge, inspire and reflect real-life experiences.
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
