<template>
	<div> 
		<ion-textfield :label="label" v-model="valueDefault" :required="required" variant="outlined" :type="type" :placeholder="placeholder" @input="updateInputValue" />
	</div>
</template>

<script setup>
	import { ref, defineEmits } from 'vue'
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

		name: {
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

	const valueDefault = ref(props.value)

	const updateInputValue = (newValue) => {
		let inputValue = {field: props.name, value: newValue}
		emit('input', inputValue)
	}

</script>