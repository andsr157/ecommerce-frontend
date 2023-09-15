<script setup lang="ts">
const { labelName } = defineProps<{ labelName: string }>()
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-3 items-center">
      <ElementLabelSection :name="labelName" />
      <div>
        <slot></slot>
      </div>
    </div>
    <ElementButtonSection />
  </div>
</template>
