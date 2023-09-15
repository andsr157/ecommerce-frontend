<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
const cartStore = useCartStore()

// const props =defineProps<{
//     id:number
// }>()

definePageMeta({
    layout:'products'
})
onMounted( () =>{
    cartStore.getCarts
    cartStore.checkOut(cartStore.cart?.id ?? 0)
})
</script>


<template >
  <div class="pt-16 pb-[320px]">
    <div class="container">
        <div class="py-8 text-center w-1/4 mx-auto">
            <h1 class="text-xl font-semibold text-gray-900">Thank you!</h1>
            <p class="text-gray-400">Your order will be processed immediately.</p>
            <div class="mt-6 ">
                <NuxtLink to="/">
                    <button class="flex px-5 py-3 gap-2 bg-primary-600 mx-auto text-white rounded-lg">
                        <img src="~/assets/icon/home.svg" alt="">
                        <span >Back To Home</span>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
  </div>
</template>