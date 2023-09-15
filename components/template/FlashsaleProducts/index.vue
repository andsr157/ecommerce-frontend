<script setup lang="ts">
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

import { useProductStore } from "~/store/productStore"

const productStore = useProductStore()

const modules = [Navigation, Autoplay]
const { uniqueId } = defineProps<{ uniqueId: string }>()
</script>

<template>
  <div class="flex flex-col gap-8 px-6 lg:px-28 py-14 bg-gray-50">
    <div>
      <FragmentsHeaderSection labelName="Flash Sale">
        <ElementBagdeTimer />
      </FragmentsHeaderSection>
    </div>
    <div class="relative w-full">
      <Swiper
        :slides-per-view="2"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
          },
          '1024': {
            slidesPerView: 5,
          },
        }"
        :modules="modules"
        :navigation="{
          enabled: true,
          nextEl: `.swiper-button-next-${uniqueId}`,
        }"
        :loop="true"
      >
        <SwiperSlide v-for="data in productStore.products" :key="data.id">
          <NuxtLink :to="`/products/${data.id}`">
            <FragmentsCardProduct :product="data" />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      <div class="absolute z-50 top-1/2 -right-4">
        <ElementButtonNext :idButton="uniqueId" />
      </div>
    </div>
  </div>
</template>
