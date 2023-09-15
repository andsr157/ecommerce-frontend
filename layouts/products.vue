<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
const cartStore = useCartStore()
</script>

<template>
  <div ><FragmentsHeaderAfterLogin /></div>
  <slot />
  <TemplateFooterSecttionProduct />
</template>
