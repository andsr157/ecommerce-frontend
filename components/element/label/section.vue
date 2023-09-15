<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div class="text-lg lg:text-2xl font-semibold">{{ props.name }}</div>
</template>
