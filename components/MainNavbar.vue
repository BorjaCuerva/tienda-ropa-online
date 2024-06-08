<script setup lang="ts">
import { INSTAGRAM, FACEBOOK, TIKTOK, TWITTER } from '@/constants/rrss'

const Instagram = defineAsyncComponent(() => import('@/components/svg/Instagram.vue'))
const Facebook = defineAsyncComponent(() => import('@/components/svg/Facebook.vue'))
const Twitter = defineAsyncComponent(() => import('@/components/svg/Twitter.vue'))
const Tiktok = defineAsyncComponent(() => import('@/components/svg/Tiktok.vue'))
const Logo = defineAsyncComponent(() => import('@/components/svg/Logo.vue'))
</script>
<template>
  <nav class="navbar">
    <ul class="navbar__ul">
      <li class="navbar__li">
        <NuxtLink :to="{ name: 'index' }" active-class="active">Home</NuxtLink>
      </li>
      <li class="navbar__li">
        <NuxtLink :to="{ name: 'tienda' }" active-class="active">Tienda</NuxtLink>
      </li>
      <li class="navbar__li">
        <NuxtLink :to="{ name: 'contacto' }" active-class="active">Contacto</NuxtLink>
      </li>
    </ul>
    <NuxtLink class="navbar__logo" :to="{ name: 'index' }">
      <Logo />
    </NuxtLink>
    <ul class="navbar__ul navbar__ul--rrss">
      <li class="navbar__li">
        <NuxtLink :to="INSTAGRAM" target="_blank"><Instagram /></NuxtLink>
      </li>
      <li class="navbar__li">
        <NuxtLink :to="FACEBOOK" target="_blank"><Facebook /></NuxtLink>
      </li>
      <li class="navbar__li">
        <NuxtLink :to="TWITTER" target="_blank"><Twitter /></NuxtLink>
      </li>
      <li class="navbar__li">
        <NuxtLink :to="TIKTOK" target="_blank"><Tiktok /></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.active {
  color: map.get($colors, 'c-primary');
  font-weight: bold;
  border-bottom: 0.0625rem solid map.get($colors, 'c-primary');
}

.navbar {
  padding: 1.4em 2em;
  @include flex(row, center, space-between);
  position: fixed;
  z-index: 1000;
  background: -webkit-linear-gradient(180deg, #000000, #4f4f4f);
  background: linear-gradient(180deg, #000000, #4f4f4f);
  width: 100%;
  top: 0;
  max-width: 120rem;

  @include responsive() {
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

  &__logo {
    transition: map.get($transitions, 't-primary');
    &:hover {
      cursor: pointer;
      scale: 1.1;
    }
    @include responsive() {
      display: none;
    }
  }
}
</style>
