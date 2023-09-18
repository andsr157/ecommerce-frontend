import { Title } from './../.nuxt/components.d';
import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

import { ProductType } from "~/type"

export const useProductStore = defineStore("Products", {
  state: () => ({
    products: [] as ProductType[],
    searchValue: ref<string>(''),
    categoryValue: ref([])

    
  }),

  getters: {
    getProductByTitle : (state):void => {
      if(state.searchValue === ''){
        return
      }else{
        const filtered = state.products.filter((item) => {
          const product = item.title.toLowerCase()
          return product.includes(state.searchValue.toLowerCase())
        })
        state.products = filtered
      }
    },

    getProductById: (state) => (id: number) => {
      const product = state.products.find((data) => data.id === id)
      return product || null
    },

    // getProductByCategory:(state):void =>  {
    //   state.products = filter
    //       }
  },

  actions: {
    async getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products")
        this.products = response.data.products // Update products using .value
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    },


    // handlerCategory(){
    //  if
    // }


  },
})
