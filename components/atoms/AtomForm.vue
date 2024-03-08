<template>
	<ion-form ref="form" v-bind="$attrs">
		<slot />
	</ion-form>
</template>

<script setup>
	import IonForm from '@/components/ions/IonForm.vue'
</script>