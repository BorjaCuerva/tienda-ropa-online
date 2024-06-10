<script setup lang="ts"></script>
<template>
  <section class="hero">
    <article class="hero__content">
      <h1 class="hero__title"><Logo /></h1>
      <p>La mejor tienda de ropa deportiva</p>
      <p class="hero__subtext">¡Envíos a todo el país!</p>
    </article>
    <video class="hero__video" muted autoplay loop playsinline>
      <source src="/video/tienda-ropa.webm" type="video/webm" />
      <source src="/video/tienda-ropa.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 46em;

  &__content {
    position: absolute;
    bottom: 3em;
    left: 0.8em;
    z-index: 1;
    font-size: 2.5em;
    text-shadow: 0 0.125em 0.125em rgba(0, 0, 0, 1);

    @include responsive() {
      font-size: 2em;
    }
  }

  &__title {
    width: 8em;
  }

  &__subtext {
    font-size: 0.5em;
    color: map.get($colors, 'c-secondary');
  }
}
</style>
