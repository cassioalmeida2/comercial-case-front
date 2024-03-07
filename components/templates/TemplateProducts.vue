<template>
	<div>
		<div class="d-flex justify-space-between">
			<h1 class="text-h5 text-primary mb-4"> Produtos </h1>
			<atom-button> 
				<SvgoPlus class="pa-0 mr-1 icon-default" />
				<span>Novo produto</span>
			</atom-button>
		</div>
		<div class="text-right mt-5">
			<molecule-product-table :items="items" />
		</div>
	</div>
</template>

<script setup>
	import AtomButton from '@/components/atoms/AtomButton.vue'
	import MoleculeProductTable from '@/components/molecules/MoleculeProductTable.vue'

	const items = [
		{id: 1, name: 'Stone Station', active: 'Sim', actions: {id: 1, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}},
		{id: 2, name: 'Mailing List', active: 'Sim', actions: {id: 1, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}},
		{id: 3, name: 'Zeus', active: 'Sim', actions: {id: 1, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}},
	]

	const props = defineProps({
		content: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})

</script>

<style lang="scss" scoped>

</style>