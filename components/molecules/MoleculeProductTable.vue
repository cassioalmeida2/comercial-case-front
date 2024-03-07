<template>
	<div>
		<atom-product-table :items="items"/>
	</div>
</template>

<script setup>
	import AtomProductTable from '@/components/atoms/AtomProductTable.vue'

	const props = defineProps({
		items: {
			type: Array,
			required: true,
			default: () => ([])
		}
	})
</script>