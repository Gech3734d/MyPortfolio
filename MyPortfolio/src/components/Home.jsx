import { useEffect, useState } from "react";

function Home() {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "Software Developer",
    "Frontend Developer",
    "Creative Coder",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 50 : text.length === currentWord.length ? 1500 : 100);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return (
    <section id="home">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container hero">
        <div className="hero-content reveal">
          <div className="hello">
            Available for freelance work
          </div>

          <h1>
            Hi, I'm{" "}
            <span className="gradient-text">
              Gizachew Dagnew
            </span>
          </h1>

          <h2 className="typing">
            I'm a <span>{text}</span>{" "}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I create beautiful, fast and responsive websites
            that combine modern design, smooth animations and
            excellent user experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Gech3734d"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/gizachew-dagnew-3606b7369"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://t.me/Gech_0588"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="profile-ring">
            <div className="profile-image">
              <span>
                <i className="fa-solid fa-laptop-code"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;