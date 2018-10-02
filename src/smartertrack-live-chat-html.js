import React from "react";
import PropTypes from "prop-types";

const SmarterTrackHtml = ({ elementId }) => (
  <div id={elementId} /> // eslint-disable-line react/jsx-filename-extension
);

SmarterTrackHtml.propTypes = {
  elementId: PropTypes.string.isRequired,
};

export default SmarterTrackHtml;
