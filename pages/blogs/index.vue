<script setup lang="ts">
import { blogs } from '@/mocks/blogList'

const BlogCard = defineAsyncComponent(() => import('@/components/BlogCard.vue'))
</script>
<template>
  <section class="grid">
    <BlogCard
      v-for="{ slug, title, alt, date, description, imgUrl } in blogs"
      :key="slug"
      :title="title"
      :description="description"
      :date="date"
      :imgUrl="imgUrl"
      :slug="slug"
      :alt="alt"
    >
      <nuxt-link :to="`/blogs/${slug}`">{{ title }}</nuxt-link>
    </BlogCard>
  </section>
</template>

<style scoped lang="scss">
.grid {
  @include flex(column);
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 3em 0;
}
</style>
