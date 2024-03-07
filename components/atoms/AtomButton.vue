<template>
	<ion-button :color="color" elevation="0" class="atom-button">
		<slot />
	</ion-button>
</template>

<script setup>
	import IonButton from '@/components/ions/IonButton.vue'

	const props = defineProps({
		color: {
			type: String,
			required: false,
			default: 'primary',
		},
	})
</script>

<style lang="scss" scoped>
	.atom-button {
		text-transform: none;
	}
</style>