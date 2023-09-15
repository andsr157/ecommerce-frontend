<script setup lang="ts">
import { useProductStore } from "~/store/productStore"
import { useCartStore } from "~/store/cartStore"
const cartStore = useCartStore()

const productStore = useProductStore()
definePageMeta({
  layout: "home",
})

onMounted(() => {
  productStore.getProducts()
  cartStore.getCarts()
})
</script>

<template>
  <FragmentsHero />
  <TemplateCategoriesProducts />
  <TemplateFlashsaleProducts uniqueId="99" />
  <TemplateLatestProducts uniqueId="1" />
  <TemplatePromoProducts />
  <TemplateLatestProducts uniqueId="2" />
  <TemplateForYouProducts />
</template>
