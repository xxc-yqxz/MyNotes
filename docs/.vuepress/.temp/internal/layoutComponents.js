import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/3_webfront2021/大四上/MyNotes/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/3_webfront2021/大四上/MyNotes/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
