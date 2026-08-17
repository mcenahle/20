import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "我的20岁",
  description: "记录我的20岁！",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开始页', link: '/start' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcenahle/20' }
    ],

    editLink: {
      pattern: 'https://github.com/mcenahle/20/edit/main/docs/:path',
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    darkModeSwitchLabel: "外观",
    darkModeSwitchTitle: "切换到深色模式",
    lightModeSwitchTitle: "切换到浅色模式",
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,

    footer: {
      copyright: `Copyright © 2026 20.mcenahle.page`,
      message:
          '以此记录我的20岁.',
    },
  }
})

