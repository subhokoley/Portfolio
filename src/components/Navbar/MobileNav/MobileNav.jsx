import "./MobileNav.css";
import { Link } from "react-scroll";
const MobileNav = ({ isOpen, toggleHandel }) => {
  return (
    <>
      <div
        className={`mobile_menu ${isOpen ? "active" : ""}`}
        onClick={toggleHandel}
      >
        <div className="mobile_navbar_content">
          <div className="mobile_logo">
            <img src="./images/mobileLogo.png" alt="" />
            <h2>Portfolio</h2>
          </div>
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mobile_menu_item"
                onClick={toggleHandel}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mobile_menu_item"
                onClick={toggleHandel}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mobile_menu_item"
                onClick={toggleHandel}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="mobile_contact-me"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="mobile_menu_item"
                onClick={toggleHandel}
              >
                Contact me
              </Link>
            </li>
            <Link
              to="contact-me"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={toggleHandel}
            >
              <button className="mobile_contact_btn">Hire Me</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
