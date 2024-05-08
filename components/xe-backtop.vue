<template>
    <div class="cats" :style="{ top: catsTop }" ref="cats" @click="catTop"></div>
</template>

<script lang="ts" setup>
    const cats = ref<HTMLElement>()
    const catsTop = ref('-80px')
    let doctH = 0 // 文档高度
    let viewH = 0 // 可视区域高度

    const catTop = () => {
        document.documentElement.scrollTop = document.body.scrollTop = 0
    }

    const calcScroll = () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop
        const hideH = doctH - viewH
        const rate = scroll / hideH
        const result = Math.floor(viewH * rate)
        catsTop.value = `${result - 128}px`
        doctH === scroll + viewH ? cats.value?.classList.add('bottom') : cats.value?.classList.remove('bottom')
    }

    onMounted(async () => {
		await nextTick(() => {
            doctH = document.body.clientHeight
            viewH = window.innerHeight || document.documentElement.clientHeight
            window.addEventListener('scroll', calcScroll)
        })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', calcScroll)
    })
</script>

<style scoped>
/* 回到顶部 - 小猫咪 */
.cats {
    position: fixed;
    right: 56px;
    top: -80px;
    z-index: 9999;
    width: 64px;
    height: 64px;
    transform: translateX(50%);
    background: url('~/assets/images/cat.png') no-repeat center center / contain;
    cursor: pointer;
}

.cats::after {
    position: absolute;
    content: '到底啦～';
    right: 55%;
    top: -110%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('~/assets/images/cat-word.png') no-repeat center center / contain;
    font-size: 14px;
    color: rgb(57, 197, 187);
    padding-top: 6px;
    box-sizing: border-box;
    opacity: 0;
    transition: all .2s ease-in-out;
    pointer-events: none;
}

.cats.bottom::after {
    opacity: 1;
}
</style>