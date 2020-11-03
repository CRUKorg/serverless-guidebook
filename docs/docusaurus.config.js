module.exports = {
  title: "Serverless Guidebook",
  tagline: "Helping you navigate your serverless journey",
  url: "https://lukehedger.github.io/serverless-guidebook",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "lukehedger",
  projectName: "serverless-guidebook",
  themeConfig: {
    navbar: {
      title: "Serverless Guidebook",
      logo: {
        alt: "Serverless Guidebook",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/lukehedger/serverless-guidebook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Get started",
              to: "docs/",
            },
            {
              label: "AWS Lambda",
              to: "docs/services/aws-lambda/",
            },
            {
              label: "Go further",
              to: "docs/resources/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://serverless-forum.slack.com/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/awscloud/lists/aws-serverless-heroes",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/lukehedger/serverless-guidebook",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Luke Hedger. Built with Docusaurus.`,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/lukehedger/serverless-guidebook/edit/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
