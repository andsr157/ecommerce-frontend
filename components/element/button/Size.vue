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
    :class="`cursor-pointer rounded-md lg:rounded-lg w-11 h-11 lg:w-14 lg:h-14 text-center ${
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
    <p class="text-xl  font-semibold lg:leading-[56px]">{{ size }}</p>
  </button>
</template>
