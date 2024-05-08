<template>
    <div v-if="props.modelValue" class="toast-all">
        <span class="toast-all-title"><slot /></span>
    </div>
</template>

<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{modelValue: boolean, duration?: number }>(),
		{ duration: 2500 }
	)

	const emits = defineEmits<{ 
		(event: 'update:modelValue', isClose: boolean): void
	}>()

	watch(() => props.modelValue, (val) => {
		val && setTimeout(() => emits('update:modelValue', false), props.duration)
	})
</script>

<style scoped>
    .toast-all {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, .8);
        border-radius: 5px;
        padding: 8px 12px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
    }
    .toast-all-title {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
    }
</style>