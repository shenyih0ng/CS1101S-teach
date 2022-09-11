// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubRepoName = "CS1101S-teach";
const githubRepoLink = `https://github.com/shenyih0ng/${githubRepoName}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NUS AY22/23 CS1101S",
  url: "https://shenyih0ng.github.io/",
  baseUrl: "/CS1101S-teach/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shenyih0ng",
  projectName: githubRepoName,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: githubRepoLink + "/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "NUS AY22/23 CS1101S",
        logo: {
          alt: "lambda",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Studios",
          },
          {
            href: githubRepoLink,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Materials",
            items: [
              {
                label: "Studios",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Source Academy / SICP",
            items: [
              {
                label: "SICP JS",
                href: "https://sourceacademy.nus.edu.sg/sicpjs/index",
              },
              {
                label: "Source Academy @ NUS",
                href: "https://sourceacademy.nus.edu.sg/",
              },
              {
                label: "Source Academy Repo",
                href: "https://github.com/source-academy/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "YOUR_APP_ID",

        // Public API key: it is safe to commit it
        apiKey: "YOUR_SEARCH_API_KEY",

        indexName: "YOUR_INDEX_NAME",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;
