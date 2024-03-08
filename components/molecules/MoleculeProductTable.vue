<template>
	<div>
		<atom-product-table :items="items" @edit="editProduct" @delete="deleteProduct" />
	</div>
</template>

<script setup>
	import AtomProductTable from '@/components/atoms/AtomProductTable.vue'
	import { defineEmits } from 'vue'

	const emit = defineEmits(['editProduct', 'deleteProduct'])

	const props = defineProps({
		items: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})
	
	const editProduct = (product) => {
		emit('editProduct', product)
	}

	const deleteProduct = (product) => {
		emit('deleteProduct', product.id)
	}
</script>