import { defineClientConfig } from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'


// import './theme/styles/custom.css'
import Layout from './layouts/Layout.vue'

import VPHomeBox from './layouts/VPHomeBox.vue'

export default defineClientConfig({
  enhance({ app }) {
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)
    app.component('Layout', Layout)
    app.component('VPHomeBox', VPHomeBox)
  },
})
