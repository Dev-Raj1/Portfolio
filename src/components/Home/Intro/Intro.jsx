import React from "react";
import Styles from "./Intro.module.css";
import { ReactComponent as SVG } from ".././../../assets/21532466_6491426.svg";
import { AnimateOnScroll } from "animate-on-scroll-framer";
const Intro = () => {
  return (
    <>
      <div id={Styles.AnimateHolder}>
        <AnimateOnScroll animation="fadeInLeft" delay={0.5}>
          <div id={Styles.introGrid}>
            <div id={Styles.introContainer}>
              <div id={Styles.intro}>
                <span className={Styles.introDescription}>
                  ✋Hi, I am DeepRaj
                </span>
                <p className={Styles.introDescription}>
                  I'm a{" "}
                  <span className={Styles.glowingBorder}>
                    full-stack web developer
                  </span>{" "}
                  who dabbles in{" "}
                  <span className={Styles.glowingBorder}>stock trading</span> on
                  the side. I'm always learning and freelancing as I go. Stick
                  around to see how I balance tech and finance in my world.
                </p>
              </div>
              <div>
                <p id={Styles.currentWork}>
                  Currently learing Data Structure & Algorithm and Python
                </p>
              </div>
            </div>
            <div id={Styles.svgContainer}>
              <SVG></SVG>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </>
  );
};

export default Intro;
