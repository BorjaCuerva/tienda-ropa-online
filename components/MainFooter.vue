<script setup lang="ts">
import { INSTAGRAM, FACEBOOK, TIKTOK, TWITTER } from '@/constants/rrss'
</script>
<template>
  <footer class="footer">
    <ul class="footer__ul footer__ul--rrss">
      <li class="footer__li">
        <NuxtLink :to="INSTAGRAM" target="_blank"><Instagram /></NuxtLink>
      </li>
      <li class="footer__li">
        <NuxtLink :to="FACEBOOK" target="_blank"><Facebook /></NuxtLink>
      </li>
      <li class="footer__li">
        <NuxtLink :to="TWITTER" target="_blank"><Twitter /></NuxtLink>
      </li>
      <li class="footer__li">
        <NuxtLink :to="TIKTOK" target="_blank"><Tiktok /></NuxtLink>
      </li>
    </ul>
    <span class="footer__span">@ Sportivat Todos los derechos reservados</span>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: -webkit-linear-gradient(180deg, #000000, #4f4f4f);
  background: linear-gradient(180deg, #000000, #4f4f4f);
  padding: 1.4em 8em;
  @include flex(row, center, space-between);
  width: 100%;
  max-width: 120rem;

  @include responsive() {
    @include flex(column, center, center);
    padding: 1em;
  }

  &__ul {
    @include flex(row, center);
    list-style: none;
    @include responsive() {
      @include flex(column);
    }

    &--rrss {
      @include responsive() {
        @include flex(row, center, center);
      }
    }
  }

  &__li {
    margin: 0 1em 0 0;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: map.get($colors, 'c-primary');
    }

    @include responsive() {
      margin: 0 0 0.5em 0.5em;
    }
  }

  &__span {
    @include responsive() {
      font-size: 0.8em;
    }
  }
}
</style>
