const Skills = () => {
  return (
    <article className="skills" id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="skills__wrapper">
        <section className="skills__container">
          <header className="skills__type">
            <div className="skills__logo">
              <img
                src="/image/frontend-icon.svg"
                alt="frontend-skills"
              />
            </div>
          </header>
          <div className="skills__block">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Redux</span>
          </div>
        </section>
        <section className="skills__container">
          <header className="skills__type">
            <div className="skills__logo">
              <img src="/image/backend-icon.svg" alt="backend-skills" />
            </div>
          </header>
          <div className="skills__block">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </section>
        <section className="skills__container">
          <header className="skills__type">
            <div className="skills__logo">
              <img
                src="/image/other-skills-icon.svg"
                alt="other-skills"
              />
            </div>
          </header>
          <div className="skills__block">
            <span>Git</span>
            <span>EJS</span>
            <span>Bootstrap</span>
            <span>VS Code</span>
            <span>Webpack</span>
            <span>Nginx</span>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Skills;
