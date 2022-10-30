// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubRepoName = "CS1101S-teach";
const githubRepoLink = `https://github.com/shenyih0ng/${githubRepoName}`;

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NUS AY22/23 CS1101S",
  url: "https://yihongshen.me/",
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
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
        appId: "008E4V7PT1",
        apiKey: "7a96feff40028a03558c98d7f9c51222",
        indexName: "cs1101s-teach",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        searchParameters: {},
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
