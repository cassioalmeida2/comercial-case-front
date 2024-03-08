import { defineStore } from 'pinia'

export const useCustomersStore = defineStore({
  id: 'customers',

  state: () => ({
    customers: [],
  }),

  actions: {
    async addCustomer(customer) {
      try {
        let customerId = 1

        if(this.customers.length > 0){
          const currentBigger = this.customers.reduce((bigger, item) => {
            return item.id > bigger ? item.id : bigger
          }, this.customers[0].id)

          customerId = currentBigger + 1
        }

        customer.id = customerId
        customer.actions = {id: customerId, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}
        this.customers.push(customer)
        localStorage.setItem('customers', JSON.stringify(this.customers))
      } catch (error) {
        throw error
      }
    },

    async deleteCustomer(customerId) {
      try {
        const newCustomerList = this.customers.filter(customer => customer.id !== customerId)
        this.customers = newCustomerList
        localStorage.setItem('customers', JSON.stringify(newCustomerList))
      } catch (error) {
        throw error
      }
    },

    async editCustomer(customer) {
      try {
        const newList = this.customers.map(item => item.id === customer.id ? customer : item)
        this.customers = newList
        localStorage.setItem('customers', JSON.stringify(newList))
      } catch (error) {
        throw error
      }
    },

    checkCustomers() {
      let customers = JSON.parse(localStorage.getItem('customers')) || []
      this.customers = customers
    }
  }
})