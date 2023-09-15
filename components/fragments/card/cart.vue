<script setup lang="ts">
import { cartProduct } from "~/type/"
import { useCartStore } from "~/store/cartStore"
import { useProductStore } from "~/store/productStore"

const ProductStore = useProductStore()
const cartStore = useCartStore()
defineProps<{
  product: cartProduct
}>()

const uri = Number(useRoute().params.id)
</script>

<template>
  <div class="bg-white p-1 lg:p-2 w-full lg:w-[762px]  flex rounded-xl border-[1px] border-gray-200">
    <div class="w-16 lg:w-72 h-16 lg:h-[162px] bg-gray-100 rounded-lg">
      <img
        :src="ProductStore.getProductById(product.id)?.thumbnail"
        alt=""
        class=" w-full h-full object-cover rounded-md"
        x
      />
    </div>
    <div
      class="px-5 py-1 lg:py-3 text-gray-900 mb-1 flex flex-col justify-between grow"
    >
      <div class="flex justify-between">
        <p class="font-normal w-40 lg:w-full truncate lg:overflow-visible ">{{ product.title }}</p>
        <h3 class="text-lg lg:text-xl font-semibold">$.{{ product.total }}</h3>
      </div>
      <div class="flex justify-between gap-2 items-end">
        <h3 class="text-gray-700 text-sm lg:text-lg font-medium">
          Qty: {{ product.quantity }}
        </h3>
        <div
          class="flex gap-2 hover:px-2 hover:pb-1 cursor-pointer"
          @click="cartStore.delItemCart(1, product.id)"
        >
          <img src="~/assets/icon/trash.svg" alt="" />
          <p class="text-sm font-semibold text-error-700">Remove</p>
        </div>
      </div>
    </div>
  </div>
</template>
