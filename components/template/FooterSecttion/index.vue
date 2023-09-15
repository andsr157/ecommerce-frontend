<script setup lang="ts"></script>

<template>
  <div class="px-6 py-8 lg:px-28 lg:py-16 mx-auto pt-16 bg-gray-900">
    <FragmentsFooterNewsletter />
  </div>
  <div class="bg-gray-800 px-6 lg:px-28">
    <div class="lg:grid py-8 lg:py-16 lg:grid-cols-3">
      <div class="flex flex-col items-center lg:block">
        <div class="ms-16 lg:ms-0">
          <ElementLogo theme="white" />
        </div>
        <p
          class="text-gray-200 text-sm lg:text-base font-normal mt-8 lg:pe-28 leading-6 text-center lg:text-left"
        >
          Design amazing digital experiences that create more happy in the
          world.
        </p>
      </div>
      <div class="col-span-2 mt-7 lg:mt-0">
        <FragmentsFooter />
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between border-t-2 border-gray-600 pt-6 lg:pt-8 pb-12"
    >
      <div
        class="text-gray-500 order-2 text-sm lg:text-base text-center lg:text-left"
      >
        © 2077 Morpheme UI. All rights reserved.
      </div>
      <div
        class="flex gap-6 justify-center lg:justify-normal order-1 mb-4 lg:mb-0"
      >
        <img src="~/assets/icon/twitter.svg" />
        <img src="~/assets/icon/linkedin.svg" />
        <img src="~/assets/icon/facebook.svg" />
        <img src="~/assets/icon/github.svg" />
        <img src="~/assets/icon/peace.svg" />
        <img src="~/assets/icon/dribble.svg" />
      </div>
    </div>
  </div>
</template>
