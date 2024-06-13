<script setup lang="ts">
const HeroBlock = defineAsyncComponent(() => import('@/components/HeroBlock.vue'))
const GridBlock = defineAsyncComponent(() => import('@/components/GridBlock.vue'))
const CarouselBlock = defineAsyncComponent(() => import('@/components/CarouselBlock.vue'))
</script>
<template>
  <section class="container">
    <HeroBlock />
    <GridBlock />
    <CarouselBlock />
  </section>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
