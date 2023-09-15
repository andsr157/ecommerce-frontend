<script setup lang="ts">
import { Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css" // Import Swiper styles
import { useProductStore } from "~/store/productStore"

const productStore = useProductStore()

const modules = [Navigation, Autoplay]

const { uniqueId } = defineProps<{ uniqueId: string }>()
</script>

<template>
  <div class="px-6 py-12 lg:px-28 lg:py-24">
    <div class="relative">
      <div class="absolute z-40 top-1/2 -right-[-6px] lg:-right-[-6px]">
        <ElementButtonNext :id-button="uniqueId" />
      </div>
      <div>
        <FragmentsHeaderSection labelName="Latest Product" />
      </div>
      <div class="py-8 pe-8 flex relative overflow-hidden">
        <FragmentsCardDiscount />

        <div
          class="container w-40 lg:w-full absolute ms-40 lg:ms-56 mt-2 lg:mt-8"
        >
          <Swiper
            :autoHeight="true"
            :slides-per-view="1"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
              },
              '1024': {
                slidesPerView: 5,
              },
              '1440': {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }"
            :modules="modules"
            :space-between="24"
            :navigation="{
              enabled: true,
              nextEl: `.swiper-button-next-${uniqueId}`,
            }"
            :loop="true"
          >
            <SwiperSlide v-for="data in productStore.products" :key="data.id">
              <NuxtLink :to="`/products/${data.id}`">
                <FragmentsCardProductsmall :product="data" />
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
