export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "logo.jpg",
    "features": [
      {
        "title": "基础",
        "details": "HTML、CSS、JS、Less、Sass等",
        "link": "/web/",
        "imgUrl": "/img/web.png"
      },
      {
        "title": "框架",
        "details": "Vue、VuePress、React等",
        "link": "/ui/",
        "imgUrl": "/img/ui.png"
      },
      {
        "title": "后端",
        "details": "Node、Express、Koa等",
        "link": "/technology/",
        "imgUrl": "/img/other.png"
      }
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
