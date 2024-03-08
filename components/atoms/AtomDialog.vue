<template>
	<div>
		<ion-dialog :show="showDialog" max-width="600" persistent>
			<template v-slot:activator="{ activatorProps }">
				<slot name="activator" :activatorProps="activatorProps" />
			</template>
			<slot />
		</ion-dialog>
	</div>
</template>

<script setup>
	import IonDialog from '@/components/ions/IonDialog.vue'
	
	const props = defineProps({
		show: {
			type: Boolean,
			required: true,
			default: false,
		},
	})

	const showDialog = computed(() => {
		return props.show
	})

</script>