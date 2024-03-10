const Project = () => {
  return (
    <article className="project" id="project">
      <h2 className="section-heading">Projects</h2>
      <section className="project__container">
        <div className="project__item">
          <section className="project__desc">
            <h3 className="desc-heading">Yelp Camp</h3>
            <p className="desc-content">
              A <em>CRUD</em> app made for adding campgrounds and give a review
              on them.
            </p>
            <div className="project__stacks">
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>EJS</span>
              <span>Bootstrap</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Mapbox SDK</span>
            </div>
          </section>
          <aside className="project__img"></aside>
        </div>
        <div className="project__seperator"></div>
        <div className="project__item">
          <section className="project__desc">
            <h3 className="desc-heading">React Meals</h3>
            <p className="desc-content">
              A <em>React</em> application made for adding meals into cart and
              ordering.
            </p>
            <div className="project__stacks">
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>CSS</span>
              <span>Firebase</span>
            </div>
          </section>
          <aside className="project__img"></aside>
        </div>
      </section>
    </article>
  );
};

export default Project;
