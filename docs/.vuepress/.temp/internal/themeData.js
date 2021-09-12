export const themeData = {
  "logo": "/logo.jpg",
  "navbar": [
    {
      "text": "基础",
      "children": [
        {
          "text": "HTML",
          "link": "/HTML"
        },
        {
          "text": "CSS",
          "link": "/CSS"
        },
        {
          "text": "JS",
          "link": "/JS"
        }
      ]
    },
    {
      "text": "框架",
      "children": [
        {
          "text": "Vue",
          "link": "/Vue"
        },
        {
          "text": "React",
          "link": "/React/"
        }
      ]
    },
    {
      "text": "后端",
      "children": [
        {
          "text": "Node",
          "link": "/Node"
        },
        {
          "text": "Express",
          "link": "/Express"
        },
        {
          "text": "Koa",
          "link": "/Koa"
        }
      ]
    },
    {
      "text": "GitHub",
      "link": "https://github.com/xxc-yqxz/MyNotes"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
