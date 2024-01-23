import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import CV from "../../assets/CV_Nikola_Hadzhiev_2024.pdf";
import BulgarianCV from "../../assets/Никола_Хаджиев Автобиография.pdf";
import Skills from "../../components/Skills";
import "./About.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <div className="button__section">
              <a href={CV} download="" className="button">
                Download CV
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
              <a href={BulgarianCV} download="" className="button">
                Download Bulgarian CV
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
            </div>
          </div>
          <div className="stats grid">
            <Stats />
          </div>

        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My <span>Skills</span></h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Experience & Education</h3> 
        <div className="resume__container grid">
          <div className="resume__data">
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
