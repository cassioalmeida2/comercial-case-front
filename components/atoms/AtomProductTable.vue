<template>
	<ion-table :headers="headers" :items="items" :items-value="'id'" item-key="id" align="start" :creatorSlots="creatorSlots">
		<template v-slot:actions="{ item }">
			<div class="d-flex justify-end">
				<div v-for="permission in item?.permissions" :key="permission.id" class=""> 
					<atom-icon-button>
						<component :is="`Svgo${permission.icon}`" @click="callToAction(permission.name, item, items)" filled class="pa-0 ma-0 icon-default" />
					</atom-icon-button>
				</div>
			</div>
		</template>
		<template v-slot:active="{ item }">
			<div class="d-flex justify-start">
				<div> {{changeLabelStatus(item)}} </div>
			</div>
		</template>
	</ion-table>
</template>

<script setup>
	import { defineEmits } from 'vue'
	import IonTable from '@/components/ions/IonTable.vue'
	import AtomIconButton from '@/components/atoms/AtomIconButton.vue'

	const headers = [
		{ title: 'Id', key: 'id' },
		{ title: 'Nome', key: 'name' },
		{ title: 'Ativo', key: 'active' },
		{ title: '', key: 'actions', sortable: false },
	]

	const creatorSlots = [
		{field: 'active'},
		{field: 'actions'},
	]

	const props = defineProps({
		items: {
			type: Array,
			required: true,
			default: () => ([])
		},
	})
	
	const emit = defineEmits(['edit', 'delete'])

	const changeLabelStatus = (value) => {
		return value ? 'Sim' : 'Não'
	}

	const callToAction = (actionName, product, products) => {
		let currentProduct = products.filter(item => item.id == product.id)
		emit(actionName, currentProduct[0])
	}
</script>

<style lang="scss" scoped>
.atom-product-table {

}
</style>