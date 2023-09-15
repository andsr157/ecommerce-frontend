<template>
  <nav class="py-4 px-28 lg:py-2 flex justify-between gap-3 absolute w-full bg-transparent">
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
      <div class="block lg:hidden">
        <img src="../../../assets/icon/nav-toogle.png" alt="" />
      </div>
    </div>
  </nav>
</template>
