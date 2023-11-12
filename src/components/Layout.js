import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/bulma-style.sass";
import "../style/custom-style.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata();
  React.useEffect(() => {
    const preventRightClick = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    window.addEventListener('contextmenu', preventRightClick);

    return () => {
      window.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Settings you can adjust according to your needs
      duration: 500, // Animation duration in milliseconds
      delay: 100,    // Delay in milliseconds
      once: false,   // Whether animation should fire only once or every time you scroll up/down to elements
      mirror: true,  // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  // Define your page transition variants
  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  };

  // Transition settings
  const pageTransition = {
    type: "tween",
    ease: "backOut",
    duration: 0.7
  };
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div><motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div></div>

      <Footer />
    </div>
  );
};

export default TemplateWrapper;
