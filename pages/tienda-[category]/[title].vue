<script setup lang="ts">
import { SHOP } from '@/constants/slugs'
const MainButton = defineAsyncComponent(
  () => import('~/components/common/CategoryButton.vue'),
)
const { title } = useRoute().params

const product = filterSingleProduct(title as string)
</script>
<template>
  <h1>Tienda producto detalle</h1>
  <section>
    <MainButton :slug="SHOP">Volver a la tienda</MainButton>
    {{ product }}
  </section>
</template>
