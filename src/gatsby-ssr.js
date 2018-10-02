import React from "react";
import merge from "deepmerge";

import defaultOptions from "./plugin-config";
import SmarterTrackLiveChatScript from "./smartertrack-live-chat-script";
import SmarterTrackLiveChatHtml from "./smartertrack-live-chat-html";
import SmarterTrackWhosOnScript from "./smartertrack-whos-on-script";

const onRenderBody = ({ setPostBodyComponents }, pluginOptions = {}) => {
  const {
    fqdn, port, liveChat, whosOn,
  } = merge.all([defaultOptions, pluginOptions]);

  if (!fqdn) return;

  let liveChatComponents = [];
  if (liveChat && liveChat.isEnabled) {
    liveChatComponents = [
      // eslint-disable-next-line react/jsx-filename-extension
      <SmarterTrackLiveChatHtml
        elementId={liveChat.options.elementId}
        key="gatsby-plugin-smartertrack-widget-element"
      />,
      <SmarterTrackLiveChatScript
        fqdn={fqdn}
        port={port}
        elementId={liveChat.options.elementId}
        configNum={liveChat.options.configNum}
        key="gatsby-plugin-smartertrack-widget-script"
      />];
  }

  let whosOnComponents = [];
  if (whosOn && whosOn.isEnabled) {
    whosOnComponents = [
      // eslint-disable-next-line react/jsx-filename-extension
      <SmarterTrackWhosOnScript
        fqdn={fqdn}
        port={port}
        virtualPage={whosOn.options.virtualPage}
        key="gatsby-plugin-smartertrack-whos-on-script"
      />,
    ];
  }

  const components = [...liveChatComponents, ...whosOnComponents];

  setPostBodyComponents(components);
};

export { onRenderBody }; // eslint-disable-line import/prefer-default-export
