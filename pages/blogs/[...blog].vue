<script setup lang="ts">
const { blog } = useRoute().params
</script>
<template>
  <section class="blog-container">
    <article class="blog-container__content">
      <ContentDoc :path="blog[0]" />
    </article>
  </section>
</template>

<style scoped lang="scss">
.blog-container {
  width: 100%;
  letter-spacing: 0.025em;
  margin: auto;

  &:deep(h1) {
    font-size: 2.5em;
    margin: 1em 0;
    font-weight: bold;
    text-align: center;
    color: map.get($map: $colors, $key: c-primary);
  }

  &:deep(h2) {
    font-size: 2em;
    margin: 1em 0;

    color: map.get($map: $colors, $key: c-primary);
  }

  &:deep(p) {
    margin: 1em 0;
    line-height: 1.75em;
    font-weight: bold;
  }

  &:deep(li) {
    margin: 1em 0;
    padding: 0 1em;

    &:before {
      content: '•';
      margin-right: 0.5em;
    }
  }

  &__content {
    width: 100%;
    max-width: 60em;
    margin: auto;
    padding: 2em;
    background-color: #0f0f0f;
  }
}
</style>
