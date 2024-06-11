<script setup lang="ts">
type Props = {
  title: string
  imgUrl: string
  route: string
}

defineProps<Props>()
</script>
<template>
  <NuxtLink :style="{ backgroundImage: `url(${imgUrl})` }" class="card" :to="route">
    <h2 class="card__h2">{{ title }}</h2>
  </NuxtLink>
</template>
<style scoped lang="scss">
.card {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 0.5em;
  filter: grayscale(100%);
  cursor: pointer;
  transition: 0.3s filter ease;
  font-weight: bold;
  font-size: 1.5em;

  &:hover {
    filter: grayscale(0%);
  }

  &__h2 {
    position: absolute;
    bottom: 1em;
    left: 0.5em;
    text-shadow: 0 0.125em 0.125em rgba(0, 0, 0, 1);
    z-index: 10;
    color: map.get($map: $colors, $key: c-primary);
  }
}
</style>
