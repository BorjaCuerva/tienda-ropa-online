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
  flex-wrap: wrap;
  gap: 1em;
  background-color: #0f0f0f;
  padding: 1.5em;
  position: sticky;
  top: 5.9em;

  @include responsive() {
    padding: 1em;
    top: 8.9em;
  }
}
</style>
