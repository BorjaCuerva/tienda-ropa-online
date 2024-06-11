<script setup lang="ts">
import { products } from '@/mocks/products'
import Card from '@/components/Card.vue'
</script>
<template>
  <h1>TIENDA</h1>
  <Card v-for="product in products" :key="product.id" v-bind="product" />
</template>
