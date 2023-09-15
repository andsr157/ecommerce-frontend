import { defineStore } from "pinia"
import { CartType, ProductType, cartProduct } from "~/type"
import axios from "axios"

export const useCartStore = defineStore("Cart", {
  state: () => ({
    initialCarts: {} as CartType,
    cart: null as CartType | null,
    inputQty: 1,
    isLoading: false,
  }),

  getters: {
    getAllProducts: (state) => {
      return { ...state.initialCarts, ...state.cart }
      // if (state.cart === null) {
      //   state.cart = { ...state.initialCarts }
      // }
      // return { ...state.cart }
    },
    delItemById: (state) => (id: number) => {
      const product = state.cart?.products.filter((data) => data?.id !== id)
      return product || null
    },
  },
  actions: {
    async getCarts() {
      try {
        this.isLoading = true
        const response = await axios.get("https://dummyjson.com/carts/1")
        this.initialCarts = response.data
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        this.isLoading = false
      }
    },

    async addItemToCart(cartId: number, productData: ProductType | null) {
      try {
        if (this.cart === null) {
          this.cart = { ...this.initialCarts }
        }

        function convertToCartProduct( productData: ProductType, quantity: number
        ): cartProduct {
          return {
            id: productData.id,
            title: productData.title,
            price: productData.price,
            quantity: quantity,
            total: productData.price,
          }
        }

        if (productData !== null) {
          const cartProductData: cartProduct = convertToCartProduct(
            productData,
            this.inputQty
          )
          const existItemIndex = this.cart.products.findIndex(
            (item) => item.id === cartProductData.id
          )

          if (existItemIndex !== -1) {
            this.cart.products[existItemIndex].quantity += cartProductData.quantity
          } else {
            this.cart.products.push(cartProductData)
          }
        }

        const response = await axios.put(
          `https://dummyjson.com/carts/${cartId}`,
          {
            products: this.cart.products,
          }
        )

        if (response.status === 200) {
          this.cart = response.data
          console.log(this.cart)
          this.inputQty = 1
        }
      } catch (error) {
        console.error("Error adding item to cart:", error)
      }
    },

    async delItemCart(cartId: number, productid: number) {
      try {
        if (this.cart === null) {
          this.cart = { ...this.initialCarts }
        }
        const productData = this.delItemById(productid)
        console.log(productData)

        const response = await axios.put(
          `https://dummyjson.com/carts/${cartId}`,
          {
            products: productData,
          }
        )
        this.cart = response.data
      } catch (error) {
        console.error("Error adding item to cart:", error)
      }
    },

   async checkOut(cartId:number){
    try {
      const response = await axios.put(`https://dummyjson.com/carts/${cartId}`,{
        products:[]
      })
      this.cart = response.data
    } catch (error) {
      console.log('error', error)
    }
    }
  },
})
