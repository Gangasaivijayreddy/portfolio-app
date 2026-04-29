import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="site-nav sticky-top">
      <div className="container site-nav-inner">
        <span className="site-brand">Gangasani Vijay Kumar Reddy</span>

        <div className="site-links">
          <Link to="skills" smooth={true} duration={500} className="site-link">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="site-link">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="site-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
