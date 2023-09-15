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
    :class="`cursor-pointer rounded-lg w-14 h-14 text-center ${
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
    <span class="text-xl font-semibold leading-[56px]">{{ size }}</span>
  </button>
</template>
