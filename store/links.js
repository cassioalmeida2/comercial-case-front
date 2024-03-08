import { defineStore } from 'pinia'

export const useLinksStore = defineStore({
  id: 'links',

  state: () => ({
    links: [],
  }),

  actions: {
    async addLink(link) {
      try {
        let linkId = 1

        if(this.links.length > 0){
          const currentBigger = this.links.reduce((bigger, item) => {
            return item.id > bigger ? item.id : bigger
          }, this.links[0].id)

          linkId = currentBigger + 1
        }

        link.id = linkId
        link.actions = {id: linkId, permissions: [{name: 'edit', icon:'Edit'}, {name: 'delete', icon:'Delete'}]}
        this.links.push(link)
        localStorage.setItem('links', JSON.stringify(this.links))
      } catch (error) {
        throw error
      }
    },

    async deleteLink(linkId) {
      try {
        const newLinkList = this.links.filter(link => link.id !== linkId)
        this.links = newLinkList
        localStorage.setItem('links', JSON.stringify(newLinkList))
      } catch (error) {
        throw error
      }
    },

    async editLink(link) {
      try {
        const newList = this.links.map(item => item.id === link.id ? link : item)
        this.links = newList
        localStorage.setItem('links', JSON.stringify(newList))
      } catch (error) {
        throw error
      }
    },

    checkLinks() {
      let links = JSON.parse(localStorage.getItem('links')) || []
      this.links = links
    }
  }
})