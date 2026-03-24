import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const sections = {
  About: {
    title: "Hi, I'm Your Name",
    body: "I build clean, modern web experiences with React."
  },
  Projects: {
    title: "Projects",
    body: "Add 2-4 projects here with short descriptions and links."
  },
  Contact: {
    title: "Contact",
    body: "yourname@email.com | GitHub | LinkedIn"
  }
};

export default function App() {
  const [active, setActive] = useState("About");

  return (
    <div className="shell">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <main className="window">
        <div className="topbar">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <p>portfolio.exe</p>
        </div>

        <section className="hero">
          <p className="eyebrow">PORTFOLIO</p>
          <h1>Your Name</h1>
          <p className="subtitle">Frontend developer with a taste for clean UI and motion.</p>

          <div className="nav">
            {Object.keys(sections).map((name) => (
              <button
                key={name}
                className={active === name ? "active" : ""}
                onClick={() => setActive(name)}
              >
                {name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="panel"
            >
              <h2>{sections[active].title}</h2>
              <p>{sections[active].body}</p>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}