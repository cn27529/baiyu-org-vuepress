import { defineThemeConfig } from "vuepress-theme-plume";
import { enNavbar, zhNavbar } from "./navbar";
import { enNotes, zhNotes } from "./notes";

const currentDate = new Date();
let Copyright_year = currentDate.getFullYear().toString();

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/白玉logo.png",
  logoDark: "/白玉logo.png",
  // your git repo url
  docsRepo: "",
  docsDir: "docs",
  appearance: true,
  // 控制部分自动生成
  autoFrontmatter: {
    permalink: true, // 是否生成永久链接
    createTime: true, // 是否生成创建时间
    title: true, // 是否生成标题
  },
  social: [
    //{ icon: "facebook", link: "https://www.facebook.com/chcpalyul" },
    { icon: "facebook", link: "https://www.facebook.com/palyul520" },
    {
      icon: "github",
      link: "https://github.com/cn27529/learn-vuepress-theme-plume",
    },
  ],
  footer: {
    message: "",
    copyright: "Copyright © " + Copyright_year + " powered by 彰化縣白玉功德會",
  },
  //是否启用 最近更新时间戳，类型： false | LastUpdatedOptions
  lastUpdated: {
    formatOptions: { dateStyle: "short", timeStyle: "short" },
  },
  //是否启用 贡献者列表
  contributors: false,
  createTime: true,
  editLink: false,
  //lang: "zh-CN",

  locales: {
    "/": {
      profile: {
        avatar: "/白玉logo.png",
        name: "彰化縣白玉功德會",
        description: "尊嚴晚年照顧無憂 品牌承諾白玉相伴",
        circle: true,
        location: "杭州，中国",
        organization: "xxx公司",
        layout: "right",
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
});
