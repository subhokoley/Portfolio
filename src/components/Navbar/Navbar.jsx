import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import "./Navbar.css";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandel = () => {
    console.log("clicked...");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandel={toggleHandel} />
      <nav className="navbar_wrapper">
        <div className="navbar_content">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
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
                className="menu_item"
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
                className="menu_item"
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
                className="menu_item"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu_item"
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
            >
              <button className="contact_btn">Hire Me</button>
            </Link>
          </ul>
          <button
            className="menu_btn"
            onClick={() => {
              toggleHandel();
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>
              {isOpen ? <IoMdClose /> : <GrMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
