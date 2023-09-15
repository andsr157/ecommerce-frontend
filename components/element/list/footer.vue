<script setup lang="ts"></script>
<template>
  <div>
    <div class="lg:text-sm font-semibold text-gray-300 pb-4 w-36 lg:w-0">
      <slot name="heading"></slot>
    </div>
    <div class="text-sm lg:text-base font-semibold text-gray-200 pe-3">
      <ul class="flex flex-col gap-3">
        <slot name="link"></slot>
      </ul>
    </div>
  </div>
</template>
