<template>
	<div>
		<atom-dialog ref="dialog" :show="showDialog">
			<template v-slot:activator="{ activatorProps }">
				<atom-button v-bind="activatorProps" @click="openDialog"> 
					<span>Vincular</span>
				</atom-button>
			</template>
      <div class="bg-white rounded pa-4">
        <h2 class="text-h5 text-primary mb-4">Produtos disponíveis</h2>
        <v-row> 
          <v-col cols="4" v-for="product in products" :key="product.id">
            <atom-checkbox class="ma-0 pa-0" :label="product.name" :selected="selected" :value="product.id" @change="updateInputValue"/>
          </v-col>
        </v-row>
        <div class="d-flex justify-end mt-8">
          <atom-button @click="closeDialog" color="secondary" class="mr-2"> 
            <span>Cancelar</span>
          </atom-button>
          <atom-button @click="register"> 
            <span>Registrar</span>
          </atom-button>
        </div>
      </div>
		</atom-dialog>
	</div>
</template>

<script setup>
  import { ref, defineEmits } from 'vue'
	import AtomDialog from '@/components/atoms/AtomDialog.vue'
	import AtomButton from '@/components/atoms/AtomButton.vue'
	import AtomCheckbox from '@/components/atoms/AtomCheckbox.vue'
	import AtomForm from '@/components/atoms/AtomForm.vue'
	import AtomSwitch from '@/components/atoms/AtomSwitch.vue'

	let selected = ref([])
	let teste = ref(1)
	let showDialog = ref(false)
	let dialog = ref(null)
	let name = ref()
	let editLink = ref(null)
	let editMode = false

	let formValues = ref({
		name: '',
    document: '',
    phone: '',
    email: '',
		active: true
	})

	const emit = defineEmits(['registerLink', 'editLink'])

  const props = defineProps({
		items: {
			type: Object,
			required: true,
			default: () => ({})
		},

		currentItem: {
			type: Object,
			required: true,
			default: () => ({})
		},
	})

  let products = ref(props.items.products)
  let currentCustomer = ref(props.currentItem)


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
		closeDialog()
	}

	const openDialogLinkEdit = (link) => {
		editLink = link
		editMode = true
		formValues.value.name = link.name
    formValues.value.document = link.document
    formValues.value.phone = link.phone
    formValues.value.email = link.email
		formValues.value.active = link.active
		openDialog()
	}

	const updateInputValue = (newValue) => {
		selected.value = newValue
	}

	const updateSwitch = (newValue) => {
		formValues.value.active = newValue
	}
	

	defineExpose({
		openDialogLinkEdit
	})
</script>

<style lang="scss" scoped>
.molecule-link-form {

}
</style>