<template>
	<div>
		<atom-link-table :items="content" @edit="editLink" @delete="deleteLink" />
	</div>
</template>

<script setup>
	import AtomLinkTable from '@/components/atoms/AtomLinkTable.vue'
	import { defineEmits } from 'vue'

	const emit = defineEmits(['editLink', 'deleteLink'])

	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({})
		}
	})
	
	const editLink = (link) => {
		emit('editLink', link)
	}

	const deleteLink = (link) => {
		emit('deleteLink', link.id)
	}
</script>