<script setup lang="ts">
const isShowNav = ref(false)
</script>

<template>
  <nav
    class="py-4 px-6 lg:px-28 lg:py-2 flex justify-between gap-3 absolute z-10 w-full bg-transparent"
  >
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
      <div class="hidden lg:block">
        <ElementButtonLogin />
        <ElementButtonSignUp />
      </div>
      <div
        class="block lg:hidden cursor-pointer"
        @click="isShowNav = !isShowNav"
      >
        <img src="../../../assets/icon/nav-toogle.png" alt="" />
      </div>
    </div>
  </nav>
  <div v-if="isShowNav" class="flex flex-col justify-end p-8 pb-40 absolute w-full h-screen z-50  bg-white transition ease-in-out">
    <ul class="flex flex-col text-gray-800 font-bold text-3xl gap-4">
      <div @click="isShowNav = !isShowNav" class="cursor-pointer absolute top-2 right-2 text-3xl p-4">X</div>
      <li>
        <NuxtLink to="/">
          <li>Home</li>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">
          <li>Product</li>
        </NuxtLink>
      </li>
      <li>
          <li>About</li>
      </li>
    </ul>
  </div>
</template>
