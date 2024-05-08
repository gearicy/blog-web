<template>
	<!-- 内容 -->
    <div class="container">
        <div class="banner">
            <img src="~/assets/images/back-5.jpg" alt="分类文章列表">
        </div>
        <div class="category">
            <span>{{category.name}} 共 {{category.articleCount}} 篇</span>
        </div>
        <div class="discovery">
            <span class="yyc yy-leaf"></span>
            <span>发现</span>
        </div>
        <div class="posts-wrap">
            <div class="posts-list">
                <template v-for="item in listArticle.list" :key="item.id">
                    <NuxtLink :to="`/article/${item.id}`" class="posts-item shadow-box">
                        <div class="posts-item__image"><img :src="'/api/' + item.coverImg" alt="article"></div>
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
            <div class="posts-none" v-if="listArticle.list.length === 0">
                <img class="posts-none__img" src="~/assets/images/data-none.png" alt="">
                <div class="posts-none__txt">Oops，该分类下暂无内容，下次再来吧 ：)</div>
            </div>
        </div>
        <div class="paging" v-if="pageTotal > 0">
            <button class="paging__button" @click="pagingPrev" :disabled="route.params.page === '1'">上一页</button>
            <div class="paging__size">{{ route.params.page }} / {{pageTotal}}</div>
            <button class="paging__button" @click="pagingNext" :disabled="~~route.params.page === pageTotal">下一页</button>
        </div>
    </div>
    <client-only>
        <xe-backtop v-if="getPlatform() === 'PC'"></xe-backtop>
    </client-only>
</template>

<script lang="ts" setup>
import { IArticleList } from 'models/IArticle'
import ICategory from 'models/ICategory'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const page = route.params.page
const size = 5

const listArticle = await useServerRequest<{ list:IArticleList[], total: number }>('web-article', { query: { categoryId: id, pageIndex: page, pageSize: size } })
const pageTotal = ref(Math.ceil(listArticle.total / size))

if (~~page > pageTotal.value) {
    router.replace(`/article/list/${id}/${pageTotal.value}`)
}

const category = await useServerRequest<ICategory>(`web-category/${id}`)
useHead({ title: category.name })

const pagingPrev = () => {
    router.push(`/article/list/${id}/${+page - 1}`)
}
const pagingNext = () => {
    router.push(`/article/list/${id}/${+page + 1}`)
}
</script>

<style scoped>@import url("~/assets/styles/list.css");</style>