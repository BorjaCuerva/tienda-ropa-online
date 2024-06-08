<script setup lang="ts">
const HeroBlock = defineAsyncComponent(() => import('@/components/HeroBlock.vue'))
</script>
<template>
  <section class="margin">
    <HeroBlock />
  </section>
</template>

<style scoped lang="scss">
.margin {
  margin: 6em 0 0;

  @include responsive() {
    margin: 8em 0 0;
  }
}
</style>
