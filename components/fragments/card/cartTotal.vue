<script setup lang="ts">
import { CartType } from "~/type/"

defineProps<{
  cart: CartType
}>()
</script>

<template>
  <div class="w-full lg:w-[456px]">
    <div class="p-5 flex flex-col gap-5 bg-white rounded-xl border-[1px] border-gray-200">
      <div>
        <div class="flex justify-between mb-1 text-gray-900">
          <p class="font-medium">Sub Total</p>
          <h3 class="text-xl font-semibold">$.{{ cart.total }}</h3>
        </div>
        <p class="text-gray-400 w-3/5 leading-6">
          Shipping and taxes calculated at checkout
        </p>
      </div>
      <NuxtLink to="cart/success"> 
        <button 
          class="flex w-full py-3 px-5 rounded-lg bg-primary-600 text-white justify-center gap-2"
        >
          <img src="~/assets/icon/arrow-right.svg" alt="" />
          <p class="font-semibold">Checkout</p>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
