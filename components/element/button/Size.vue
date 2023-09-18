<script setup lang="ts">
defineProps({
  size: String,
  isactive: Boolean,
  isAvailable: Boolean,
})
</script>
<template>
  <button
    :disabled="!isAvailable"   
    :class="`cursor-pointer rounded-md lg:rounded-lg w-9 h-9 lg:w-14 lg:h-14 text-center ${
      isactive && !isAvailable ? 'bg-gray-50 text-gray-600' : ' '
    } ${
      isactive && isAvailable
        ? 'bg-white text-gray-600 border-[2px] border-primary-600'
        : ' '
    }${
      !isAvailable && !isactive
        ? ' bg-gray-200 text-white cursor-not-allowed'
        : ''
    }`"
  >
    <p class="text-base lg:text-xl  font-semibold lg:leading-[56px]">{{ size }}</p>
  </button>
</template>
