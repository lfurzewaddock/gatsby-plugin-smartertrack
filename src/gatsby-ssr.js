import React from "react";

import defaultOptions from "./plugin-config";
import SmarterTrackScript from "./smartertrack-script";
import SmarterTrackHtml from "./smartertrack-html";

const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const {
    fqdn, port, elementId, configNum,
  } = { ...defaultOptions, ...pluginOptions };

  if (!fqdn) return;

  setPostBodyComponents([
    // eslint-disable-next-line react/jsx-filename-extension
    <SmarterTrackHtml
      elementId={elementId}
      key="gatsby-plugin-smartertrack-widget-element"
    />,
    <SmarterTrackScript
      fqdn={fqdn}
      port={port}
      elementId={elementId}
      configNum={configNum}
      key="gatsby-plugin-smartertrack-widget-script"
    />,
  ]);
};

export { onRenderBody }; // eslint-disable-line import/prefer-default-export
