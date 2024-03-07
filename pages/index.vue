<template>
  <div>
		<template-products :content="content" />
	</div>
</template>

<script setup>
	import TemplateProducts from '@/components/templates/TemplateProducts.vue'
	import { useRouter } from 'vue-router'

	const content = ['teste1', 'teste2']

	const router = useRouter()

</script>