import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
//import { searchPlugin } from "@vuepress-plume/plugin-search";
//import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      title: "彰化縣白玉功德會",
      lang: "zh-CN",
      description: "尊嚴晚年照顧無憂 品牌承諾白玉相伴",
    },
    // "/en/": {
    //   title: "Baiyu",
    //   lang: "en-US",
    //   description: "",
    // },
  },

  bundler: viteBundler(),

  // configure default theme

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: "https://bai-yu.org",    
    plugins: {
      
      //此插件可在在页面中添加水印，可以选择为 全局页面 或 部分页面添加水印，还可以选择添加 文字水印 或 图片水印。
      watermark: {
        enabled: false, // boolean 类型控制是否全局启用
        //enabled: (page) => true, // function 类型 过滤哪些页面启用水印
        delay: 500, // 添加水印的延时。以毫秒为单位。

        /**
         * 是否全屏水印，默认为 `true`，
         * 设置为 `false` 时，水印仅在 内容区域中显示。
         */
        fullPage: false,

        /** @see https://zhensherlock.github.io/watermark-js-plus/zh/config/ */
        watermarkOptions: {
          content: "彰化縣白玉功德會所有",
          // ...
        },
      },

      search: false, //searchPlugin(),
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        //强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ["shell", "bash", "typescript", "javascript"],
        theme: { light: "vitesse-light", dark: "vitesse-dark" },
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        //   include: true,
        //   chart: true,
        //   echarts: true,
        //   mermaid: true,
        //   flowchart: true,
      },
      
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        //主题支持在 markdown 中嵌入 PDF 文件，它能够在页面中直接阅读 PDF。该功能默认不启用。你需要在主题配置中开启。
        pdf: true,
        //caniuse: true,
        // plot: true,
        // bilibili: true,
         youtube: true,
        // icons: true,
        // codepen: true,
        // replit: true,
        // codeSandbox: true,
        // jsfiddle: true,
        // repl: {
        //   go: true,
        //   rust: true,
        //   kotlin: true,
        // },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
});
