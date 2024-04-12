import React, { useEffect } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import letterboxd from "../img/social/letterboxd.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="logo" style={{ width: "14em", height: "13em" }} />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Critical Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/photos">
                      Photography
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="Letterboxd" href="https://boxd.it/5LWXb">
                <img
                  src={letterboxd}
                  alt="letterboxd"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a
                title="X"
                href="https://x.com/QualityonScreen?t=G9xzn4SDISLth3lEEybGyQ&s=09"
              >
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="Instagram" href="https://instagram.com">
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Ryan Beattie. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
