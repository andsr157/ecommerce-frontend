<template>
  <div class="container lg:flex lg:justify-between">
    <div class="text-gray-200">
      <h1 class="text-lg lg:text-xl mb-2 font-semibold">Join our newsletter</h1>
      <p class="text-sm lg:text-base text-gray-200">
        Join over 4,000+ startups already growing with Morpheme.
      </p>
    </div>
    <div class="flex gap-4 items-start mt-8 lg:mt-3">
      <div>
        <input
          type="text"
          class="p-3 rounded-md lg:rounded-lg box-border w-52 lg:w-72 mb-3 lg:mb-2 text-sm"
          placeholder="Enter Your Email"
        />
        <img src="~/assets/icon/info-circle.svg" alt="" />
      </div>
      <div class="bg-primary-600 text-sm lg:text-base text-white rounded-lg">
        <button class="py-3 px-5 min-w-full h-full">Subsribe</button>
      </div>
    </div>
  </div>
</template>
