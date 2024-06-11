<script setup lang="ts">
import { STORE_SLUGS } from '@/constants/slugs'
const CategoryButton = defineAsyncComponent(
  () => import('~/components/common/CategoryButton.vue'),
)
</script>
<template>
  <section class="navigation">
    <CategoryButton v-for="slugs in STORE_SLUGS" :slug="slugs.slug">{{
      slugs.name
    }}</CategoryButton>
  </section>
</template>

<style scoped lang="scss">
.navigation {
  @include flex();
  background-color: #0f0f0f;
  padding: 1.5em 0;
  margin: 2em 0;
}
</style>
