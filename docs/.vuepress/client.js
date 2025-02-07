import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'
// import Layout from './layouts/Layout.vue'
// import VPHomeBox from './layouts/VPHomeBox.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue' //注册Swiper为全局组件
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
    //app.component('Layout', Layout)
    //app.component('VPHomeBox', VPHomeBox)
    app.component('Swiper', Swiper)
  },
})
