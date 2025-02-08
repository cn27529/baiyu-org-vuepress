# my-vuepress-site

The Site is generated using [vuepress](https://vuepress.vuejs.org/) and [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume)

## Install

```sh
pnpm i
```

## Usage

```sh
# start dev server
pnpm docs:dev
# build for production
pnpm docs:build
# preview production build in local
pnpm docs:preview
# update vuepress and theme
pnpm vp-update
```

## Documents

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
- [markdown-emoji](https://dev.to/nikolab/complete-list-of-github-markdown-emoji-markup-5aia)
- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)
- [VuePress 生态系统](https://ecosystem.vuejs.press/zh/themes/default/frontmatter.html#features)

## deploys

### Netlify
```inputs
Build command npm: run docs:build
Publish directory: docs/.vuepress/dist
```
-[baiyu.netlify.app](https://baiyu.netlify.app/)

### Vercel