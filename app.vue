<template>
	<NuxtLayout />
</template>

<script lang="ts" setup>
useHead({
	titleTemplate: (_title) => {
		return _title ? _title + ' - gearicy的个人网站' : 'gearicy的个人网站'
	}
})
</script>
