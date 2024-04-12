import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, heading, subheading }) => {
  const heroImage = getImage(image) || image;

  return (
    <div style={{ backgroundcolour: "#f6eedd" }}>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="column is-12">
                      <div className="column is-12 has-text-centered">
                        <h3
                          className="has-text-weight-semibold is-size-2"
                          style={{
                            border: "4px solid #fff",
                            backgroundColor: "#84cdee",
                            color: "#fff",
                            padding: "1rem",
                            display: "inline-block",
                            width: "fit-content",
                          }}
                        >
                          Latest Work
                        </h3>
                      </div>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout location={location}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
      }
    }
  }
`;
