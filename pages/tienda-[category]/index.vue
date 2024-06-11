<script setup lang="ts">
const Card = defineAsyncComponent(() => import('@/components/Card.vue'))
const CategoryNavegation = defineAsyncComponent(
  () => import('@/components/common/CategoryNavegation.vue'),
)
const { category } = useRoute().params
const products = filterProductsByCategory(category as string)
</script>
<template>
  <h1>Tienda productos por categoria</h1>
  <section>
    <CategoryNavegation />
    <Card v-for="product in products" :key="product.id" v-bind="product" />
  </section>
</template>
