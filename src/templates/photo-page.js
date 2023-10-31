import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// eslint-disable-next-line
export const PhotoPageTemplate = ({ photos }) => {
  return (
    <div className="content">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <PreviewCompatibleImage imageInfo={photo.image} />
            {photo.caption && <p>{photo.caption}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

const PhotoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PhotoPageTemplate photos={frontmatter.photos} />
    </Layout>
  );
};

PhotoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PhotoPage;

export const photoPageQuery = graphql`
  query PhotoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        photos {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          caption
        }
      }
    }
  }
`;
