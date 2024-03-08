<template>
	<v-text-field v-bind="$attrs" v-model="value" @input="updateInputValue" />
</template>

<script setup>
	import { defineEmits } from 'vue'
	const emit = defineEmits(['input'])

	const updateInputValue = (event) => {
		emit('input', event.target.value)
	}
</script>