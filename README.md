[![Build Status](https://travis-ci.com/lfurzewaddock/gatsby-plugin-smartertrack.svg?branch=master)](https://travis-ci.com/lfurzewaddock/gatsby-plugin-smartertrack)
[![Coverage Status](https://coveralls.io/repos/github/lfurzewaddock/gatsby-plugin-smartertrack/badge.svg?branch=master)](https://coveralls.io/github/lfurzewaddock/gatsby-plugin-smartertrack?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/lfurzewaddock/gatsby-plugin-smartertrack/badge.svg?targetFile=package.json)](https://snyk.io/test/github/lfurzewaddock/gatsby-plugin-smartertrack?targetFile=package.json)


# gatsby-plugin-smartertrack

Unofficial [GatsbyJS](https://www.gatsbyjs.org) plugin to embed HTML/JavaScript code for a live chat widget and who's on tracking feature provided by SmarterTools [SmarterTrack](https://www.smartertools.com/smartertrack/) into a website generated by [GatsbyJS](https://www.gatsbyjs.org).

## Install

`npm install --save gatsby-plugin-smartertrack`

## How to use

In your `gatsby-config.js`

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-smartertrack`,
      options: {
        fqdn: `<string: fully qualfied domain name, eg. www.my-smartertrack-server.com> *REQUIRED`,
        port: `<number: port> - OPTIONAL: defaults to 443`,
        liveChat: {
          isEnabled: `<boolean> - OPTIONAL: defaults to true`,
          options: {
            elementId: `<string: HTML element ID> - OPTIONAL: defaults to 'chattab'`,
            configNum: `<number: SmarterTrack config> OPTIONAL: defaults to 0`,
          },
        },
        whosOn: {
          isEnabled: `<boolean> - OPTIONAL: defaults to true`,
          options: {
            virtualPage: `<string: SmarterTrack virtual page> - OPTIONAL: defaults to an empty string`,
          },
        },
      },
    },
  ],
}
```

## Notes
Tested with SmarterTools SmarterTrack v13.x
