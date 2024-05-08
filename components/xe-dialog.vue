<template>
	<div
		v-if="props.modelValue"
		class="popup-mask"
		:class="{ 'popup-mask-show': isShow }"
		@click.stop="maskClose">
		<div
			class="popup"
            :style="{ width }"
			:class="{ 'popup-show': isShow, 'border-radius': props.isRadius }"
			@click.stop>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
	modelValue: boolean
    width?: string
	height?: string
	maskClosable?: boolean
	isRadius?: boolean
}>(), { width: '600px', height: 'auto', maskClosable: true, isRadius: true })

const emit = defineEmits<{ (event: 'update:modelValue', isClose: boolean): void }>()
const isShow = ref(false)
const maskClose = () => {
	isShow.value = false
	setTimeout(() => {
		emit('update:modelValue', false)
	}, 250);
}
watch(() => props.modelValue, (newValue) => {
	if (!newValue) return
	nextTick(() => {
		setTimeout(() => {
			isShow.value = newValue
		}, 50);
	})
})
</script>

<style scope>
.popup-mask {
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
	z-index: 2;
	background-color: rgba(0, 0, 0, .3);
	transition: all .2s ease-in-out;
	opacity: 0;
	visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}
.popup-mask-show {
	opacity: 1;
	visibility: visible;
}
.popup {
	z-index: 3;
	max-width: 85%;
	background-color: #fff;
	transform: translate3d(0, 100%, 0);
	transition: all .2s ease-in-out;
	overflow: hidden;
}
.popup-show {
	transform: translate3d(0, 0, 0);
}
.border-radius {
	border-radius: 10px;
}
</style>

