<script setup lang="ts">
import { products } from '@/mocks/products'
const Card = defineAsyncComponent(() => import('@/components/Card.vue'))
const CategoryNavegation = defineAsyncComponent(
  () => import('@/components/common/CategoryNavegation.vue'),
)
</script>
<template>
  <CategoryNavegation />
  <h1 class="title">Toda nuestra colección</h1>
  <section class="grid">
    <Card v-for="product in products" :key="product.id" v-bind="product" />
  </section>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(30em, 1fr));
  padding: 1em 8em;
}

.title {
  text-align: center;
  margin: 2em 0 0;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: bold;
  color: map.get($colors, 'c-primary');
}
</style>
