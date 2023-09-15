<template>
  <!-- <div class="w-8 h-8 rounded-full text-white bg-black/30 cursor-pointer">
      <div class="">
        <img src="../../assets/icon/next.svg" alt="" class="" />
      </div>
    </div> -->
  <div
    :class="`swiper-button-next-${idButton} swiper-button-next cursor-pointer`"
  >
    <img src="~/assets/icon/next.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
const { idButton } = defineProps<{ idButton: string }>()
</script>

<style>
.swiper-button-next {
  border-radius: 100%;
  border: 1px solid;
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: small;
}
.swiper-button-next::after {
  display: none;
}
</style>
