import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Loader + saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLightMode(true);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);

      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Theme
  useEffect(() => {
    document.body.classList.toggle("light", lightMode);

    localStorage.setItem(
      "portfolio-theme",
      lightMode ? "light" : "dark"
    );
  }, [lightMode]);

  // Scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <>
      {loading && (
        <div id="loader">
          <div className="loader-circle"></div>
        </div>
      )}

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        lightMode={lightMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>

      <Footer />

      {showTop && (
        <button
          id="scrollTop"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;