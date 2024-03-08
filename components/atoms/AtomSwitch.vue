<template>
	<div> 
		<ion-switch :label="label" :value="value" :color="color" hide-details @change="updateInputValue" />
	</div>
</template>

<script setup>
	import IonSwitch from '@/components/ions/IonSwitch.vue'
	
	const props = defineProps({
		label: {
			type: String,
			required: true,
			default: '',
		},

		value: {
			type: Boolean,
			required: true,
			default: false,
		},

		color: {
			type: String,
			required: false,
			default: 'primary',
		},
	})

	const emit = defineEmits(['change'])

	const updateInputValue = (newValue) => {
		emit('change', newValue)
	}

</script>