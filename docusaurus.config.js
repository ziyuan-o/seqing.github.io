const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  onBrokenLinks: 'ignore',
  title: 'XB博客',
  titleDelimiter: '-',
  url: 'http://www.zy-wan.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jl',
  projectName: 'blog',
  tagline: '挖掘数据爱好者',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'XB博客',
      },
      
      {
        name: 'keywords',
        content: '挖掘数据爱好者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'XB博客',
      logo: {
        alt: 'XB博客',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          to: '/',
          label: '首页',
          position: 'right',
        },
        {
          to: 'docs/OnlineVideo',
          label: "在线视频",
          position: "right",
          
        },
        {
          to: 'docs/OnlineVideo/Anchor/OnlineVideo-Anchor',
          label: "网红主播",
          position: "right",
          
        },
        {
          to: 'docs/OnlineVideo/OnlineVideo-Level3',
          label: "三级伦理",
          position: "right",
          
        },
        {
          to: 'docs/daohang',
          label: "导航站",
          position: "right",
          
        },
        {
          label: "其它",
          position: "right",
          items: [
            {
              label: 'HYIP',
              to: 'docs/qita/qita-hyip',
            },
            {
              label: '赌场',
              to: 'docs/casino',
            },
            {
              label: 'vpn软件',
              to: 'docs/vpn',
            },
            {
              label: 'VIP解析',
              to: 'docs/qita/vip-video',
            },
            {
              label: 'm3u8播放器',
              to: 'docs/qita/M3U8-video',
            },
            
            
          ],
          
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: '在线视频',
          items: [
            {
              label: '网红主播',
              to: 'docs/OnlineVideo/Anchor/OnlineVideo-Anchor',
            },
            {
              label: '国产自拍',
              to: 'docs/OnlineVideo/OnlineVideo-Selfie',
            },
            {
              label: '探花系列',
              to: 'docs/OnlineVideo/OnlineVideo-Tanhua',
            },
            {
              label: '三级伦理',
              to: 'docs/OnlineVideo/OnlineVideo-Level3',
            },
          ]
        },
        
        {
          title: '其它',
          items: [
            {
              label: 'HYIP',
              to: 'docs/qita/qita-hyip',
            },
            {
              label: '娱乐赌场',
              to: 'docs/casino',
            },
            {
              label: 'vpn软件',
              to: 'docs/VPN',
            },
            {
              label: 'VIP视频解析',
              to: 'docs/qita/vip-video',
            },
          ],
        },
        {
          title: '导航站',
          items: [
            {
              label: '导航站',
              to: 'docs/daohang',
            },
           
          ],
        },
        
        
      ],
      copyright:  `Copyright © ${new Date().getFullYear()} XB博客<p><a href="/" class="footer_lin">都是网上收集的资源，如有侵权联系博主删除！</a></p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {
      appId: 'RIMEHIIIP6',
      apiKey: '0bb55046a96eb973a220fe57b2d2d3b5',
      indexName: 'xiaojunnan'
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {
      matomoUrl: 'http://www.zy-wan.com',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    giscus: {
      repo: 'xiaojunnanya/blog',
      repoId: 'R_kgDOJ23KyQ',
      category: 'General',
      categoryId: 'DIC_kwDOJ23Kyc4Ccv-l',
      theme: 'light',
      darkTheme: 'dark',
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      // github: 'https://github.com/xiaojunnanya',
      // juejin: 'https://juejin.cn/user/3633256370537165',
      // twitter: 'https://twitter.com',
      // csdn: 'https://blog.csdn.net',
      // qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=3812263050&amp;site=qq',
      // zhihu: 'https://www.zhihu.com/people',
      // cloudmusic: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'XB博客',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/xiaojunnanya/blog`,
        editLocalizedFiles: false,
        blogDescription: 'XB博客',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'XB博客',
          copyright: `Copyright © ${new Date().getFullYear()} XB博客<p><a href="/" class="footer_lin">暂无</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    // localeConfigs: {
    //   en: {
    //     htmlLang: 'en-GB',
    //   },
    // },
  },
}

module.exports = config
