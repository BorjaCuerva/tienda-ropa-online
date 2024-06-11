<script setup lang="ts">
const { category } = useRoute().params
const pito = filterProducts(category as string)
</script>
<template>
  <div>
    <h1>TIENDA CATEGORY</h1>
    {{ pito }}
  </div>
</template>
