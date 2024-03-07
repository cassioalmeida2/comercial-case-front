<template>
	<ion-table :headers="headers" :items="items" :items-value="'id'" item-key="id" align="start" :creatorSlots="creatorSlots">
		<template v-slot:actions="{ item }">
			<div class="d-flex justify-end">
				<div v-for="permission in item?.permissions" :key="permission.id" class=""> 
					<atom-icon-button>
						<component :is="`Svgo${permission.icon}`" filled class="pa-0 ma-0 icon-default" />
					</atom-icon-button>
				</div>
			</div>
		</template>
	</ion-table>
</template>

<script setup>
	import IonTable from '@/components/ions/IonTable.vue'
	import AtomIconButton from '@/components/atoms/AtomIconButton.vue'

	const headers = [
		{ title: 'Id', key: 'id' },
		{ title: 'Nome', key: 'name' },
		{ title: 'Ativo', key: 'active' },
		{ title: '', key: 'actions', sortable: false },
	]

	const creatorSlots = [
		{field: 'actions'},
	]
	
	const props = defineProps({
		items: {
			type: Array,
			required: true,
			default: () => ([])
		},
	})
</script>

<style lang="scss">
.atom-product-table {

}
</style>