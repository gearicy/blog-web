<template>
    <div class="back-image"></div>
    <div class="container">
        <div class="lover">
            <div class="lover-item">
                <img src="~/assets/images/yyf.jpeg" alt="YYF">
                <span>YYF</span>
            </div>
            <div class="lover-item">
                <img src="~/assets/images/heart.svg" class="heart" alt="heart">
            </div>
            <div class="lover-item">
                <img src="~/assets/images/zqq.jpeg" alt="ZQQ">
                <span>ZQQ</span>
            </div>
        </div>
        <div class="story">
            <div class="story-time">
                <div class="time-title">
                    <span>这是我们一起走过的</span>
                </div>
				<client-only>
					<div class="time-count">
						<span>第</span>
						<span class="time-num">{{ Y }}</span>
						<span>年</span>
						<span class="time-num">{{ M }}</span>
						<span>月</span>
						<span class="time-num">{{ D }}</span>
						<span>日</span>
						<span class="time-num">{{ h }}</span>
						<span>时</span>
						<span class="time-num">{{ m }}</span>
						<span>分</span>
						<span class="time-num">{{ s }}</span>
						<span>秒</span>
					</div>
				</client-only>
            </div>
            <ol class="story-line">
                <li class="story-line-item" v-for="(item, index) in timeline" :key="index">
                    <div class="content-wrap">
                        <div class="content-text" v-html="item.content"></div>
                        <div class="content-time"><span>☁</span> {{item.dateTime}}</div>
                    </div>
                </li>
            </ol>
            <div class="publish">❀</div>
        </div>
    </div>
    <client-only>
        <xe-backtop v-if="getPlatform() === 'PC'"></xe-backtop>
    </client-only>
</template>

<script lang="ts" setup>
    useHead({
        title: '我们'
    })

	let { Y, M, D, h, m, s } = toRefs(reactive(dateDiff('2019/8/7'))) // 2019年七夕
	let timer:NodeJS.Timer | null = null
	onMounted(() => {
		timer = setInterval(() => {
			s.value += 1
			if (s.value > 59) { s.value = 0; m.value += 1 }
			if (m.value > 59) { m.value = 0; h.value += 1 }
		}, 1000)
	})
	onUnmounted(() => timer && clearInterval(timer))

    const timeline = reactive([
        {
            content: '我们懂得很多道理，但还是过不好这一生。',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '岁月是把杀猪刀，今日拿来切蛋糕！',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '小时候没上什么兴趣班，长大了也没什么兴趣上班～',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '晨跑好还是夜跑好？主要看你想吃豆腐脑还是烧烤',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '好累，今天又看了一天的书：《小红书》',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '只能微信，不能全信 ：）',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '运动是一种享受，但我不爱运动，因为我不是那种贪图享受的人',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '你说天长，我就递酒',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '你只能折腾到在乎你的人，对于不在乎你的人，忘记了你的人，你的所作所为根本起不了任何作用',
            dateTime: '2023-06-02 13:14:00'
        },
        {
            content: '过节了，朋友问我还是一个人吗？我笑了，难道我会变成一条狗吗？',
            dateTime: '2023-06-02 13:14:00'
        }
    ])
</script>

<style scoped>@import url("~/assets/styles/family.css");</style>