<template>
  <div class="flex ms-[26px] flex-wrap lg:flex-nowrap gap-7 lg:gap-16">
    <ElementListFooter>
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

    <ElementListFooter>
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
</template>
