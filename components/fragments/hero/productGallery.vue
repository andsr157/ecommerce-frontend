<script setup lang="ts">
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ProductType } from "~/type";
const modules = [Navigation];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const { product } = defineProps<{ product?: ProductType }>();
</script>

<template>
  <div class="w-[324px] lg:w-full">
    <Swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      :modules="modules"
      style="height: 546px;" 
    >
      <SwiperSlide v-for="(image, index) in product?.images" :key="index" class="bg-red-500">
        
        <div class="bg-gray-100 rounded-lg w-[324px] h-[546px]">
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
      :slidesPerView=4
      :breakpoints="{
        '640': {
          slidesPerView: 4,
        },
        '1024': {
          slidesPerView: 4,
        },
      }"
      :watchSlidesProgress="true"
      :space-between="24"
      :modules="modules"
      :loop="false"
      style="height: auto;" 
    >
      <SwiperSlide v-for="image in product?.images">
        <div class="bg-gray-100 rounded-md w-1/4 lg:w-[132px] lg:h-[124px]">
          <img
            :src="image"
            alt=""
            class="rounded-lg w-20 h-20 lg:w-full lg:h-full object-cover mix-blend-multiply"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
