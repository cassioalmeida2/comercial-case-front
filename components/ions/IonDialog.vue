<template>
  <v-dialog v-model="showDialog" v-bind="$attrs">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="activator" :activatorProps="activatorProps" />
    </template>
    <slot /> 
  </v-dialog>
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