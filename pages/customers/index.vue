<template>
  <div>
		<template-customers :content="content" @registerCustomer="registerCustomer" @deleteCustomer="deleteCustomer" @editCustomer="editCustomer" />
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import TemplateCustomers from '@/components/templates/TemplateCustomers.vue'
	import { useRouter } from 'vue-router'
	import { useCustomersStore } from '/store/customers.js'

	const router = useRouter()
	const store = useCustomersStore()
	const content = ref({
		customers: []
	})

	onMounted(() => {
		store.checkCustomers()
		content.value.customers = store.customers
	})

	const registerCustomer = async (customer) => {
		await store.addCustomer(customer)
		content.value.customers = store.customers
	}

	const deleteCustomer = async (customerId) => {
		await store.deleteCustomer(customerId)
		content.value.customers = store.customers
	}

	const editCustomer = async (customer) => {
		await store.editCustomer(customer)
		content.value.customers = store.customers
	}
</script>