<template>
	<div> 
		<ion-textfield :label="label" :value="value" :required="required" variant="outlined" type="type" :placeholder="placeholder" @input="updateInputValue" />
	</div>
</template>

<script setup>
	import IonTextfield from '@/components/ions/IonTextfield.vue'
	
	const props = defineProps({
		label: {
			type: String,
			required: false,
			default: '',
		},

		type: {
			type: String,
			required: false,
			default: 'text',
		},

		value: {
			type: String,
			required: false,
			default: '',
		},
		
		required: {
			type: Boolean,
			required: false,
			default: false,
		},

		placeholder: {
			type: String,
			required: false,
			default: '',
		},
		
		rules: {
			type: Array,
			required: false,
			default: () => ([]),
		},
	})

	const emit = defineEmits(['input'])

	const updateInputValue = (newValue) => {
		emit('input', newValue)
	}

</script>