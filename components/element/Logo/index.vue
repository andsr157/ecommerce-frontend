<script setup lang="ts">
defineProps({
  theme: String,
})
</script>

<template>
  <div class="flex box-border items-center gap-[10px]">
    <ElementLogoMark />
    <ElementLogoType theme="theme" />
  </div>
</template>
