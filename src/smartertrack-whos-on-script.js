import React from "react";
import PropTypes from "prop-types";

function createScriptMarkup(virtualPage) {
  let smFunc = "";
  if (!virtualPage) {
    smFunc = `function smarterTrackWhosOn_TrackPage(a) {
      a.TrackPage();
    }`;
  } else {
    smFunc = `function smarterTrackWhosOn_TrackPage(a) {
      a.TrackVirtualPage('${virtualPage}');
    }`;
  }
  return {
    __html: `// SmarterTrack Who's On
        ${smFunc}`,
  };
}

const SmarterTrackWhosOnScript = ({
  virtualPage,
}) => (
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/no-danger */
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={createScriptMarkup(virtualPage)}
  />
  /* eslint-enable react/jsx-filename-extension */
  /* eslint-enable react/no-danger */
);

SmarterTrackWhosOnScript.propTypes = {
  virtualPage: PropTypes.string,
};

SmarterTrackWhosOnScript.defaultProps = {
  virtualPage: "",
};

export default SmarterTrackWhosOnScript;
