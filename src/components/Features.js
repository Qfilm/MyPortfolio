import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map((item, index) => (
            <div key={item.text} className="column is-6">
                <section className="section" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: "240px",
                                display: "inline-block",
                            }}
                            data-aos="zoom-in"
                            data-aos-delay={`${index * 150}`}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <p data-aos="fade-left" data-aos-delay={`${index * 200}`}>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
);

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default FeatureGrid;
