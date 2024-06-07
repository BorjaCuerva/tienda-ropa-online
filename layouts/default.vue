<script lang="ts" setup>
const MainNavar = defineAsyncComponent(() => import('@/components/MainNavbar.vue'))
const MainFooter = defineAsyncComponent(() => import('@/components/MainFooter.vue'))
</script>

<template>
  <section>
    <MainNavar />
    <slot />
    <MainFooter />
  </section>
</template>
