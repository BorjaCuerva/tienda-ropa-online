<script setup lang="ts">
import { products } from '@/mocks/products'
const Card = defineAsyncComponent(() => import('@/components/Card.vue'))
const CategoryNavegation = defineAsyncComponent(
  () => import('@/components/common/CategoryNavegation.vue'),
)
</script>
<template>
  <h1>Toda nuestra colección</h1>
  <CategoryNavegation />
  <Card v-for="product in products" :key="product.id" v-bind="product" />
</template>

<!-- <style scoped lang="scss"></style> -->
