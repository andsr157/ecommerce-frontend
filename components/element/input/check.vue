<script setup lang="ts">
defineProps({
  name: String,
})
</script>

<template>
  <div class="flex items-center">
    <input
      id="checked-checkbox"
      type="checkbox"
      value=""
      class="w-5 h-5 text-blue-600 bg-white border-[1px] border-gray-300 rounded-xl focus:ring-blue-500 focus:ring-2 focus:rounded-lg"
    />
    <label
      for="checked-checkbox"
      class="ml-2 text-base font-medium text-gray-700"
      >{{ name }}</label
    >
  </div>
</template>
