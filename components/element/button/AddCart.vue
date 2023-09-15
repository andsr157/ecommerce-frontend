<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
import { useProductStore } from "~/store/productStore"

const cartStore = useCartStore()
const productStore = useProductStore()

const uri = Number(useRoute().params.id)
</script>

<template>
  <button
    @click="cartStore.addItemToCart(1, productStore.getProductById(uri))"
    class="flex bg-primary-600 py-[10px] px-4 rounded-lg items-center text-white gap-2"
  >
    <p class="text-lg">+</p>
    <p class="font-semibold text-sm">Add to Cart</p>
  </button>
</template>
