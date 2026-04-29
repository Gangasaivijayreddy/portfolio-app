function Hero() {
  const highlights = ["MERN Stack", "Responsive Interfaces", "REST API Integration"];

  return (
    <section className="container py-5">
      <div className="hero-copy hero-copy-full">
        <span className="hero-kicker">Available for Full-Stack Developer roles</span>
        <h1>Vijay Kumar Reddy</h1>
        <p className="hero-lead">
          MERN stack developer building practical web applications with clean,
          responsive interfaces.
        </p>
        <p className="hero-text">
          I focus on frontend responsiveness, backend reliability, and project delivery
          that feels professional .
        </p>

        <div className="hero-badges">
          {highlights.map((item) => (
            <span key={item} className="hero-badge">
              {item}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            View Resume
          </a>
          <a href="/resume.pdf" download className="btn btn-outline-dark">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
