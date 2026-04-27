function Hero() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* LEFT */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold display-5">
            Hi, I'm Vijay Kumar Reddy 👋
          </h1>

          <p className="lead text-muted">
            MERN Stack Developer building modern web apps
          </p>

          <div className="mt-3">
            <a href="/resume.pdf" className="btn btn-dark me-2">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline-dark">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT (Image) */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            className="img-fluid rounded shadow"
            alt="developer"
          />
        </div>

      </div>
    </div>
  );
}
export default Hero;