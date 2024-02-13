import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./RedirectPages.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareGithub, FaSquareYoutube } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const RedirectPages = () => {
  const websiteUrls = {
    yt: "https://www.youtube.com/channel/UCBQqGFQLRowujpRIT7mwE8g",
    git: "https://github.com", // Example URL for GitHub
    facebook: "https://www.facebook.com", // Example URL for Facebook
    instagram: "https://www.instagram.com", // Example URL for Instagram
  };

  const [isArrowVisible, setIsArrowVisible] = useState(window.innerWidth > 768);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsArrowVisible(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []); // Empty dependency array to run effect only once during component mounting

  const handleMouseEnter = () => {
    if (isArrowVisible) {
      setIsArrowVisible(false);
      if (linkRefs.current) {
        for (let i = 1; i < linkRefs.current.length; i++) {
          linkRefs.current[i].classList.add(Styles.open);
        }
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isArrowVisible) {
      setIsArrowVisible(true);
      if (linkRefs.current) {
        for (let i = 1; i < linkRefs.current.length; i++) {
          linkRefs.current[i].classList.remove(Styles.open);
        }
      }
    }
  };

  return (
    <>
      <aside onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}id={Styles.asideContainer}>
        <div
          id={Styles.linksHolder}
          className={Styles.linksHolder}
        >
          {isArrowVisible && (
            <div className={Styles.arrow}>
              <IoIosArrowDroprightCircle size={50} />
            </div>
          )}
          <div ref={(el) => (linkRefs.current[1] = el)} className={Styles.links}>
            <Link target="_blank" to={websiteUrls.instagram}>
              <FaInstagram size={50} />
            </Link>
          </div>
          <div ref={(el) => (linkRefs.current[2] = el)} className={Styles.links}>
            <Link target="_blank" to={websiteUrls.yt}>
              <FaSquareYoutube size={50} />
            </Link>
          </div>
          <div ref={(el) => (linkRefs.current[3] = el)} className={Styles.links}>
            <Link target="_blank" to={websiteUrls.git}>
              <FaSquareGithub  size={50} />
            </Link>
          </div>
          <div ref={(el) => (linkRefs.current[4] = el)} className={Styles.links}>
            <Link target="_blank" to={websiteUrls.facebook}>
              <FaFacebook size={50} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RedirectPages;
