<template>
<div>
	<v-text-field v-bind="$attrs" @input="updateInputValue" />
</div>
</template>

<script setup>
	import { defineEmits } from 'vue'
	const emit = defineEmits(['input'])

	const updateInputValue = (event) => {
		emit('input', event.target.value)
	}
</script>