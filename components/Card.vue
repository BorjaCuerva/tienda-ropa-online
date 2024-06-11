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

const addToCart = () => {
  alert('Added to cart')
}
</script>
<template>
  <article>
    <h2>{{ title }}</h2>
    <p>{{ price }}</p>
    <p>{{ category }}</p>

    <NuxtLink class="button" @click="addToCart">Añadir al carrito</NuxtLink>
    <NuxtLink
      class="button"
      :to="{
        name: 'tienda-category-title',
        params: { title: slug, category },
      }"
      >Más información</NuxtLink
    >
  </article>
</template>

<style scoped lang="scss">
.button {
  background-color: crimson;
  padding: 1em 2em;
  width: 10em;
  margin: 0.5em 0;
  cursor: pointer;
}
</style>
