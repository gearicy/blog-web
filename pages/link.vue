<template>
	<div class="back-image"></div>
	<div class="wrapper">
		<div class="title">朋友</div>
		<div class="sub-title">有朋自远方来，不亦乐乎 : ）</div>
		<div class="list">
            <template v-for="item in linkList" :key="item.id">
                <NuxtLink class="list-item" :to="item.href" external target="_blank">
                    <img :src="item.cover" alt="">
                    <span class="blog-title">{{item.title}}</span>
                    <span class="blog-slogan">{{item.slogan}}</span>
                    <span class="blog-signin">去做客</span>
                </NuxtLink>
            </template>
		</div>
	</div>
    <div class="notice">
        <div class="notice-content">
            附加要求及说明：只交换个人博客站点 / 必须是 https 安全站点 / 必须进行国内域名备案 / 博客运行稳定 / 博客内容持续更新和维护 / 注重 SEO 优化 / 联系方式：邮箱 281542025@qq.com
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ILink from 'models/ILink'
    useHead({ title: '友链' })
    const linkList = await useServerRequest<ILink[]>('web-link', {})
</script>

<style scoped>@import url("~/assets/styles/link.css");</style>