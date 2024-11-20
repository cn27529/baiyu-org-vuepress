---
title: display
createTime: 2024/11/20 10:41:58
permalink: /display
---

## badge

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
- VuePress - <Badge type="important" text="v2" vertical="middle" />
- VuePress - <Badge type="info" text="v2" vertical="middle" />
- VuePress - <Badge type="note" text="v2" vertical="middle" />

## 提示容器

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: info
这是一个信息
:::

::: important
这是一个重要信息
:::

::: note
这是一个备注
:::

::: details
这是一个 details 标签
:::

## 代碼選項卡

:::code-tabs
@tab pnpm
```sh
pnpm add vuepress@next vuepress-theme-plume vue
```
@tab npm
```sh
npm install vuepress@next vuepress-theme-plume
```
@tab yarn
```sh
yarn add vuepress@next vuepress-theme-plume
```
@tab JavaScript

```js
const name = 'VuePress'
console.log(`你好，${name}！`)
```

@tab TypeScript

```ts
const name: string = 'VuePress'

console.log(`你好，${name}！`)
```
:::

## 選項卡
::: tabs

@tab 选项卡 1

这是选项卡 1 的内容。

```js
console.log('你好，VuePress!')
```

@tab 选项卡 2

这是选项卡 2 的内容。

- 列表项 1
- 列表项 2
- 列表项 3

:::