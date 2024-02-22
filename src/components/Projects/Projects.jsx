import "./Projects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { PROJECTS } from "../../utilis/data";
import { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Projects = () => {
  const slideRef = useRef();

  const slideLeft = () => {
    slideRef.current.slickPrev();
  };
  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="projects" className="projects_container">
        <h5>Projects</h5>
        <div className="projects_content">
          <div className="arrow_right" onClick={slideRight}>
            <FaArrowRight />
          </div>
          <div className="arrow_left" onClick={slideLeft}>
            <FaArrowLeft />
          </div>

          <Slider ref={slideRef} {...setting}>
            {PROJECTS.map((item) => {
              return <ProjectsCard details={item} key={item.title} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Projects;
