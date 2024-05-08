// https://nuxt.com/docs/api/configuration/nuxt-config
import prismjs from 'vite-plugin-prismjs'
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'zh-CN'
            },
            script: [
                { src: '/scripts/three.min.js', tagPosition: 'bodyClose' },
                { src: '/scripts/vanta.clouds2.min.js', tagPosition: 'bodyClose' },
                // 下面是百度统计js挂载
                // { src: '/scripts/baidu.count.js', tagPosition: 'bodyClose' }
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
                { name: 'apple-mobile-web-app-capable', content: 'yes' },
                // 下面两个分别是百度和谷歌的站长验证
                // { name: 'google-site-verification', content: 'JowYQuWqC35V3BLZxyThd6D6HuRquWM7AeyGMTm4LwY' },
                // { name: 'baidu-site-verification', content: 'codeva-60SrpolTOU' }
            ]
        }
    },
    css: [
        '@/assets/styles/_font.css',
        '@/assets/styles/_reset.css',
        '@/assets/styles/header-footer.css'
    ],
	devtools: { enabled: true },
	devServer: {
		port: 5000
	},
	nitro: {
		routeRules: {
			'/api/**': {
				proxy: 'http://47.101.183.7:3000/**'
			}
		}
	},
	vite: {
		plugins: [
			prismjs({
				languages: [
					'css',
					'sass',
					'scss',
					'javascript',
					'html',
					'swift',
					'xml',
					'typescript',
					'dart',
					'csharp',
					'json',
					'sql',
					'bash',
					'md',
					'nginx',
					'cpp',
					'java'
				],
				plugins: ['toolbar', 'show-language', 'copy-to-clipboard'],
				theme: 'tomorrow',
				css: true
			})
		]
	},
    experimental: {
        externalVue: false,
        inlineSSRStyles: false
    }
})
