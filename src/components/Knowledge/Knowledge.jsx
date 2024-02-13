import React from "react";
import Styles from "../Knowledge/Knowledge.module.css";
import { AnimateOnScroll } from "animate-on-scroll-framer";

const Knowledge = () => {
  
  return (
    <>
      <section  id={Styles.knowledge}>
        <div id={Styles.knowledgeContainer}>
          <h1 className={Styles.skillHead}>Tech</h1>
          <div id={Styles.knowledgeFlex}>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2} >
              <div className={Styles.skillContainer}>
                <h2 className={Styles.skillType}>Frontend</h2>
                <div className={Styles.experiencedSkills}>
                  <span className={Styles.skills}>HTML</span>
                  <span className={Styles.skills}>CSS</span>
                  <span className={Styles.skills}>JS</span>
                  <span className={Styles.skills}>Bootstrap</span>
                  <span className={Styles.skills}>React</span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
              <div className={Styles.skillContainer}>
                <h2 className={Styles.skillType}>Backend</h2>
                <div className={Styles.experiencedSkills}>
                  <span className={Styles.skills}>Node</span>
                  <span className={Styles.skills}>Express</span>
                  <span className={Styles.skills}>Rest API</span>
                  <span className={Styles.skills}>Java</span>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInLeft" delay={0.2}>
              <div className={Styles.skillContainer}>
                <h2 className={Styles.skillType}>Database</h2>
                <div className={Styles.experiencedSkills}>
                  <span className={Styles.skills}>Firebase</span>
                  <span className={Styles.skills}>PostgreSql</span>
                  <span className={Styles.skills}>MongoDB</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <h1  className={Styles.skillHead}>Finance</h1>
          <div id={Styles.financeFlex}> 
            <AnimateOnScroll animation="fadeInLeft" delay={0.5}>
              <div className={Styles.skillContainer}>
                <h2 className={Styles.skillType}>Stocks</h2>
                <div className={Styles.experiencedSkills}>
                  <span className={Styles.skills}>Trading</span>
                  <span className={Styles.skills}>Investment</span>
                  <span className={Styles.skills}>Chart Analysis</span>
                  <span className={Styles.skills}>Fund Management</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Knowledge;
