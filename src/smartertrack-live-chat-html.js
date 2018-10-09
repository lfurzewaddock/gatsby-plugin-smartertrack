import React from "react";
import PropTypes from "prop-types";

const SmarterTrackLiveChatHtml = ({ elementId }) => (
  <div id={elementId} /> // eslint-disable-line react/jsx-filename-extension
);

SmarterTrackLiveChatHtml.propTypes = {
  elementId: PropTypes.string.isRequired,
};

export default SmarterTrackLiveChatHtml;
