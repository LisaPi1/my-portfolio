import "./App.css";

const experiences = [
  {
    role: "PhD Candidate",
    place: "Politecnico di Milano | Milan, Italy",
    date: "Dec 2023 - Dec 2026",
    text: ""
  },
  {
    role: "Teaching Assistant - Fundamentals of Control Systems",
    place: "Politecnico di Milano | Milan, Italy",
    date: "Oct 2024 - Present",
    text: ""
  },
  {
    role: "Visiting Ph.D. Intern",
    place: "Italian National Research Council | Turin, Italy",
    date: "Oct 2025 - Oct 2026",
    text: ""
  },
  {
    role: "Visiting Ph.D. Researcher",
    place: "Eindhoven University of Technology | Eindhoven, The Netherlands",
    date: "Jan 2025 - Jul 2025",
    text: ""
  },
];

const publications = [
    {
    title: "Optimal policy design for innovation diffusion: Shaping today’s incentives for transforming the future",
    authors: "L. Piccinin, V. Breschi, C. Ravazzi, F. Dabbene, and M. Tanelli",
    journal: "Control Engineering Practice",
    year: "2026",
    link: "https://www.sciencedirect.com/science/article/pii/S096706612600198X"
  },
  {
    title: "Innovation Diffusion Dynamics Toward Long-Term Behavioral Shifts",
    authors: "L. Piccinin, V. Breschi, C. Ravazzi, F. Dabbene, and M. Tanelli",
    journal: "IEEE Control Systems Letters, presented at the 2025 IEEE Conference on Decision and Control (CDC)",
    year: "2025",
    link: "https://ieeexplore.ieee.org/abstract/document/11029080"
  },
  {
    title: "Learning-based estimation of operators’ psycho-physiological state",
    authors: "L. Piccinin, J. Leoni, E. Villa, S. Milani, V. Breschi, M. Tanelli, M. Colavincenzo, and S. Martorana",
    journal: "Expert Systems with Applications",
    year: "2025",
    link: "https://www.sciencedirect.com/science/article/pii/S0957417425007195"
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <nav className="topbar-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="layout">
          {/*
        <aside className="sidebar">
          <div className="sidebar-inner">
            <p className="small-label">About me | Lisa</p>
            <h1>Lisa</h1>
            <p className="intro">
              PhD Candidate 
            </p>

            <nav className="contact-list">
              <a href="mailto:you@example.com">📧 Email</a>
              <a href="https://polimi.it/" target="_blank" rel="noreferrer">
                🎓 Politecnico di Milano
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                💼 LinkedIn
              </a>
              <a href="#">📄 CV</a>
            </nav>
          </div>
        </aside> 
        */}

        <aside className="sidebar">
          <div className="sidebar-inner">
            <p className="small-label">About me</p>

            <h1>Lisa Piccinin</h1>

            <p className="intro">
              PhD Candidate in Systems and Control
            </p>
            <p className="location">📍 Milan, Italy</p>
            {/* <div className="affiliation">
              <a
                href="https://www.polimi.it/"
                target="_blank"
                rel="noreferrer"
                className="affiliation-link"
              >
                🔗 Politecnico di Milano
              </a>
            </div>
            <nav className="contact-list">
              <a href="mailto:lisa.piccinin@polimi.it">✉️ Email</a>
              <a href="https://www.linkedin.com/in/lisapiccinin" target="_blank" rel="noreferrer">
            💼 LinkedIn
              </a>
            </nav> */}
            <nav className="contact-list">
              <a href="https://phd-inf.polimi.it/phd-current-students/piccinin-lisa-1249081d/" target="_blank" rel="noreferrer">
                🔗 PoliMi Profile
              </a>
              <a href="mailto:lisa.piccinin@polimi.it">
              ✉️ Email: lisa.piccinin@polimi.it
              </a>
              <a href="https://www.linkedin.com/in/lisapiccinin" target="_blank" rel="noreferrer">
                💼 LinkedIn
              </a>
            </nav>
          </div>
        </aside>

        <main className="content">
          <section className="section hero-section" id="about">
            <p className="section-tag">About</p>
            <h2>Hi, I'm Lisa.</h2>
            <p className="lead">
             Ph.D. candidate in Systems and Control at Politecnico di Milano, Italy. 
             My research interests include the study of networked systems with applications to social networks and collective decision-making processes.
            </p>
          </section>
              {/* I received a B.Sc. degree in Automation Engineering in 2021 and a M.Sc. degree in Automation and Control Engineering in 2023 from Politecnico di Milano. */}

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

                  <p className="publication-authors">{pub.authors}</p>

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
              
            </p>
            <a className="button-link" href="mailto:lisa.piccinin@polimi.it">
              Contact me!
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}