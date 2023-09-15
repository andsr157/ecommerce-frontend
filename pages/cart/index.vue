<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
const cartStore = useCartStore()

definePageMeta({
  layout: "products",
})

const allProducts = computed(() => cartStore.getAllProducts)

onMounted(async () => {
  await cartStore.getCarts()
})
console.log(allProducts)
</script>

<template>
  <div class="px-28 pb-24">
    <div class="pt-16 pb-[72px]">
      <h1 class="text-[40px] font-bold text-gray-900">Shopping Cart</h1>
    </div>
    <div class="flex gap-6">
      <div v-if="cartStore.isLoading">Loading cart item....</div>
      <div v-else-if="cartStore.initialCarts.products">
        <div v-for="item in allProducts.products" :key="item.id" class="mb-6">
          <FragmentsCardCart :product="item" />
        </div>
        <div v-if="allProducts.products.length === 0">item kosong</div>
      </div>
      <div v-else>loading cart item...</div>
      <div v-if="cartStore.initialCarts.products">
        <FragmentsCardCartTotal
          v-if="allProducts.products.length > 0"
          :cart="allProducts"
        />
      </div>
    </div>
  </div>
</template>
