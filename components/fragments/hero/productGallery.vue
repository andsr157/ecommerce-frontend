<script setup lang="ts">
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ProductType } from "~/type";
const modules = [Navigation, Thumbs];

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const { product } = defineProps<{ product?: ProductType }>();
</script>

<template>
  <div class="w-[348px] lg:w-full">
    <Swiper
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      :modules="modules"
      style="height: 400px;" 
    >
      <SwiperSlide v-for="(image, index) in product?.images" :key="index" >
        
        <div class="bg-gray-100 rounded-lg w-full h-full  lg:h-[546px] lg:w-full">
          <img
            :src="image"
            alt=""
            class="w-full h-full object-fit rounded-lg mx-auto mix-blend-multiply"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper
      class="mx-auto mt-2 justify-between overflow-hidden"
      @swiper="setThumbsSwiper"
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
        <div class="bg-gray-100 rounded-md w-20 lg:w-[132px] lg:h-[124px]">
          <img
            :src="image"
            alt=""
            class="rounded-lg w-full h-20 lg:w-full lg:h-full object-cover mix-blend-multiply"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
