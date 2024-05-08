<template>
    <!-- 页头 -->
    <header :class="{header: isTransparent}" :style="{opacity}">
        <div class="logo"><NuxtLink to="/">gearicy YYF</NuxtLink></div>
        <nav class="nav">
            <ul class="menu">
                <li><NuxtLink to="/" activeClass="active"><span class="yyc yy-home"></span> <span>首页</span></NuxtLink></li>
                <li><NuxtLink to="/search" activeClass="active"><span class="yyc yy-message"></span> <span>文章</span></NuxtLink></li>

				<!-- <li><NuxtLink to="/link" activeClass="active"><span class="yyc yy-link"></span> <span>友链</span></NuxtLink></li> -->
				<!-- <li><NuxtLink to="/about" activeClass="active"><span class="yyc yy-bear"></span> <span>关于</span></NuxtLink></li> -->
            </ul>
        </nav>

        <!-- 移动端 -->
        <span class="yyp yy-menu mobile-nav-button" id="mobielMenuSwitch" @click="openMenu"></span>
    </header>

    <!-- 移动端菜单 -->
    <div class="mobile-nav-slider" :style="{zIndex: navZindex}">
        <div class="mobile-nav-mask" @click="closeMenu" :style="{left: mask_left}"></div>
        <nav class="mobile-nav" :style="{left: menu_left}">
            <div class="mobile-avatar">
                <img src="~/assets/images/yyf.jpeg" alt="gearicy" width="100%" height="100%">
            </div>
            <div class="mobile-summary">
                <div class="summary-item">
                    <span>文章</span>
                    <span>{{articleCount}}</span>
                </div>
                <div class="summary-item">
                    <span>分类</span>
                    <span>{{categoryCount}}</span>
                </div>
            </div>
            <div class="split-line"></div>
            <ul class="mobile-menu">
				<li><NuxtLink to="/" activeClass="active"><span class="yyc yy-home"></span> <span>首页</span></NuxtLink></li>
                <li><NuxtLink to="/search" activeClass="active"><span class="yyc yy-message"></span> <span>文章</span></NuxtLink></li>
				<li><NuxtLink to="/link" activeClass="active"><span class="yyc yy-link"></span> <span>友链</span></NuxtLink></li>
				<li><NuxtLink to="/about" activeClass="active"><span class="yyc yy-bear"></span> <span>关于</span></NuxtLink></li>
            </ul>
        </nav>
    </div>

    <NuxtPage />

    <!-- 页脚 -->
    <footer>
        <div class="footer__title">能够拒绝的都不叫诱惑</div>
        <div class="footer__icp">
            <span>© 2023 gearicy YYF</span>
            <NuxtLink to="https://beian.miit.gov.cn/" target="_blank" style="margin: 0 5px;">/ 备案号</NuxtLink>
            <!-- <client-only>
                <NuxtLink to="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502006930" target="_blank" v-if="getPlatform() === 'PC'">/ 鄂公网安备42018502006930号</NuxtLink>
            </client-only> -->
        </div>
    </footer>
</template>

<script lang="ts" setup>
    //#region == 手机端导航菜单动效控制 ==
    let navZindex = ref(-100)
    let mask_left = ref('100%')
    let menu_left = ref('-50%')
    const openMenu = () => {
        navZindex.value = 100
        mask_left.value = '50%'
        menu_left.value = '0'
    }
    const closeMenu = () => {
        mask_left.value = '100%'
        menu_left.value = '-50%'
        setTimeout(() => navZindex.value = -100, 600)
    }

    // 监听路由变化，切换页面后自动关闭菜单
    const route = useRoute()
    watch(() => route.path, () => getPlatform() === 'Mobile' && closeMenu())
    //#endregion
    
    //#region == 电脑端导航菜单动效控制 ==
    const opacity = ref(1)
    const isTransparent = ref(false)

    // 向上滚动时显示，到达顶部，背景设为透明，通过样式 header 控制
    const scrollUp = (scrollTop: number) => {
        opacity.value = 1
        isTransparent.value = scrollTop > 150
    }

    // 向下滚动时隐藏
    const scrollDown = (_: number) => {
        opacity.value = 0
    }

    onMounted(() => scrollDirection(scrollUp, scrollDown))
    //#endregion

	const articleCount = ref(0)
	const categoryCount = ref(0)
	const getCount = async () => {
		if (getPlatform() === 'Mobile') {
			await nextTick(async () => {
                const count = await useServerRequest<{articleCount:number, categoryCount:number}>('web-article/total')
                articleCount.value = count.articleCount
                categoryCount.value = count.categoryCount
            })
		}
	}
	getCount()
</script>