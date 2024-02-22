import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section id="home" className="hero_section">
        <div className="hero_content">
          <h2>Building Digital Experiences That Inspire</h2>
          <p>
            Passionate Frontend Developer | Transforming Ideas Into Seamless And
            Visually Stunning Web Solutions
          </p>
        </div>

        <div className="hero_img">
          <div>
            <div className="tech_icon">
              <img src="./images/react-js-icon.png" alt="" />
            </div>
            <img src="./images/heroSection.jpg" alt="" className="main_img" />
          </div>

          <div>
            <div className="tech_icon">
              <img src="./images/js.png" alt="" />
            </div>
            <div className="tech_icon">
              <img src="./images/html-5.png" alt="" />
            </div>
            <div className="tech_icon">
              <img src="./images/css-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
