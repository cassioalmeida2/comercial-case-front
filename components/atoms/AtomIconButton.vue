<template>
	<ion-button icon variant="text" class="pa-0 ma-0" :color="color">
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