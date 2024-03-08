import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',

  state: () => ({
    products: [],
  }),

  actions: {
    async addProduct(product) {
      try {
        let productId = 1

        if(this.products.length > 0){
          const currentBigger = this.products.reduce((bigger, item) => {
            return item.id > bigger ? item.id : bigger
          }, this.products[0].id)

          productId = currentBigger + 1
        }

        product.id = productId
        product.actions = {id: productId, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}
        this.products.push(product)
        localStorage.setItem('products', JSON.stringify(this.products))
      } catch (error) {
        throw error
      }
    },

    async deleteProduct(productId) {
      try {
        const newProductsList = this.products.filter(product => product.id !== productId)
        this.products = newProductsList
        localStorage.setItem('products', JSON.stringify(newProductsList))
      } catch (error) {
        throw error
      }
    },

    async editProduct(product) {
      try {
        const newList = this.products.map(item => item.id === product.id ? product : item)
        this.products = newList
        localStorage.setItem('products', JSON.stringify(newList))
      } catch (error) {
        throw error
      }
    },

    checkProducts() {
      let products = JSON.parse(localStorage.getItem('products')) || []
      this.products = products
    }
  }
})