<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
const cartStore = useCartStore()

const allProducts = computed(() => cartStore.getAllProducts)
onMounted(async () => {
  await cartStore.getCarts()
})
</script>

<template>
  <nav class="py-4 px-6 lg:px-28 lg:py-2 flex justify-between gap-3 absolute w-full bg-transparent">
    <div class="flex items-center">
      <ElementLogo />

      <div class="lg:block hidden">
        <ul
          class="flex justify-between gap-8 text-gray-600 font-semibold text-base"
        >
          <NuxtLink to="/">
            <li>Home</li>
          </NuxtLink>

          <div class="flex gap-2 cursor-pointer">
            <NuxtLink to="/products">
              <li>Product</li>
            </NuxtLink>
            <img src="~/assets/icon/dropdown.svg" alt="" />
          </div>

          <div class="flex gap-2 cursor-pointer">
            <li>Categories</li>
            <img src="~/assets/icon/dropdown.svg" alt="" />
          </div>
        </ul>
      </div>
    </div>
    <div class="flex justify-end py-2 items-center">
      <div class="hidden lg:flex gap-8 items-center">
        <NuxtLink to="/cart">
          <div class="relative py-1">
            <img src="~/assets/icon/shopping-cart-2.svg" alt="" />
            <div
              class="absolute w-4 h-4 -top-1 -right-1 bg-red-400 rounded-full text-white text-[10px] font-medium text-center"
            >
              <div v-if="allProducts.totalProducts !== 0">
                {{ allProducts.totalProducts }}
              </div>
              <div v-else>0</div>
            </div>
          </div>
        </NuxtLink>
        <div class="rounded-full w-10 h-10">
          <img
            src="~/assets/image/Avatar.png"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
      </div>
      <div class="block lg:hidden">
        <img src="../../../assets/icon/nav-toogle.png" alt="" />
      </div>
    </div>
  </nav>
</template>
