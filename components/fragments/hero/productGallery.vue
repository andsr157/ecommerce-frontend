<script setup lang="ts">
import { Navigation, FreeMode, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
import { ProductType } from "~/type"
const modules = [Navigation, FreeMode, Thumbs]

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
}

const { product } = defineProps<{ product?: ProductType }>()
</script>

<template>
  <div>
    <Swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      :modules="modules"
    >
      <SwiperSlide v-for="(image, index) in product?.images" :key="index">
        <div class="bg-gray-100 rounded-lg w-full h-[546px]">
          <img
            :src="image"
            alt=""
            class="w-full h-full object-cover mx-auto mix-blend-multiply"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      class="mx-auto mt-2"
      @swiper="setThumbsSwiper"
      :slides-per-view="2"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
        },
        '1024': {
          slidesPerView: 4,
        },
      }"
      :freeMode="true"
      :watchSlidesProgress="true"
      :space-between="24"
      :modules="modules"
    >
      <SwiperSlide v-for="image in product?.images">
        <div class="bg-gray-100 rounded-md w-[132px] h-[124px]">
          <img
            :src="image"
            alt=""
            class="rounded-lg w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
