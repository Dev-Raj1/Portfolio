import React from "react";
import Styles from "./NavBar.module.css";


const NavBar = () => {

  const ScrollToProject = () => {
    const knowledgeSection = document.getElementById("Knowledge_knowledge__zIFNq");
      if (knowledgeSection) {
        knowledgeSection.scrollIntoView({ behavior: "smooth" });
      }
  };

  return (
    <>
      <header id={Styles.NavHead}>
        <nav id={Styles.NavContainer}>
          <div id={Styles.NavItems}>
            <div id={Styles.Name}>DeepRaj Mandal</div>
            <div id={Styles.NavLinks}>
              <div>
                <span onClick={ScrollToProject}  className={Styles.anchorTags}>Projects</span>
              </div>

              <div>
                <a
                  className={Styles.anchorTags}
                  href="mailto:dev.deepraj.2322@gmail.com"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
