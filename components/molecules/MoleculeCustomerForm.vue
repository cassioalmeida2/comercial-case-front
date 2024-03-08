<template>
	<div>
		<atom-dialog ref="dialog" :show="showDialog">
			<template v-slot:activator="{ activatorProps }">
				<atom-button v-bind="activatorProps" @click="openDialog"> 
					<SvgoPlus class="pa-0 mr-1 icon-default" />
					<span ref="produto">Novo cliente</span>
				</atom-button>
			</template>
			<div class="full-width bg-white rounded pa-6">
				<h2 class="text-h5 text-primary">Novo cliente</h2>
				<atom-form class="mt-4">
					<atom-textfield label="Nome" name="name" :value="formValues.name" @input="updateInputValue" />
					<atom-textfield label="Documento" name="document" :value="formValues.document" @input="updateInputValue" />
					<atom-textfield label="Telefone" name="phone" :value="formValues.phone" @input="updateInputValue" />
					<atom-textfield label="Email" name="email" type="email" :value="formValues.email" @input="updateInputValue" />
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
  import { ref, defineEmits } from 'vue'
	import AtomDialog from '@/components/atoms/AtomDialog.vue'
	import AtomButton from '@/components/atoms/AtomButton.vue'
	import AtomTextfield from '@/components/atoms/AtomTextfield.vue'
	import AtomForm from '@/components/atoms/AtomForm.vue'
	import AtomSwitch from '@/components/atoms/AtomSwitch.vue'

	let showDialog = ref(false)
	let dialog = ref(null)
	let name = ref()
	let editCustomer = ref(null)
	let editMode = false

	let formValues = ref({
		name: '',
    document: '',
    phone: '',
    email: '',
		active: true
	})

	const emit = defineEmits(['registerCustomer', 'editCustomer'])

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
      document: '',
      phone: '',
      email: '',
      active: true
		})
	}

	const register = () => {
		if(editMode){
			editCustomer.name = formValues.value.name
			editCustomer.active = formValues.value.active
			emit('editCustomer', editCustomer)
			editMode = false 
		}else {
			emit('registerCustomer', formValues.value)
		}
		closeDialog()
	}

	const openDialogCustomerEdit = (customer) => {
		editCustomer = customer
		editMode = true
		formValues.value.name = customer.name
    formValues.value.document = customer.document
    formValues.value.phone = customer.phone
    formValues.value.email = customer.email
		formValues.value.active = customer.active
		openDialog()
	}

	const updateInputValue = (inputProperties) => {
		formValues.value[inputProperties.field] = inputProperties.value
	}

	const updateSwitch = (newValue) => {
		formValues.value.active = newValue
	}
	

	defineExpose({
		openDialogCustomerEdit
	})
</script>

<style lang="scss" scoped>
.molecule-customer-form {

}
</style>