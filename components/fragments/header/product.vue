<script setup lang="ts">

import { useProductStore } from "~/store/productStore"

const productStore = useProductStore()
</script>

<template>
  <div class="pt-[136px] pb-[72px] bg-gradient-to-b from-sky-100 to-white">
    <h1 class="text-center text-[30px] lg:text-[40px] font-semibold leading-14 mb-6">
      Product List
    </h1>
    <div class="flex gap-[10px] px-6 lg:px-80">
     
        <div
        class="flex gap-2 flex-grow rounded-lg p-1 lg:p-[14px] border-[1px] border-gray-300 bg-white items-center"
      >
          <img src="~/assets/icon/search.svg" alt="" class="w-5 h-5 lg:w-auto lg:h-auto" />
       
        <input
          type="text"
          placeholder="search"
          class="w-full focus:outline-0"
          v-model = productStore.searchValue 
        />
      </div>
      
      <button
        class="flex shrink-0 gap-2 border-[1px] border-gray-300 bg-white px-4 py-[14px] rounded-lg"
      >
        <img src="~/assets/icon/filter.svg" alt="" />
        <p class="text-sm font-semibold text-gray-700">Sort by</p>
      </button>
    </div>
  </div>
</template>
