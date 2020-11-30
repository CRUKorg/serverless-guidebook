module.exports = {
  title: "Serverless Guidebook",
  tagline: "Helping you navigate your serverless journey",
  url: "https://crukorg.github.io",
  baseUrl: "/serverless-guidebook/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "CRUKorg",
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
          href: "https://github.com/CRUKorg/serverless-guidebook",
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
              href: "https://github.com/CRUKorg/serverless-guidebook",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cancer Research UK. Built with Docusaurus.`,
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
            "https://github.com/CRUKorg/serverless-guidebook/edit/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
