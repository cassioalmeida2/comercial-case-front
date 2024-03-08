<template>
	<div>
		<div class="d-flex justify-space-between">
			<h1 class="text-h5 text-primary mb-4"> Clientes </h1>
			<molecule-customer-form ref="customerForm" @registerCustomer="registerCustomer" @editCustomer="editCustomer" />
		</div>
		<div class="text-right mt-5">
			<molecule-customer-table :items="content.customers" @deleteCustomer="deleteCustomer" @editCustomer="openDialogEdit" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import MoleculeCustomerForm from '@/components/molecules/MoleculeCustomerForm.vue'
	import MoleculeCustomerTable from '@/components/molecules/MoleculeCustomerTable.vue'

	const emit = defineEmits(['registerCustomer'])
	const customerForm = ref(null)

	const props = defineProps({
		content: {
			type: Object,
			required: true,
			default: () => ({})
		}
	})

	const registerCustomer = (customer) => {
		emit('registerCustomer', customer)
	}

	const editCustomer = (customer) => {
		emit('editCustomer', customer)
	}

	const deleteCustomer = (customerId) => {
		emit('deleteCustomer', customerId)
	}

	const openDialogEdit = (customer) => {
		customerForm.value.openDialogCustomerEdit(customer)
	}
</script>