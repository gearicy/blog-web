import RSS from "rss"

export default defineEventHandler(async (event) => {
    try {
        const response = await fetch('https://gearicy.top/api/web-article?pageIndex=1&pageSize=20')
        if (!response.ok) {
            throw new Error(response?.status?.toString())
        }
        const result = await response.json()
        const feed = new RSS({
            title: 'gearicy的个人网站',
            site_url: 'https://gearicy.top',
            feed_url: 'https://gearicy.top/rss',
			image_url: 'https://gearicy.top/favicon.ico',
			description: 'gearicy，一个技术不咋地，头却要秃了的程序员：）',
			copyright: 'Copyright © 2023 gearicy YYF',
			webMaster: 'gearicy',
			managingEditor: 'gearicy',
			language: 'zh-cn'
        });
        for (const post of result.data.list) {
            feed.item({
                title: post.title,
                url: `https://gearicy.top/article/${post.id}`,
                description: post.intro,
                date: post.createTime,
                categories: [post.categoryName],
				author: 'gearicy'
            })
        }
        const feedString = feed.xml({ indent: true })
        event.node.res.setHeader('content-type', 'text/xml')
        event.node.res.end(feedString)
    } catch (e) {
        return e
    }
});