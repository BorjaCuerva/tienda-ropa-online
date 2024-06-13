<script setup lang="ts">
import { gridItems } from '@/mocks/gridItems'
const GridItem = defineAsyncComponent(() => import('@/components/GridItem.vue'))
</script>
<template>
  <section class="grid">
    <GridItem
      v-for="item in gridItems"
      :class="`grid__item-${item.id}`"
      :key="item.id"
      v-bind="item"
    ></GridItem>
  </section>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-rows: 16em 16em 16em 16em;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    'label0 label0 label0 label1 label1 label2 label2'
    'label0 label0 label0 label1 label1 label2 label2'
    'label3 label3 label3 label4 label4 label5 label5'
    'label3 label3 label3 label4 label4 label5 label5';

  gap: 2em 1em;
  height: 100%;
  margin: 4em 0;
  padding: 0 8em;

  @include responsive(79.375rem) {
    font-size: 0.8em;
    grid-template-areas:
      'label0 label0 label1 label1'
      'label2 label2 label3 label3'
      'label4 label4 label5 label5';

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 16em 16em 16em;
  }

  @include responsive() {
    font-size: 0.6em;
    grid-template-areas:
      'label0'
      'label1'
      'label2'
      'label3'
      'label4'
      'label5';

    grid-template-columns: 1fr;
    grid-template-rows: 16em 16em 16em 16em 16em 16em;
    padding: 0 0 0 1em;
    gap: 0.8em;
  }

  &__item-0 {
    grid-area: label0;
  }
  &__item-1 {
    grid-area: label1;
  }
  &__item-2 {
    grid-area: label2;
  }
  &__item-3 {
    grid-area: label3;
  }
  &__item-4 {
    grid-area: label4;
  }
  &__item-5 {
    grid-area: label5;
  }
}
</style>
