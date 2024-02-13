import React from "react";
import Styles from "./Projects.module.css";
import ProjectCard from "./Helper/ProjectCard";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import { AnimateOnScroll } from "animate-on-scroll-framer";

const Projects = () => {
  return (
    <>
      <section id={Styles.projectSection}>
        <div id={Styles.projectContainer}>
          <h1 className={Styles.projectHead}>Projects</h1>
          <div id={Styles.projectFlex}>
            <AnimateOnScroll animation="fadeInLeft" delay={0.3}>
              <ProjectCard
                title={"Netflix+Crunchyroll Mix Clone"}
                url={"https://github.com/Dev-Raj1/AnimeGuru"}
                image={pic1}
              ></ProjectCard>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInDown"  delay={0.7}>
              <ProjectCard
                title={"E-commerce Website"}
                url={"https://github.com/Dev-Raj1/Anime-E-commerce"}
                image={pic2}
              ></ProjectCard>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" delay={0.9}>
              {" "}
              <ProjectCard
                title={"Customised Google WebPage "}
                url={"https://github.com/Dev-Raj1/CustomisedGoogle"}
                image={pic3}
              ></ProjectCard>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
