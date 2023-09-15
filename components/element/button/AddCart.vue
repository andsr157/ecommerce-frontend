<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
import { useProductStore } from "~/store/productStore"

const cartStore = useCartStore()
const productStore = useProductStore()

const uri = Number(useRoute().params.id)
</script>

<template>
  <div class="bg-primary-600 px-2 lg:px-4 py-[10px] lg:py-3 rounded-lg border-[1px] border-gray-300 items-center text-white gap-1 lg:gap-2">
    <button
      @click="cartStore.addItemToCart(1, productStore.getProductById(uri))"
      class="flex  "
    >
    <img src="~/assets/icon/plus.svg" alt="">
      <p class="font-semibold text-sm">Add to Cart</p>
    </button>
  </div>
</template>
