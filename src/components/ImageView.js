import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImageView = styled.img`
  width: 100%;
  height: auto;
`;

const ImageView = (props) => (
  <div>
    <StyledImageView src={props.src} alt={props.alt} />
  </div>
);

ImageView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageView;