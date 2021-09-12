import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-74368525","/CSS/","",["/CSS/index.html","/CSS/README.md"]],
  ["v-67daacd8","/Express/","",["/Express/index.html","/Express/README.md"]],
  ["v-12e0f68b","/HTML/","",["/HTML/index.html","/HTML/README.md"]],
  ["v-2d0a1e6d","/JS/","",["/JS/index.html","/JS/README.md"]],
  ["v-743a92eb","/Koa/","",["/Koa/index.html","/Koa/README.md"]],
  ["v-134222f4","/Node/","",["/Node/index.html","/Node/README.md"]],
  ["v-5b4756e9","/React/","React",["/React/index.html","/React/README.md"]],
  ["v-743faa02","/Vue/","",["/Vue/index.html","/Vue/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
