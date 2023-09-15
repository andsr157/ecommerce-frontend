import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"

import { ProductType } from "~/type"

export const useProductStore = defineStore("Products", {
  state: () => ({
    products: [] as ProductType[],
  }),

  getters: {
    getProductById: (state) => (id: number) => {
      const product = state.products.find((data) => data.id === id)
      return product || null
    },
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

    // async getProductsById(id: number | string) {
    //   try {
    //     const response = await axios.get<ProductType[]>(
    //       "https://fakestoreapi.com/products/" + id
    //     )
    //     const data = response.data
    //     return data
    //   } catch (error) {
    //     console.error("Error fetching products:", error)
    //   }
    // },
  },
})
