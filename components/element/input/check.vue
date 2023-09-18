<script setup lang="ts">
import { useProductStore } from "~/store/productStore";

const productStore = useProductStore()

defineProps({
  name: String,
})
</script>

<template>
  <div class="flex items-center">
    <!-- <select name="" id="">
      <option class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg" value="smartphones">smartphones</option>
      <option class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg" value="laptops">laptops</option>
      <option class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg" value="fragrances">fragrances</option>
      <option class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg" value="skincare">skincare</option>
      <option class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg" value="groceries">groceries</option>
    </select> -->
    <input
      id="checked-checkbox"
      type="checkbox"
      :value="`${name}`"
      v-model="productStore.categoryValue"
      class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg"
    />
    <label
      for="checked-checkbox"
      class="ml-2 text-base font-medium text-gray-700"
      >{{ name }}</label
    >
    
    
  </div>
</template>
