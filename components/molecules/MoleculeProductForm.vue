<template>
	<div>
		<atom-dialog ref="dialog" :show="showDialog">
			<template v-slot:activator="{ activatorProps }">
				<atom-button v-bind="activatorProps" @click="openDialog"> 
					<SvgoPlus class="pa-0 mr-1 icon-default" />
					<span>Novo produto</span>
				</atom-button>
			</template>
			<div class="full-width bg-white rounded pa-6">
				<h2 class="text-h5 text-primary">Novo produto</h2>
				<atom-form class="mt-4">
					<atom-textfield label="Nome" name="name" :value="formValues.name" @input="updateInputValue" />
					<atom-switch label="Ativo" :value="formValues.active" @change="updateSwitch" />
					<div class="d-flex justify-end">
						<atom-button @click="closeDialog" color="secondary" class="mr-2"> 
							<span>Cancelar</span>
						</atom-button>
						<atom-button @click="register"> 
							<span>Registrar</span>
						</atom-button>
					</div>
				</atom-form>
			</div>
		</atom-dialog>
	</div>
</template>

<script setup>
  import { ref } from 'vue'
	import AtomDialog from '@/components/atoms/AtomDialog.vue'
	import AtomButton from '@/components/atoms/AtomButton.vue'
	import AtomTextfield from '@/components/atoms/AtomTextfield.vue'
	import AtomForm from '@/components/atoms/AtomForm.vue'
	import AtomSwitch from '@/components/atoms/AtomSwitch.vue'

	let showDialog = ref(false)
	let dialog = ref(null)
	let editProduct = ref(null)
	let editMode = false

	let formValues = ref({
		name: '',
		active: true
	})

	const emit = defineEmits(['registerProduct', 'editProduct'])

	const labelButton = computed(() => {
		return editMode ? 'Atualizar' : 'Cadastrar'
	})

	const openDialog = () => {
		showDialog.value = true
	}

	const closeDialog = () => {
		showDialog.value = false
		setInitialValueForm()
	}

	const setInitialValueForm = () => {
		formValues = ref({
			name: '',
			active: true
		})
	}

	const register = () => {
		if(editMode){
			editProduct.name = formValues.value.name
			editProduct.active = formValues.value.active
			emit('editProduct', editProduct)
			editMode = false 
		}else {
			emit('registerProduct', formValues.value)
		}
		closeDialog()
	}

	const openDialogProductEdit = (product) => {
		editProduct = product
		editMode = true
		formValues.value.name = product.name
		formValues.value.active = product.active
		openDialog()
	}

	const updateInputValue = (inputProperties) => {
		formValues.value[inputProperties.field] = inputProperties.value
	}

	const updateSwitch = (newValue) => {
		formValues.value.active = newValue
	}
	

	defineExpose({
		openDialogProductEdit
	})
</script>

<style lang="scss" scoped>
.molecule-product-form {

}
</style>