<script setup lang="ts">
type Props = {
  title: string
  description: string
  date: string
  imgUrl: string
  alt: string
  slug: string
}

defineProps<Props>()
</script>
<template>
  <NuxtLink class="card" :to="`/blogs/${slug}`">
    <article class="card">
      <header class="card__header">
        <time>{{ date }}</time>
      </header>
      <div class="card__div">
        <img class="card__img" :src="imgUrl" :alt="alt" />
      </div>
      <footer class="card__footer">
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__description">{{ description }}</p>
      </footer>
    </article>
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  color: white;
  transition: transform 0.3s;
  width: 50em;

  &:hover {
    transform: scale(1.02);
  }

  @include responsive() {
    width: 24em;
  }

  &__header {
    background-color: #0f0f0f;
    padding: 2em 1em;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    font-weight: 600;
  }

  &__div {
    height: 20em;
    width: 100%;
  }

  &__img {
    height: 100%;
    width: 100%;
  }

  &__footer {
    background-color: #0f0f0f;
    padding: 2em 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

  &__title {
    font-size: 1.5rem;
    color: map.get($colors, c-primary);
    font-weight: bold;
    margin: 0 0 1em;
  }

  &__description {
    font-size: 1rem;
  }
}
</style>
