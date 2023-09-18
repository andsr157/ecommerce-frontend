<script setup lang="ts">
import { useCartStore } from "~/store/cartStore"
import { useProductStore } from "~/store/productStore"
import { ProductType, productProp } from "~/type"
const productStore = useProductStore()
const cartStore = useCartStore()
const { id } = useRoute().params
const uri = "https://dummyjson.com/products/" + id

definePageMeta({
  layout: "products",
})

// const { data: product } = await useFetch<ProductType>(uri)

const product = productStore.getProductById(Number(id)) || null

onMounted(async() => {
  await productStore.getProducts()
})
console.log(productStore.getProducts())
console.log(product)

const decrementQty = () => {
  if (cartStore.inputQty > 1) {
    cartStore.inputQty--
  }
}

const incrementQty = () => {
  const stock = product?.stock
  if (cartStore.inputQty <= stock) {
    cartStore.inputQty++
  }
}

const inputQty = computed(() => {
  if (cartStore.inputQty > product.stock) {
    return product.stock
  }
})

const prodProp: Ref<productProp> = ref({
  color: [
    {
      name: "green",
      code: "bg-green-500",
      isactive: true,
      isAvailable: true,
    },
    {
      name: "orange",
      code: "bg-orange-500",
      isactive: false,
      isAvailable: true,
    },
    {
      name: "indigo",
      code: "bg-indigo-500",
      isactive: false,
      isAvailable: false,
    },
  ],
  size: [
    { unit: "S", isAvailable: true, isactive: false },
    { unit: "M", isAvailable: false, isactive: false },
    { unit: "L", isAvailable: true, isactive: false },
    { unit: "XL", isAvailable: true, isactive: true },
  ],
})

function handlerButtonSize(size: any) {
  prodProp.value.size.map((size) => {
    size.isactive = false
  })
  size.isactive = true
}

function handlerButtonColor(color: any) {
  prodProp.value.color.map((color) => {
    color.isactive = false
  })
  color.isactive = true
}
</script>

<template>
  <div class="bg-gradient-to-b from-sky-200 to-white">
    <div class="px-6 lg:px-28 pt-[136px] pb-[72px]"><FragmentsHeaderProductdetail /></div>
  </div>
  <div class="px-6 lg:px-28">
    <div class="grid lg:grid-cols-2 gap-8 pb-12 lg:pb-24">
      <FragmentsHeroProductGallery v-if="product" :product="product" />
      <div class="flex flex-col gap-6 lg:gap-8">
        <div class="font-semibold">
          <h2 class="text-2xl lg:text-[30px] text-gray-900 mb-2">{{ product?.title }}</h2>
          <h3 class="text-primary-700 text-xl lg:text-2xl">${{ product?.price }}</h3>
        </div>
        <div>
          <p class="text-sm lg:text-base mb-2 font-medium text-gray-500 leading-6">Color</p>
          <div class="flex  gap-4">
            <div v-for="color in prodProp.color">
              <div>
                <FragmentsCardColorOption
                  :color="color"
                  @click="handlerButtonColor(color)"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm lg:text-base mb-2 font-medium text-gray-500 leading-6">Size</p>
          <div class="flex  gap-4">
            <div v-for="size in prodProp.size">
              <ElementButtonSize
                @click="handlerButtonSize(size)"
                :size="size.unit"
                :isactive="size.isactive"
                :isAvailable="size.isAvailable"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm lg:text-base mb-2 font-medium text-gray-500 leading-6">Quantity</p>
          <div class="flex flex-1 h-9 lg:h-14 gap-4">
            <button
              :class="`text-white w-9 lg:w-14 text-2xl font-semibold rounded-lg ${
                cartStore.inputQty <= 1 ? 'bg-gray-200 ' : 'bg-primary-600'
              }`"
              @click="decrementQty"
            >
              <p class="leading-full font-bold text-2xl">-</p>
            </button>
            <input
              type="number"
              v-model="cartStore.inputQty"
              class="text-sm lg:text-xl rounded-lg border-[1px] border-gray-300 w-9 lg:w-14 text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              :class="`text-white w-9 lg:w-14 text-2xl font-semibold rounded-lg ${
                cartStore.inputQty <= (product?.stock ?? 0)
                  ? 'bg-primary-600'
                  : 'bg-gray-200'
              }`"
              @click="incrementQty"
            >
              <span class="leading-full">+</span>
            </button>
          </div>
        </div>

        <div>
          <div class="flex w-full justify-between items-center">
            <p class="text-sm lg:text-base mb-2 font-medium text-gray-500 leading-6">Description</p>
            <div
              class="p-1 lg:p-[6px] rounded-lg border-[1px] border-primary-50 flex items-center"
            >
              <img src="~/assets/icon/minus.svg" alt="" />
            </div>
          </div>
          <div class="w-full ">
            <p class="text-[14px] lg:text-xl font-semibold leading-7 text-[#262262]">
              {{ product?.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
