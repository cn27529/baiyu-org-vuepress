import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  // 配置 笔记侧边导航栏，用于导航向笔记内的所有文档，声明为 `auto` 的，将根据目录结构自动生成侧边栏导航
  sidebar: "auto",
});

const zhFinaceNote = defineNoteConfig({
  dir: "finace",
  link: "/finace",
  sidebar: "auto",
});

const zhSocialSupportNote = defineNoteConfig({
  dir: "social-support",
  link: "/social-support",
  sidebar: "auto",
});

export const zhNotes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [zhDemoNote, zhFinaceNote, zhSocialSupportNote],
});

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: ["", "foo", "bar"],
});

export const enNotes = defineNotesConfig({
  dir: "en/notes",
  link: "/en/",
  notes: [enDemoNote],
});
