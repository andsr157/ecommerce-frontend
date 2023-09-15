<template>
  <div class="bg-gray-800 px-6 lg:px-28">
    <FragmentsFooterProduct></FragmentsFooterProduct>
    <div class="my-8 ms-[26px] lg:ms-0 lg:my-16 flex flex-wrap lg:flex-nowrap gap-7 lg:gap-0  justify-between">
      <ElementListFooter class="mb-6 lg:mb-0">
        <template v-slot:heading> Product </template>
        <template v-slot:link>
          <li>Overview</li>
          <li>Features</li>
          <div class="flex gap-2">
            <li>Solutions</li>
            <ElementBagdeNew />
          </div>
          <li>Tutorials</li>
          <li>Pricing</li>
          <li>Releases</li>
        </template>
      </ElementListFooter>

      <ElementListFooter>
        <template v-slot:heading> Company </template>
        <template v-slot:link>
          <li>About us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Media Kit</li>
          <li>Contact</li>
        </template>
      </ElementListFooter>
      <ElementListFooter class="mb-6 lg:mb-0">
        <template v-slot:heading> Resources </template>x``
        <template v-slot:link>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Event</li>
          <li>Help Centre</li>
          <li>Tutorials</li>
          <li>Support</li>
        </template>
      </ElementListFooter>

      <ElementListFooter>
        <template v-slot:heading> Resources </template>x``
        <template v-slot:link>
          <li>Blog</li>
          <li>Newsletter</li>
          <li>Event</li>
          <li>Help Centre</li>
          <li>Tutorials</li>
          <li>Support</li>
        </template>
      </ElementListFooter>

      <ElementListFooter class="mb-6 lg:mb-0">
        <template v-slot:heading> Social </template>
        <template v-slot:link>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Github</li>
          <li>Angelist</li>
          <li>Drubble</li>
        </template>
      </ElementListFooter>

      <ElementListFooter>
        <template v-slot:heading> Legal </template>
        <template v-slot:link>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Licenses</li>
          <li>Setting</li>
          <li>Contact</li>
        </template>
      </ElementListFooter>
    </div>
    <div
      class="flex flex-col lg:flex-row justify-between border-t-2 border-gray-600 pt-6 lg:pt-8 pb-12"
    >
      <div
        class="text-gray-500 order-2 text-sm lg:text-base text-center lg:text-left"
      >
        © 2077 Morpheme UI. All rights reserved.
      </div>
      <div
        class="flex gap-6 justify-center lg:justify-normal order-1 mb-4 lg:mb-0"
      >
        <img src="~/assets/icon/twitter.svg" />
        <img src="~/assets/icon/linkedin.svg" />
        <img src="~/assets/icon/facebook.svg" />
        <img src="~/assets/icon/github.svg" />
        <img src="~/assets/icon/peace.svg" />
        <img src="~/assets/icon/dribble.svg" />
      </div>
    </div>
  </div>
</template>
