import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  sitemap: {
    hostname: 'https://docs.tools.kinda.info',
  },
  lastUpdated: true,
  title: "Kinda的工具库",
  description: "Kinda的工具库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'API概览',
        link: '/api-refrence'
      },
      {
        text: '类型概览',
        link: '/class-refrence'
      },
      {
        text: '更新日志',
        link: '/changelog'
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/Alndaly">Kinda Hall</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alndaly/kinda-tools-docs' }
    ]
  }
})
