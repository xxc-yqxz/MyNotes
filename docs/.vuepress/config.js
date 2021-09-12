const themeConfig = require('./config/themeConfig')
const moment = require('moment')
module.exports = {
    title: '轻语馆',
    description: '语轻星子的前端学习笔记馆',
    themeConfig,
    plugins: ['@vuepress/search', {
        searchMaxSuggestions: 10
    }, '@vuepress/last-updated',
        {
            transformer: (timestamp) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale("zh-cn")  // 此处可以设置语言
                return moment(timestamp).format('LL')   // 此处可以设置格式
            }
        }]
}