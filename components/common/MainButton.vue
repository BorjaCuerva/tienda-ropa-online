<script setup lang="ts">
import { SHOP } from '@/constants/slugs'
type Props = {
  slug?: string
}

defineProps<Props>()
</script>
<template>
  <NuxtLink class="button" :to="SHOP"><slot></slot></NuxtLink>
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
  width: 100%;
  min-width: 14em;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
