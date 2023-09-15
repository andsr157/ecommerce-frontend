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
    :class="`flex flex-wrap lg:flex-nowrap rounded-lg py-2 px-2 lg:pr-4 :pl-2 gap-2 lg:gap-4 items-center cursor-pointer ${
      color.isactive
        ? 'bg-white border-[2px] border-primary-600'
        : 'bg-gray-50 text-gray-600'
    } ${!color.isAvailable ? 'bg-gray-200 text-white cursor-not-allowed' : ''}`"
  >
    <div :class="`w-6 h-6 lg:w-[40px] lg:h-[40px] ${color.code} rounded-full`"></div>
    <p class="text-gray-600 text-lg lg:text-xl font-semibold">{{ color.name }}</p>
  </button>
</template>
