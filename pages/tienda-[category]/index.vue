<script setup lang="ts">
const Card = defineAsyncComponent(() => import('@/components/Card.vue'))
const CategoryNavegation = defineAsyncComponent(
  () => import('@/components/common/CategoryNavegation.vue'),
)
const { category } = useRoute().params
const products = filterProductsByCategory(category as string)
</script>
<template>
  <CategoryNavegation />
  <h1 class="title">{{ category }}</h1>
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

  @include responsive() {
    padding: 1em;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  }
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
