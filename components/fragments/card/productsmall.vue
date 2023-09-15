<script setup lang="ts">
import { ProductType } from "~/type/"

defineProps<{
  product: ProductType
}>()
</script>

<template>
  <div class="border rounded-xl w-40 lg:w-56 xl:w-56">
    <div class="bg-gray-200 rounded-t-xl h-32 lg:h-56 xl:h-56 w-full">
      <img
        :src="product.thumbnail"
        alt=""
        class="object-cover rounded-t-lg  h-32 lg:h-full lg:w-full mx-auto mix-blend-multiply"
      />
    </div>
    <div class="p-4 lg:p-6 bg-white rounded-b-xl">
      <div
        class="px-2 lg:px-3 py-1 rounded-2xl bg-gray-100 text-gray-700 w-3/5 lg:w-1/2 text-center font-medium text-sm truncate"
      >
        {{ product.category }}
      </div>
      <div class="mt-4 mb-2">
        <h3
          class="text-sm lg:text-base font-normal leading-6 text-gray-900 truncate"
        >
          {{ product.title }}
        </h3>
      </div>
      <div class="flex items-center justify-between mb-2">
        <h1 class="font-bold text-[17px] lg:text-xl text-gray-900">
          Rp.{{ product.price }}
        </h1>
        <p class="text-xs text-gray-400">450ML</p>
      </div>
      <div>
        <span class="text-xs text-gray-400 line-through">Rp40.000</span>
        <span
          class="ms-2 bg-error-50 py-1 px-2 text-error-700 text-xs rounded-xl font-semibold"
          >-10%</span
        >
      </div>
    </div>
  </div>
</template>
