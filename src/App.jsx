import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

const sections = {
  About: {
    title: "Hi, I'm Lisa",
    body: "I build clean, modern web experiences with React and a focus on design."
  },
  Projects: {
    title: "Projects",
    body: "Add your best projects here with short descriptions and links."
  },
  Contact: {
    title: "Contact",
    body: "Add your email, GitHub, LinkedIn, or Instagram here."
  }
};

export default function App() {
  const [active, setActive] = useState("About");
  const [isClosing, setIsClosing] = useState(false);

  const handleSwitch = (nextSection) => {
    if (nextSection === active || isClosing) return;

    setIsClosing(true);

    setTimeout(() => {
      setActive(nextSection);
      setIsClosing(false);
    }, 400);
  };

  return (
    <div className="shell">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <motion.main
        className="window"
        animate={
          isClosing
            ? { opacity: 0, scale: 0.92, y: 30 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{ duration: 0.4 }}
      >
        <div className="topbar">
        <div className="dots">
          <span className="dot close-dot" onClick={() => setIsClosing(true)} />
          <span className="dot" />
          <span className="dot" />
        </div>
          <p>portfolio.exe</p>
        </div>

        <section className="hero">
          <p className="eyebrow">PORTFOLIO</p>
          <h1>Lisa</h1>
          <p className="subtitle">
            Frontend developer with a taste for clean UI and motion.
          </p>

          <div className="nav">
            {Object.keys(sections).map((name) => (
              <button
                key={name}
                className={active === name ? "active" : ""}
                onClick={() => handleSwitch(name)}
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
      </motion.main>
    </div>
  );
}