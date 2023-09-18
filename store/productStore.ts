import { productProp } from './../type/index';
  import { Title } from './../.nuxt/components.d';
  import { defineStore } from "pinia"
  import { ref } from "vue"
  import axios from "axios"

  import { ProductType } from "~/type"

  export const useProductStore = defineStore("Products", {
    state: () => ({
      initialproducts: [] as ProductType[],
      products: [] as ProductType[] ,
      searchValue: ref<string>(''),
      categoryValue: ref<string[]>([]),
      isLoading: false
    }),

    getters: {
      getAllProducts: (state) => {
        if(state.products?.length === 0 ) {
          return [...state.initialproducts, ...(state.products || [])];  
        }
        return state.products
      },
      
      getProductByTitle : (state):void=> {
        if(state.searchValue === ''){
        state.products = state.initialproducts
        }else{
          const filtered = state.initialproducts.filter((item) => {
            const product = item.title.toLowerCase()
            return product.includes(state.searchValue.toLowerCase())
          })
        state.products = filtered
        }
       
      },

      getProductByCategory:(state):void => {
        if(state.categoryValue.length === 0){
          state.products = state.initialproducts
        } else{
          const filtered = state.initialproducts.filter((item) => {
            return state.categoryValue.includes(item.category)
          })
          state.products = filtered
        }
      
      },

      getProductById: (state) => (id: number) => {
        const product = state.initialproducts.find((data) => data.id === id)
        return product || null
      }, 
    },

    actions: {
      async getProducts() {
        try {
          this.isLoading = true
          const response = await axios.get("https://dummyjson.com/products")
          this.initialproducts = response.data.products // Update products using .value
          this.products = response.data.products

        
        } catch (error) {
          console.error("Error fetching products:", error)
        }finally{
          this.isLoading = false
        }
      },

    },
  })
