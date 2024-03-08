<template>
  <div>
		<template-links :content="content" @registerLink="registerLink" @deleteLink="deleteLink" @editLink="editLink" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import TemplateLinks from '@/components/templates/TemplateLinks.vue'
	import { useRouter } from 'vue-router'
	import { useLinksStore } from '/store/links.js'
	import { useCustomersStore } from '/store/customers.js'
	import { useProductsStore } from '/store/products.js'

	const router = useRouter()
	const linksStore = useLinksStore()
	const customersStore = useCustomersStore()
	const productsStore = useProductsStore()

	const content = ref({
		links: [],
		customers: [],
		products: []
	})

	onMounted(() => {
		linksStore.checkLinks()
		customersStore.checkCustomers()
		productsStore.checkProducts()
		content.value.links = linksStore.links
		content.value.customers = customersStore.customers
		content.value.products = productsStore.products
	})

	const registerLink = async (link) => {
		await linksStore.addLink(link)
		content.value.links = linksStore.links
	}

	const deleteLink = async (linkId) => {
		await linksStore.deleteLink(linkId)
		content.value.links = linksStore.links
	}

	const editLink = async (link) => {
		await linksStore.editLink(link)
		content.value.links = linksStore.links
	}
</script>