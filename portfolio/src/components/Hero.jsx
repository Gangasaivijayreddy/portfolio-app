function Hero() {
  const highlights = ["MERN Stack", "Responsive Interfaces", "REST API Integration","Industraial Automation "];

  return (
    <section className="container py-5">
      <div className="hero-copy hero-copy-full">
        <span className="hero-kicker">Available for Industrial Automation Roles</span>
        <h1>Vijay Kumar Reddy</h1>
        <p className="hero-lead">
          Ready to work in Industrial Automation(plc,Scada,Hmi,vfd,rlc,robotics) 
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
            href="/Industrial Automation Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            View Resume
          </a>
          <a href="/Industrial Automation Resume.pdf" download className="btn btn-outline-dark">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
