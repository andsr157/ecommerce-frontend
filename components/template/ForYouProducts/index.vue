<script setup lang="ts">
import { useProductStore } from "~/store/productStore"

const productStore = useProductStore()
</script>

<template>
  <div class="px-6 lg:px-28 pb-24">
    <div class="mb-8">
      <FragmentsHeaderSection labelName="For You" />
    </div>
    <div class="flex flex-wrap gap-[22px]">
      <div v-for="data in productStore.products" :key="data.id">
        <div>
          <NuxtLink :to="`/products/${data.id}`">
            <FragmentsCardProduct :product="data" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
