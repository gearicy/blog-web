<template>
    <div class="paging" v-if="pageTotal > 1">
        <button class="paging__button" @click="pagingPrev" :disabled="pageIndex === 1">上一页</button>      
        <div class="paging__size">
            <input type="text" class="paging__current" v-model.number="pageIndex" @change="jumpToPage">
            <span>/</span>
            <span>{{pageTotal}}</span>
        </div>
        <button class="paging__button" @click="pagingNext" :disabled="pageIndex === pageTotal">下一页</button>
    </div>
</template>

<script lang="ts" setup>
    // 参数及默认值
    const props = withDefaults(defineProps<{
        pageTotal: number,
        currentPage: number
    }>(), { pageTotal: 1, currentPage: 1 })

    // 自定义事件
    const emit = defineEmits<{ (event: 'change', currentPage: number): void }>()

    // 当前页
    const pageIndex = ref(1)

    // 上一夜
    const pagingPrev = () => {
        if (pageIndex.value > 1) {
            pageIndex.value -= 1
            emit('change', pageIndex.value)
        }
    }

    // 下一页
    const pagingNext = () => {
        if (pageIndex.value < props.pageTotal) {
            pageIndex.value += 1
            emit('change', pageIndex.value)
        }
    }

    // 跳转到第几页
    const jumpToPage = () => {
        if (/^\d+$/.test(pageIndex.value.toString())) {
            if (pageIndex.value < 1) {
                pageIndex.value = 1
            } else if (pageIndex.value > props.pageTotal) {
                pageIndex.value = props.pageTotal
            }
        } else {
            pageIndex.value = 1
        }
        emit('change', pageIndex.value)
    }

    // 当前页赋值
    watch(() => props.currentPage, (newValue, oldValue) => {
        pageIndex.value = props.currentPage
    })
</script>

<style scoped>
.paging {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-bottom: 80px;
}
.paging__button {
    border: 1px solid green;
    color: lightgreen;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: transparent;
    transition: all .3s linear;
}
.paging__button:hover {
    background-color: green;
    color: #fff;
}
.paging__button:disabled {
    border: 1px solid #999;
    color: #999;
    cursor: not-allowed;
}
.paging__button:disabled:hover {
    color: #999;
    background-color: transparent;
}
.paging__size {
    color: #fff;
    display: flex;
    gap: 7px;
    align-items: center;
}
.paging__current {
    border: none;
    width: 35px;
    text-align: center;
    border-radius: 4px;
    padding: 2px 0;
    background: rgba(255,255,255,.3);
    color: #fff;
}
</style>