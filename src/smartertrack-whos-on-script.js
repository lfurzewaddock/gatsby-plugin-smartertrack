import React from "react";
import PropTypes from "prop-types";

function createScriptMarkup(fqdn, port, virtualPage) {
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
        ${smFunc}
        (function() {
          var c = document.createElement('script');
          c.type = 'text/javascript'; c.async = false;
          c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "${fqdn}:${port}/ST.ashx?scriptonly=true";
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(c,s);
      })();`,
  };
}

const SmarterTrackWhosOnScript = ({
  fqdn, port, virtualPage,
}) => (
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/no-danger */
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={createScriptMarkup(fqdn, port, virtualPage)}
  />
  /* eslint-enable react/jsx-filename-extension */
  /* eslint-enable react/no-danger */
);

SmarterTrackWhosOnScript.propTypes = {
  fqdn: PropTypes.string.isRequired,
  port: PropTypes.number.isRequired,
  virtualPage: PropTypes.string,
};

SmarterTrackWhosOnScript.defaultProps = {
  virtualPage: "",
};

export default SmarterTrackWhosOnScript;
