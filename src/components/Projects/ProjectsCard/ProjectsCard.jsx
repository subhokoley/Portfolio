import "./ProjectsCard.css";

const ProjectsCard = ({ details }) => {
  return (
    <>
      <div className="projects-card-container">
        <h6>{details.title}</h6>
        <div className="alldetails">
          <div className="img_section">
            <img src={details.img} alt="" />
          </div>
          <div className="description">
            {details.details.map((item) => {
              return (
                <ul key={item}>
                  <li>{item}</li>
                </ul>
              );
            })}
            <a href={details.url}>
              <button className="visit_btn">Visit WebSite</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectsCard;
