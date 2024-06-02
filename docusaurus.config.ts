import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hxhac',
  // tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.hxha.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw', // docusaurus build 时忽略坏链
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
        },
        // blog: {
        //   routeBasePath: '/',
        //   blogSidebarTitle: 'All posts',
        //   blogSidebarCount: 'ALL',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-G0687BFERF',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     disableInDev: false,
    //   },
    // ],
    'docusaurus-plugin-sass',
    // [
    //   require.resolve('@easyops-cn/docusaurus-search-local'),
    //   {
    //     hashed: true,
    //     indexDocs: true,
    //     language: ['en', 'zh'],
    //     highlightSearchTermsOnTargetPage: true,
    //   }
    // ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hacking',
      logo: {
        alt: 'Hacking',
        src: 'img/logo.svg',
      },
      // items: [
      //   // {
      //   //   type: 'docSidebar',
      //   //   sidebarId: 'tutorialSidebar',
      //   //   position: 'left',
      //   //   label: 'Tutorial',
      //   // },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    giscus: {
      repo: 'hxhac/blog', // edit this
      repoId: 'R_kgDOLyA2CA', // edit this
      category: 'Announcements',
      categoryId: 'DIC_kwDOLyA2CM4CfwUI', // edit this
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Docs. Built with Docusaurus. Hosted by Github & Cloudflare.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "sql", "java"],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
