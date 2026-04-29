import ecommerceLive from "../assets/ecommerce-live.png";
import eventManagementLive from "../assets/event-management-live.png";

function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      desc: "Full MERN app with cart, wishlist, orders, and address management.",
      stack: ["React", "Node.js","Express.js", "MongoDB"],
      image: ecommerceLive,
      github: "https://github.com/Gangasaivijayreddy/Ecommerce-App",
      live: "https://ecommerce-app-henna-iota.vercel.app",
    },
    
  ];

  return (
    <section id="projects" className="container py-5">
      <div className="section-intro">
        <span className="section-label">Projects</span>
        
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-lg-6" key={project.title}>
            <article className="project-card">
              <img
                src={project.image}
                alt={`${project.title} live preview`}
                className="project-screenshot"
              />

              <div className="project-content">
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.live}
                    className="btn btn-dark btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  {project.github ? (
                    <a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="project-note">GitHub link unavailable</span>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
