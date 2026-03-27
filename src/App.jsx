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

const projects = [
  {
    name: "Project One",
    text: "Short description of the project and what makes it interesting."
  },
  {
    name: "Project Two",
    text: "Short description of the project and your role in it."
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
            <a href="mailto:you@example.com">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">CV</a>
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

          <div className="stack">
            {experiences.map((item) => (
              <article className="card" key={item.role + item.date}>
                <div className="card-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.place}</p>
                  </div>
                  <p className="date">{item.date}</p>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-tag">Projects</p>
          <h2>Selected Projects</h2>

          <div className="stack">
            {projects.map((project) => (
              <article className="card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <p className="section-tag">Contact</p>
          <h2>Let’s work together</h2>
          <p className="lead">
            I’m open to creative collaborations, internships, research, and design/development work.
          </p>
          <a className="button-link" href="mailto:you@example.com">
            Say hello
          </a>
        </section>
      </main>
    </div>
  );
}