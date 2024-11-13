import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/白玉logo.png',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',
  appearance: true,
  social: [
    { icon: 'facebook', link: 'https://www.facebook.com/chcbaiyu' },
    { icon: 'github', link: 'https://github.com/cn27529/learn-vuepress-' },
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2024 powered by baiyu 彰化縣白玉功德會',
  },
  lastUpdated: false,
  createTime: false,
  editLink: false,
  lang: 'zh-TW',

  locales: {
    '/': {
      profile: {
        avatar: '/images/白玉logo.png',
        name: '彰化縣白玉功德會',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    // '/en/': {
    //   profile: {
    //     avatar: '/白玉logo.png',
    //     name: 'Baiyu Site',
    //     description: '',
    //     // circle: true,
    //     // location: '',
    //     // organization: '',
    //   },

    //   navbar: enNavbar,
    //   notes: enNotes,
    // },
  },
})
