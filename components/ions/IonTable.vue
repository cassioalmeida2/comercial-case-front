<template>
	<v-data-table-virtual v-bind="$attrs">
		<template v-for="slot in creatorSlots" v-slot:[`item.${slot.field}`]="{ value }">
			<slot :name="slot.field" :item="value" />
    </template>
	</v-data-table-virtual>
</template>

<script setup>
	const props = defineProps({
		creatorSlots: {
			type: Array,
			required: true,
			default: () => ([])
		},
	})
</script>