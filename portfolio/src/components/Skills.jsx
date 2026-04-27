function Skills() {
  const skills = ["React", "Node.js", "MongoDB", "Express", "Bootstrap","CSS", "JavaScript"];

  return (
    <div id="skills" className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Skills</h2>

      <div className="text-center">
        {skills.map((skill, i) => (
          <span key={i} className="badge bg-dark m-2 p-3 fs-6">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Skills