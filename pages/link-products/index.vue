<template>
  <div>
		<template-products :content="content" @registerProduct="registerProduct" @deleteProduct="deleteProduct" @editProduct="editProduct" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import TemplateProducts from '@/components/templates/TemplateProducts.vue'
	import { useRouter } from 'vue-router'
	import { useProductsStore } from '/store/products.js'

	const router = useRouter()
	const store = useProductsStore()
	const content = ref({
		products: []
	})

	onMounted(() => {
		store.checkProducts()
		content.value.products = store.products
	})

	const registerProduct = async (product) => {
		await store.addProduct(product)
		content.value.products = store.products
	}

	const deleteProduct = async (productId) => {
		await store.deleteProduct(productId)
		content.value.products = store.products
	}

	const editProduct = async (product) => {
		await store.editProduct(product)
		content.value.products = store.products
	}
</script>