import "./App.css";

const experiences = [
  {
    role: "Research Assistant",
    place: "University / Studio / Company",
    date: "2025 - Present",
    text: "Write 1-2 lines about what you do and what impact you have."
  },
  {
    role: "Intern",
    place: "Company Name",
    date: "2024 - 2025",
    text: "Write a short description of your work, tools, or responsibilities."
  }
];

const publications = [
  {
    title: "Paper Title One",
    journal: "Journal / Conference Name",
    year: "2025",
    link: "https://example.com"
  },
  {
    title: "Paper Title Two",
    journal: "Journal / Conference Name",
    year: "2024",
    link: "https://example.com"
  }
];

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <p className="small-label">About me | Lisa</p>
          <h1>Lisa</h1>
          <p className="intro">
            I’m a designer/developer interested in thoughtful digital experiences,
            research, and visual storytelling.
          </p>

          <nav className="contact-list">
            <a href="mailto:you@example.com">📧 Email</a>
            <a href="https://polimi.it/">🎓 Politecnico di Milano</a>
            <a href="https://linkedin.com/">💼 LinkedIn</a>
            <a href="#">📄 CV</a>
          </nav>
        </div>
      </aside>

      <main className="content">
        <section className="section hero-section" id="about">
          <p className="section-tag">About</p>
          <h2>Hi, I’m Lisa.</h2>
          <p className="lead">
            I create calm, elegant, human-centered web experiences with a focus on
            clarity, motion, and structure.
          </p>
        </section>

        <section className="section" id="experience">
          <p className="section-tag">Experience</p>
          <h2>Experience</h2>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={item.role + item.date}>
                <div className="timeline-date">{item.date}</div>

                <div className="timeline-marker" aria-hidden="true">
                  <span className="timeline-dot"></span>
                </div>

                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="muted">{item.place}</p>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <p className="section-tag">Publications</p>
          <h2>Publications</h2>

          <div className="stack">
            {publications.map((pub) => (
              <article className="card publication-card" key={pub.title}>
                <h3>
                  <a href={pub.link} target="_blank" rel="noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <p className="muted">
                  {pub.journal} - {pub.year}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <p className="section-tag">Contact</p>
          <h2>Let’s work together</h2>
          <p className="lead">
            I’m open to creative collaborations, internships, research, and
            design/development work.
          </p>
          <a className="button-link" href="mailto:you@example.com">
            Say hello
          </a>
        </section>
      </main>
    </div>
  );
}