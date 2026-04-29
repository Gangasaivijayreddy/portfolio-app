function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Bootstrap",
    "CSS",
    "Chrome Dev Tools",
    "PostMan"
  ];

  return (
    <section id="skills" className="container py-5">
      <div className="section-intro">
        <span className="section-label">Skills</span>
       
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
