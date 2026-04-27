function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      desc: "Full MERN app with cart, wishlist, orders,address management",
      github: "#",
      live: "https://ecommerce-app-henna-iota.vercel.app"
    },
    {
      title: "Event Management App",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "An Event management app that lists events and it details",
      github: "#",
      live: "https://meet-up-client-eosin.vercel.app/"
    }
  ];

  return (
    <div id="projects" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Projects</h2>

      <div className="row g-4">
        {projects.map((p, i) => (
          <div className="col-md-6" key={i}>
            <div className="card shadow-sm h-100 border-0">

              <img
                src={p.img}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{p.title}</h5>
                <p className="text-muted">{p.desc}</p>

                <div className="d-flex gap-2">
                  <a href={p.live} className="btn btn-dark btn-sm" target="_blank" rel="noreferrer">Live</a>
                  <a href={p.github} className="btn btn-outline-dark btn-sm">GitHub</a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;