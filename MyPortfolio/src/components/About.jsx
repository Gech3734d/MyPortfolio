function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title reveal">
          <span>About Me</span>
          <h2>Turning Ideas Into Reality</h2>
          <p>
            A little about who I am and what I love doing.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image reveal">
            <div className="emoji">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
          </div>

          <div className="about-content reveal">
            <h3>Creative Developer and Problem Solver</h3>

            <p>
              I'm a passionate software developer who enjoys
              building modern digital experiences.
            </p>

            <p>
              My focus is creating websites that are not only
              visually impressive but also accessible,
              responsive and easy to use.
            </p>

            <div className="info-grid">
              <div className="info-box">
                <small>Name</small>
                <strong>Gizachew Dagnew</strong>
              </div>

              <div className="info-box">
                <small>Projects</small>
                <strong>2+ Completed</strong>
              </div>

              <div className="info-box">
                <small>Location</small>
                <strong>Addis Ababa</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;