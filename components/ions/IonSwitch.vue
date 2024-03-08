<template>
	<div>
		<v-switch v-bind="$attrs" v-model="defaultValue" @change="updateInputValue" />
	</div>
</template>

<script setup>
	import { defineEmits } from 'vue'

	const props = defineProps({
		value: {
			type: Boolean,
			required: false,
			default: false,
		}
	})

	const defaultValue = ref(props.value);
	const emit = defineEmits(['change'])

	const updateInputValue = () => {
		emit('change', defaultValue.value)
	}
</script>