<script setup lang="ts">
defineProps({
  theme: String,
})
</script>

<template>
  <div v-if="theme === 'white'">
    <img src="~/assets/image/Logotype_white.png" alt="" class="h-8" />
  </div>
  <div v-else>
    <img src="~/assets/image/Logotype.png" alt="" class="h-8" />
  </div>
</template>
