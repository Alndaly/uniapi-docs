import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://uniapi.top',
  },
  head: [['meta', { name: 'baidu-site-verification', content: 'codeva-I7ftDgPZi2' }]],
  lastUpdated: true,
  title: "UniAPI",
  description: "UniAPI，通用工具型API",
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/Alndaly/uniapi-docs/edit/master/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '控制台', link: 'https://manage.uniapi.top' },
      { text: '个人博客', link: 'https://huaqinda.com' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '快速开始',
        link: '/quick-start',
      },
      {
        text: 'API概览',
        link: '/api-refrence/',
        items: [
          {
            text: '图片API',
            link: '/api-refrence/image'
          },
          {
            text: '文本API',
            link: '/api-refrence/text'
          },
          {
            text: '媒体API',
            link: '/api-refrence/media'
          }
        ]
      },
      {
        text: '更新日志',
        link: '/changelog/',
        items: [
          {
            text: '0.0.1',
            link: '/changelog/0.0.1'
          },
          {
            text: '0.0.2',
            link: '/changelog/0.0.2'
          }
        ]
      },
      {
        text: '类型概览',
        link: '/class-refrence'
      },
      {
        text: '捐赠',
        link: '/donate'
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/Alndaly">Kinda Hall</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alndaly/uniapi-docs' }
    ]
  }
})
