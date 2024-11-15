import { defineNavbarConfig } from "vuepress-theme-plume";

export const zhNavbar = defineNavbarConfig([
  { text: "首頁", link: "/" },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  { text: "認識白玉", link: "about" },
  { text: "白玉服務據點", link: "locations" },
  { text: "財報年報", link: "/finace/" },
  { text: "社會救助", link: "/social-support/" },
  { text: "捐款捐物", link: "donate" },
  { text: "我們的團隊", link: "ourteam" },
  // {
  //   text: '下拉頁面',
  //   items: [{ text: '示例', link: '/notes/demo/README.md' }]
  // },
  { text: "多頁面", link: "/demo/" },
]);

export const enNavbar = defineNavbarConfig([
  //{ text: 'Home', link: '/en/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  //{ text: "認識白玉", link: "/about" },
  //{ text: "白玉服務據點", link: "/locations" },
  //{ text: "財報年報", link: "/finace" },
  //{ text: "社會救助", link: "/social-support" },
  // {
  //   text: 'Notes',
  //   items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  // },
  //{ text: "多頁面", link: "/notes/demo/" },
]);
