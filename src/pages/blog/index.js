import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/bgblog.jpeg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #EB4B4C, -0.5rem 0 0 #EB4B4C",
              backgroundColor: "#EB4B4C",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
