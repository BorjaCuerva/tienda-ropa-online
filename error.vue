<script setup lang="ts">
const MainButton = defineAsyncComponent(
  () => import('~/components/common/CategoryButton.vue'),
)
</script>
<template>
  <div class="container">
    <h2 class="container__h2">404</h2>
    <p class="container__p">¡Vaya! Parece que te has perdido.</p>
    <MainButton :slug="'/'">Encontrar el camino de vuelta a casa</MainButton>
  </div>
</template>

<style scoped lang="scss">
.container {
  @include flex(column);
  height: 100vh;
  width: 100%;
  gap: 1em;

  &__h2 {
    font-size: 5em;
  }

  &__p {
    font-size: 3em;
    text-align: center;
    margin: 0 0 0.5em;
  }
}
</style>
