import { useEffect, useRef } from "react";

const skills = [
  {
    name: "HTML / CSS",
    percentage: 95,
  },
  {
    name: "JavaScript",
    percentage: 90,
  },
  {
    name: "Python",
    percentage: 85,
  },
  {
    name: "PHP",
    percentage: 88,
  },
  {
    name: "Git / GitHub",
    percentage: 95,
  },
];

function SkillBar({ skill }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barRef.current.style.width = `${skill.percentage}%`;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(barRef.current);

    return () => observer.disconnect();
  }, [skill.percentage]);

  return (
    <div className="skill">
      <div className="skill-info">
        <span>{skill.name}</span>
        <span>{skill.percentage}%</span>
      </div>

      <div className="skill-bar">
        <div
          ref={barRef}
          className="skill-progress"
          style={{ width: 0 }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title reveal">
          <span>My Skills</span>
          <h2>Technical Expertise</h2>
          <p>
            Technologies and tools I use to create high-quality
            digital products.
          </p>
        </div>

        <div className="skills-grid">
          <div className="reveal">
            {skills.slice(0, 3).map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="reveal">
            {skills.slice(3).map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;