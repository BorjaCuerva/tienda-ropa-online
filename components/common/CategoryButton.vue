<script setup lang="ts">
type Props = {
  slug: string
}

defineProps<Props>()
</script>
<template>
  <NuxtLink class="button" :to="slug"><slot></slot></NuxtLink>
</template>

<style scoped lang="scss">
.button {
  background-color: map.get($colors, 'c-primary');
  padding: 1em 2em;
  margin: 0 0.8em;
  cursor: pointer;
  border-radius: 0.4em;
  color: map.get($colors, 'c-black');
  font-weight: 800;
  transition: all 0.3s ease;
  min-width: 14em;
  max-width: 14em;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

  @include responsive() {
    padding: 0.8em 1.5em;
    margin: 0 0.5em;
    min-width: 10em;
    max-width: 10em;
  }
}
</style>
