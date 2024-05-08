<template>
    <div class="search">
        <div class="search-item">
            <input class="search-item-text" type="search" v-model="title" @change="searchArticle" placeholder="请输入标题关键字进行搜索(Enter回车)…">
        </div>
    </div>
    <div class="back-image"></div>
    <div class="posts-list">
        <template v-for="item in articleList" :key="item.id">
            <NuxtLink :to="`/article/${item.id}`" class="posts-item shadow-box">
                <div class="posts-item__infos">
                    <div class="info__dates"><span class="yyc yy-date"></span><span>发布于 {{dateFormat(item.createTime)}}</span></div>
                    <h3 class="info__title">{{item.title}}</h3>
                    <div class="info__total">
                        <div class="total__item"><span class="yyc yy-fire"></span><span>{{item.viewCount}} 阅读</span></div>
                        <div class="total__item"><span class="yyc yy-comment"></span><span>{{item.commentCount}} 条评论</span></div>
                        <div class="total__item"><span class="yyc yy-heart"></span><span>YYF</span></div>
                    </div>
                </div>
            </NuxtLink>
        </template>
    </div>
    <xe-paging :current-page="currentPage" :page-total="pageTotal" @change="pageChange"></xe-paging>
</template>

<script lang="ts" setup>
    import { IArticleList } from 'models/IArticle'
    useHead({ title: '文章' })

    const title = ref('')
    const pageSize = 10
    const pageTotal = ref(0)
    const currentPage = ref(1)

    // 文章列表
    const articleList = ref<IArticleList[]>([])
    const articleCount = ref(0)
    const getArticles = async () => {
        const result = await useServerRequest<{ list: IArticleList[], total: number }>('web-article', {
            query: { 
                pageIndex: currentPage.value,
                pageSize,
                title: title.value
            }
        })
        articleList.value = result.list
        articleCount.value = result.total
        pageTotal.value = Math.ceil(result.total / pageSize)
    }
    getArticles()

    // 文章分页
    const pageChange = (_currentPage: number) => {
        currentPage.value = _currentPage
        getArticles()
    }

    // 标题搜索
    const searchArticle = () => { currentPage.value = 1; getArticles() }
</script>

<style scoped>@import url("~/assets/styles/search.css");</style>