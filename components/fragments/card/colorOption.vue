<script setup lang="ts">
interface ColorProp {
  name: string
  code: string
  isactive: boolean
  isAvailable: boolean
}

const { color } = defineProps<{
  color: ColorProp
}>()
</script>

<template>
  <button
    :class="`flex rounded-lg py-2 pr-4 pl-2 gap-4 items-center cursor-pointer ${
      color.isactive
        ? 'bg-white border-[2px] border-primary-600'
        : 'bg-gray-50 text-gray-600'
    } ${!color.isAvailable ? 'bg-gray-200 text-white cursor-not-allowed' : ''}`"
  >
    <div :class="`w-[40px] h-[40px] ${color.code} rounded-full`"></div>
    <p class="text-gray-600 text-xl font-semibold">{{ color.name }}</p>
  </button>
</template>
