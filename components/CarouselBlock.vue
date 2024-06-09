<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import { carouselItems } from '@/mocks/carouselItems'

register()
</script>
<template>
  <section class="container">
    <swiper-container class="container__carousel" navigation="true">
      <swiper-slide v-for="items in carouselItems" :key="items.id">
        <img class="container__img" :src="items.imageUrl" :alt="items.alt" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style scoped lang="scss">
.container {
  margin: 4em 0;

  &__carousel {
    width: 100%;
    height: 30em;
  }

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
