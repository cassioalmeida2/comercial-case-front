<template>
	<div>
		<div class="d-flex justify-space-between">
			<h1 class="text-h5 text-primary mb-4"> Produtos </h1>
			<molecule-product-form ref="productForm" @registerProduct="registerProduct" @editProduct="editProduct" />
		</div>
		<div class="text-right mt-5">
			<molecule-product-table :items="content.products" @deleteProduct="deleteProduct" @editProduct="openDialogEdit" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import MoleculeProductForm from '@/components/molecules/MoleculeProductForm.vue'
	import MoleculeProductTable from '@/components/molecules/MoleculeProductTable.vue'

	const emit = defineEmits(['registerProduct'])
	const productForm = ref(null)

	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({})
		}
	})



	const registerProduct = (product) => {
		emit('registerProduct', product)
	}

	const editProduct = (product) => {
		emit('editProduct', product)
	}

	const deleteProduct = (productId) => {
		emit('deleteProduct', productId)
	}

	const openDialogEdit = (product) => {
		productForm.value.openDialogProductEdit(product)
	}
</script>