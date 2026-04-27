import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <span className="navbar-brand fw-bold">Vijay Kumar Reddy</span>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;