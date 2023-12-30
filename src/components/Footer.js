import React, { useEffect } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered" data-aos="fade-up" data-aos-duration="500">
        <img
          src={logo}
          alt="logo"
          style={{ width: "14em", height: "13em" }}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4" data-aos="fade-right" data-aos-duration="100">
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
                    <Link className="navbar-item" to="/photos">
                      Gallery
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
            <div className="column is-4" data-aos="fade-up" data-aos-duration="100">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social" data-aos="fade-left" data-aos-duration="100">
              <a title="Letterboxd" href="https://boxd.it/5LWXb">
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="x" href="https://x.com/QualityonScreen?t=G9xzn4SDISLth3lEEybGyQ&s=09">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
              <a title="instagram" href="https://instagram.com">
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

      <p style={{ textAlign: "center" }} data-aos="zoom-in-up" data-aos-duration="100">© {new Date().getFullYear()} Ryan Beattie. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
