<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
			<div class="pa-6">
				<ion-image :imageUrl="dataStoneLogo" />
				<ion-divider class="my-4" />
				<v-list density="compact">
					<v-list-subheader class="subheading-x-small">MENU</v-list-subheader>
					<v-list-item v-for="(item, i) in items" :key="i" :value="item">
						<template v-slot:prepend>
							<div class="d-flex align-center pa-1">
								<component :is="`Svgo${item.icon}`" filled class="pa-0 ma-0 default__icon-menu" />
							</div>
						</template>
						<v-list-item-title>
							<span class="ml-2 label-small">{{item.text}}</span>
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</div>
    </v-navigation-drawer>
    <v-main>
      <v-container class="py-8 px-6" fluid>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
	import dataStone from '@/assets/images/data-stone.png';
	import IonImage from '@/components/ions/IonImage.vue'
	import IonDivider from '@/components/ions/IonDivider.vue'
	const dataStoneLogo = dataStone

  const drawer = ref(null)
	
	const items = ref([
		{icon: 'Link', text: 'Associar Produtos' },
		{icon: 'Customers', text: 'Clientes' },
		{icon: 'Product', text: 'Produtos' },
	])
</script>

<style lang="scss" scoped>
	.default {
		&__icon-menu {
			fill: $grey-300;
			width: 20px;
			height: 20px;
		}
	}
</style>