<script setup lang="ts">
import { FeatureType } from "~/type/"

const props = defineProps<{ featureData: FeatureType[] }>()
</script>

<template>
  <div v-for="data in props.featureData" :key="data.title">
    <div class="flex flex-col justify-center items-center lg:gap-5">
      <div class="w-16 h-16 lg:w-[126px] lg:h-[126px]">
        <img src="~/assets/feature/handphone.svg" alt="" class="w-full" />
      </div>
      <div class="text-base font-semibold px-5 mt-3 lg:mt-0 text-center w-36">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>
