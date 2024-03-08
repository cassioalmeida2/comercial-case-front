<template>
	<div>
		<atom-customer-table :items="items" @edit="editCustomer" @delete="deleteCustomer" />
	</div>
</template>

<script setup>
	import AtomCustomerTable from '@/components/atoms/AtomCustomerTable.vue'
	import { defineEmits } from 'vue'

	const emit = defineEmits(['editCustomer', 'deleteCustomer'])

	const props = defineProps({
		items: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})
	
	const editCustomer = (customer) => {
		emit('editCustomer', customer)
	}

	const deleteCustomer = (customer) => {
		emit('deleteCustomer', customer.id)
	}
</script>