import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A modern online store with responsive product pages and smooth interactions.",
    icon: "fa-solid fa-cart-shopping",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather App",
    description:
      "Bole-Ethiopia Weather Demonstration App.",
    icon: "fa-solid fa-cloud",
    tags: ["HTML", "CSS", "JS"],
  },
];

function ProjectCard({ project }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setStyle({
      transform: `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "",
    });
  };

  return (
    <article
      className="project-card reveal"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">
        <i className={project.icon}></i>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-title reveal">
          <span>My Portfolio</span>
          <h2>Featured Projects</h2>
          <p>
            Some of my recent work and creative experiments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;