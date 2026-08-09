// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EffortlessSecurity',
  tagline: 'Security research, blog, and portfolio for modern builders',
  favicon: 'img/favicon.ico',

  url: 'https://effortlesssecurity.in',
  baseUrl: '/effortlesssecurity/',

  organizationName: 'effortlessdevsec',
  projectName: 'effortlesssecurity',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'effortlessdevsec',
        path: '/projects',
        pageTitle: 'Open Source Projects',
        pageDescription: 'Open-source security tools and research by Amit Kumar.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/effortlessdevsec/effortlesssecurity/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'EffortlessSecurity',
        logo: {
          alt: 'EffortlessSecurity',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/portfolio', label: 'Portfolio', position: 'left'},
          {
            href: 'https://github.com/effortlessdevsec',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/portfolio',
            label: 'Connect',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {label: 'All Articles', to: '/blog'},
              {label: 'Learn DevSecOps', to: '/learn-devsecops/github-actions-overview'},
              {label: 'Secure Code Review', to: '/secure-code-review/core-pillars-of-sast'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {label: 'Portfolio', to: '/portfolio'},
              {label: 'GitHub', href: 'https://github.com/effortlessdevsec'},
              {label: 'GitHub Projects', href: 'https://github.com/effortlessdevsec?tab=repositories'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} EffortlessSecurity · Amit Kumar · Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'python', 'java', 'kotlin'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
    }),

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;600;700&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap',
      },
    },
  ],
};

export default config;
