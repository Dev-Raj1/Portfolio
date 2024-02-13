// Home.js

import React from "react";
import Intro from "./Intro/Intro";
import RedirectPages from "../RedirectPages/RedirectPages";
import Knowledge from "../Knowledge/Knowledge";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";


const Home = () => {
 
  return (
    <>
    <section>
      <main>
      <Intro />
      <Knowledge />
      <Projects />
      <Footer />
      <RedirectPages />
      </main>
    </section>
     
    </>
  );
};

export default Home;
