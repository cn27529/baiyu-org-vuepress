---
#home: true
pageLayout: home
title: 白玉首頁
createTime: 2024/11/10 10:35:13
permalink: /
externalLinkIcon: false
config:
  -
    type: hero
    full: true
    background: 'tint-plate'
    tintPlate: '150,150,150' #表示red,green,blue 基准色值，范围为 0 ~ 255
    #tintPlate: { { value: 220, offset: 36 }, g: { value: 220, offset: 36 }, b: { value: 220, offset: 36 } }
    #background: https://api.pengzhanbo.cn/wallpaper/bing    
    filter: 
    hero:
      name: 尊嚴晚年照顧無憂
      tagline: 品牌承諾白玉相伴
      text: 提供全人、全程、全方位之照顧服務網，乃追求實現在地老化安養、尊嚴向晚。
      # Public 文件路径
      heroImage: /白玉logo.png
      #如果是非预设背景，可以设置背景图片的滤镜效果
      filter: 
      actions:
        -
          theme: alt
          text: 認識白玉
          link: /about
          target: '_self'
        # -
        #   theme: brand
        #   text: Example page
        #   link: /example
        

# watermark:
#   width: 300
#   height: 300
#   content: 彰化縣白玉功德會所有
#   opacity: 0.5

---

<style>

@media screen and (max-width: 500px) {
  .content .hero-name, .content .hero-tagline{
    font-size: 34px;
    display: block;
  }

  .content .hero-text{
    color: #ffffff;
    font-size: 19px;
  }
}

.content .hero-text{
  color: #ffffff;
}



</style>