import React from "react";
import merge from "deepmerge";
import ScriptTag from "react-script-tag";

import defaultOptions from "./plugin-config";
import SmarterTrackLiveChatScript from "./smartertrack-live-chat-script";
import SmarterTrackLiveChatHtml from "./smartertrack-live-chat-html";
import SmarterTrackWhosOnScript from "./smartertrack-whos-on-script";

const onRenderBody = ({ setPostBodyComponents }, pluginOptions = {}) => {
  /* istanbul ignore next  */
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "debug" ||
    process.env.NODE_ENV === "test"
  ) {
    const { fqdn, port, liveChat, whosOn } = merge.all([
      defaultOptions,
      pluginOptions,
    ]);

    if (!fqdn) return;

    let liveChatComponents = [];
    if (liveChat && liveChat.isEnabled) {
      liveChatComponents = [
        // eslint-disable-next-line react/jsx-filename-extension
        <SmarterTrackLiveChatHtml
          elementId={liveChat.options.elementId}
          key="gatsby-plugin-smartertrack-live-chat-element"
        />,
        <SmarterTrackLiveChatScript
          fqdn={fqdn}
          port={port}
          elementId={liveChat.options.elementId}
          configNum={liveChat.options.configNum}
          key="gatsby-plugin-smartertrack-live-chat-script"
        />,
      ];
    }

    let whosOnComponents = [];
    if (whosOn && whosOn.isEnabled) {
      const scriptString = `//${fqdn}:${port}/ST.ashx?scriptonly=true`;
      whosOnComponents = [
        // eslint-disable-next-line react/jsx-filename-extension
        <SmarterTrackWhosOnScript
          virtualPage={whosOn.options.virtualPage}
          key="gatsby-plugin-smartertrack-whos-on-script"
        />,
        <ScriptTag
          isHydrating
          type="text/javascript"
          src={scriptString}
          key="gatsby-plugin-smartertrack-whos-on-script-tag"
        />,
      ];
    }

    const components = [...liveChatComponents, ...whosOnComponents];

    setPostBodyComponents(components);
  }
};

const onPreRenderHTML = ({
  getPostBodyComponents,
  replacePostBodyComponents,
}) => {
  /* istanbul ignore next  */
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "debug" ||
    process.env.NODE_ENV === "test"
  ) {
    const postBodyComponents = getPostBodyComponents();

    const smarterTrackWhosOnComponents = postBodyComponents.filter(
      component => {
        return (
          component.key === "gatsby-plugin-smartertrack-whos-on-script" ||
          component.key === "gatsby-plugin-smartertrack-whos-on-script-tag"
        );
      }
    );

    // Move 'Who's On' script tag to last position if not already
    smarterTrackWhosOnComponents.sort((aComponent, bComponent) => {
      if (
        aComponent.key === "gatsby-plugin-smartertrack-whos-on-script-tag" &&
        bComponent.key === "gatsby-plugin-smartertrack-whos-on-script"
      ) {
        return 1;
      }
      return -1;
    });

    const allOtherComponents = postBodyComponents.filter(
      component =>
        component.key !== "gatsby-plugin-smartertrack-whos-on-script" &&
        component.key !== "gatsby-plugin-smartertrack-whos-on-script-tag"
    );

    const postBodyComponentsBlockingLast = allOtherComponents.concat(
      smarterTrackWhosOnComponents
    );

    replacePostBodyComponents(postBodyComponentsBlockingLast);
  }
};

export { onRenderBody, onPreRenderHTML }; // eslint-disable-line import/prefer-default-export
