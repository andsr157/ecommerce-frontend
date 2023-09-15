<script setup lang="ts"></script>
<template>
  <div class="mb-8">
    <div class="text-[18px] font-semibold text-gray-700 pb-4">
      <slot name="heading"></slot>
    </div>
    <div class="text-sm lg:text-base font-semibold text-gray-200 pe-3">
      <ul class="flex flex-col gap-3">
        <slot name="link"></slot>
      </ul>
    </div>
  </div>
</template>
