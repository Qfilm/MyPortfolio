import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
/* eslint-disable no-anonymous-exports-page-templates, import/no-anonymous-default-export */
export default ({ location }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout location={location}>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 data-aos="fade-down" data-aos-duration="500">Thank you!</h1>
            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">We will get back to you shortly</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
