<template>
	<div>
		<div class="d-flex justify-space-between">
			<h1 class="text-h5 text-primary mb-4"> Vincular Produtos </h1>
		</div>
		<div class="text-right mt-5">
			<molecule-link-table :content="content" @deleteLink="deleteLink" @editLink="openDialogEdit" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import MoleculeLinkForm from '@/components/molecules/MoleculeLinkForm.vue'
	import MoleculeLinkTable from '@/components/molecules/MoleculeLinkTable.vue'

	const emit = defineEmits(['registerLink'])
	const linkForm = ref(null)

	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({})
		}
	})

	const registerLink = (link) => {
		emit('registerLink', link)
	}

	const editLink = (link) => {
		emit('editLink', link)
	}

	const deleteLink = (linkId) => {
		emit('deleteLink', linkId)
	}

	const openDialogEdit = (link) => {
		linkForm.value.openDialogLinkEdit(link)
	}
</script>