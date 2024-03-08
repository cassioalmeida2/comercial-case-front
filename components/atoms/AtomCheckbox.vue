<template>
	<ion-checkbox :label="label" v-model="selectedValues" :value="value" :color="color" @change="updateInputValue" />
</template>

<script setup>
	import IonCheckbox from '@/components/ions/IonCheckbox.vue'
  import { ref } from 'vue'
	
	const props = defineProps({
		label: {
			type: String,
			required: true,
			default: '',
		},

		selected: {
			type: Array,
			required: true,
			default: () => ([]),
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

  const selectedValues = ref(props.selected)

	const updateInputValue = (newValue) => {
		emit('change', newValue)
	}

</script>
