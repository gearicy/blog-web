<template>
    <!-- 首屏大背景 -->
    <div class="back-image" ref="birds">
        <client-only>
            <div class="text-box" v-if="getPlatform() === 'Mobile'">
                <div class="text">断剑重铸之日，骑士归来之时</div>
            </div>
        </client-only>
    </div>
    <div class="container">
        <section class="brand">
            <div class="wave-1"></div>
            <div class="wave-2"></div>
            <div class="arrow"><span class="yyp yy-arrow-down"></span></div>
        </section>
    </div>

    <!-- 内容 -->
    <div class="content">
        <div class="aside-wrap">
            <div class="summary shadow-box">
                <div class="avatar"><img src="~/assets/images/yyf.jpeg" alt="gearicy"></div>
                <div class="nickname">gearicy</div>
                <div class="count">
                    <div class="count__item">
                        <span>文章</span>
                        <span>{{articleCount}}</span>
                    </div>
                    <div class="count__item">
                        <span>评论</span>
                        <span>{{common.commentCount}}</span>
                    </div>
                    <div class="count__item">
                        <span>访客</span>
                        <span>{{common.visitCount}}</span>
                    </div>
                </div>
                <NuxtLink class="moments" to="/rss" external target="_blank">
                    <span class="yyp yy-rss-round" style="font-weight: bold;"></span>
                    <span>RSS-订阅</span>
                </NuxtLink>
            </div>
            <div class="category shadow-box">
                <div class="aside__title">
                    <span class="yyc yy-sort"></span>
                    <span>分类</span>
                </div>
                <ul class="category__list">
                    <li class="category__item" v-for="item of listCategory" :key="item.id">
                        <NuxtLink :to="`/article/list/${item.id}/1`">{{item.name}} ({{item.articleCount}}篇)</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="recommend shadow-box">
                <div class="aside__title">
                    <span class="yyc yy-read"></span>
                    <span>推荐文章</span>
                </div>
                <NuxtLink :to="`/article/${item.id}`" :title="item.title" v-for="item in common.recommend" :key="item.id">
                    <div class="article">
                        <div class="article__image"><img :src="'/api/' + item.coverImg" :alt="item.title" width="100%" height="100%"></div>
                        <div class="article__title">{{ item.title }}</div>
                        <div class="article__date"><span class="yyp yy-calendar"></span> <span>{{dateFormat(item.createTime)}}</span></div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="posts-wrap">
            <div class="notice">
                <span class="yyc yy-notice"></span>
                <span>{{ common.setting.notice || '个人博客上线啦，开心……' }}</span>
            </div>
            <div class="posts-list">
                <template v-for="item in listArticle" :key="item.id">
                    <NuxtLink :to="`/article/${item.id}`" class="posts-item shadow-box">
                        <div class="posts-item__image"><img :src="'/api/' + item.coverImg" :alt="item.title"></div>
                        <div class="posts-item__infos">
                            <div class="info__dates"><span class="yyc yy-date"></span><span>发布于 {{dateFormat(item.createTime)}}</span></div>
                            <h3 class="info__title">{{item.title}}</h3>
                            <div class="info__total">
                                <div class="total__item"><span class="yyc yy-fire"></span><span>{{item.viewCount}} 阅读</span></div>
                                <div class="total__item"><span class="yyc yy-comment"></span><span>{{item.commentCount}} 条评论</span></div>
                                <div class="total__item"><span class="yyc yy-heart"></span><span>YYF</span></div>
                            </div>
                            <div class="info__brief">{{ item.intro }}</div>
                            <div class="info__types">
                                <div class="types__item">
                                    <span class="yyc yy-tag"></span>
                                    <span>{{item.categoryName}}</span>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </template>
            </div>
            <div class="load-finished">~~~ 到底啦，首页仅展示最新的5篇文章喔 ~~~</div>
        </div>
    </div>

    <client-only>
        <xe-backtop v-if="getPlatform() === 'PC'"></xe-backtop>
    </client-only>
</template>

<script lang="ts" setup>
    import { IArticleList, IArticleRecommend } from 'models/IArticle'
    import ICategory from 'models/ICategory'
    import ISetting from 'models/ISetting'
    declare const VANTA: { CLOUDS: any }
    useHead({
		meta: [
            { name: 'keywords', content: 'gearicy|YYF|程序员|个人网站' },
			{ name: 'description', content: 'gearicy，一个技术不咋地，头却要秃了的程序员：）' }
		]
    })
    const birds = ref()
	let birdsInstance:any = null
    onMounted(() => {
		const platform = getPlatform()
        nextTick(() => {
            if (platform === 'PC') {
                birdsInstance = VANTA.CLOUDS({
                    el: birds.value,
                    backgroundAlpha: 0.3,
                    color1: 0x1a6138,
                    color2: 0xf6f7f7
                })
            }
        })
    })
	onUnmounted(() => birdsInstance && birdsInstance.destroy())
    
    // 文章列表
    const result = await useServerRequest<{ list: IArticleList[], total: number }>('web-article', { query: { pageIndex: 1, pageSize: 5 } })
    const listArticle = result.list

    // 分类列表
    const listCategory = await useServerRequest<ICategory[]>('web-category')

    // 文章总数
    const articleCount = computed(() => {
        let count = 0
        listCategory.forEach(x => count += x.articleCount)
        return count
    })

    // 推荐文章列表
    const common = await useServerRequest<{
        recommend: IArticleRecommend[],
        commentCount: number,
        visitCount: number,
        setting: ISetting
    }>('web-article/recommend')
</script>

<style scoped>@import url("~/assets/styles/index.css");</style>