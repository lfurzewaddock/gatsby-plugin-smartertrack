import React from "react";
import PropTypes from "prop-types";

function createScriptMarkup(fqdn, port, elementId, configNum) {
  return {
    __html: `// SmarterTrack Live Chat
        (function() {
          var c = document.createElement('script');
          c.type = 'text/javascript'; c.async = true;
          c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "${fqdn}:${port}/ChatLink.ashx?config=${configNum}&id=${elementId}";
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(c,s);
      })();`,
  };
}
const SmarterTrackScript = ({
  fqdn, port, elementId, configNum,
}) => (
  /* eslint-disable react/jsx-filename-extension */
  /* eslint-disable react/no-danger */
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={createScriptMarkup(fqdn, port, elementId, configNum)}
  />
  /* eslint-enable react/jsx-filename-extension */
  /* eslint-enable react/no-danger */
);

SmarterTrackScript.propTypes = {
  fqdn: PropTypes.string.isRequired,
  port: PropTypes.number.isRequired,
  elementId: PropTypes.string.isRequired,
  configNum: PropTypes.number.isRequired,
};

export default SmarterTrackScript;
