<script setup lang="ts">
type Props = {
  title: string
  price: number
  category: string
  size: string
  imgUrl: string
  slug: string
}

defineProps<Props>()
</script>
<template>
  <article>
    <h2>{{ title }}</h2>
    <p>{{ price }}</p>
    <p>{{ category }}</p>
    <NuxtLink
      class="button"
      :to="{ name: 'tienda-category-title', params: { title: slug, category } }"
      >Comprar</NuxtLink
    >
  </article>
</template>

<style scoped lang="scss">
.button {
  background-color: crimson;
  padding: 1em 2em;
  width: 10em;
}
</style>
