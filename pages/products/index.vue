<script setup lang="ts">
import { useProductStore } from "~/store/productStore"

const productStore = useProductStore()
definePageMeta({
  layout: "products",
})

onMounted(async () => {
  await productStore.getProducts()
})

watch(() => productStore.searchValue,() => {
    productStore.getProductByTitle
  }
)

  watch(() => productStore.categoryValue,() => {
    productStore.getProductByCategory
  }
)
</script>

<template>
  <FragmentsHeaderProduct />
  <div class="lg:flex gap-6 px-6 lg:px-28 pb-12 lg:pb-24">
    <div class="lg:w-[222px] me-4">
      <div class="flex justify-around lg:block">
        <ElementListCategory>
          <template v-slot:heading> Category</template>
          <template v-slot:link>
            <ElementInputCheck name="smartphones" />
            <ElementInputCheck name="laptops" />
            <ElementInputCheck name="fragrances" />
            <ElementInputCheck name="skincare" />
            <ElementInputCheck name="groceries" />
          </template>
        </ElementListCategory>

        <ElementListCategory>
          <template v-slot:heading> Product</template>
          <template v-slot:link>
            <ElementInputCheck name="termurah" />
            <ElementInputCheck name="termahal" />
            <ElementInputCheck name="diskon" />
          </template>
        </ElementListCategory>
      </div>
      <button
        class="flex py-[10px] px-4 bg gap-2 bg-primary-50 rounded-lg mb-6 lg:mb-0 mx-auto lg:mx-0"
      >
        <img src="~/assets/icon/refresh.svg" alt="" />
        <p class="text-primary-700">Reset Option</p>
      </button>
    </div>
    <div class="w-full">
      <div v-if="productStore.isLoading">is loading</div>
      <div v-else>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="data in productStore.products"
            v-if="productStore.products?.length !== 0"
            :key="data.id"
          >
            <div class="mb-6">
              <NuxtLink :to="`/products/${data.id}`">
                <FragmentsCardProduct :product="data" />
              </NuxtLink>
            </div>
          </div>
          <div v-else>
            <p>Item kosong atau tidak</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
