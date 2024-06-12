<script setup lang="ts">
const MainButton = defineAsyncComponent(
  () => import('@/components/common/MainButton.vue'),
)

type Props = {
  title: string
  price: number
  category: string
  size: string
  imgUrl: string
  slug: string
}

const props = defineProps<Props>()

const styleCard = ref({
  backgroundImage: `url(${props.imgUrl})`,
})
</script>
<template>
  <article class="card" :style="styleCard">
    <div class="card__container">
      <article class="card__info">
        <h2 class="card__title">{{ title }}</h2>
        <span>{{ size }}</span>
        <span class="card__price">{{ price }}€</span>
      </article>
      <article class="card__buttons">
        <MainButton>Añadir al carrito</MainButton>
        <MainButton
          :to="{
            name: 'tienda-category-title',
            params: { title: slug, category },
          }"
          >Más información</MainButton
        >
      </article>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  @include flex(column, center, flex-end);
  margin: 1em;
  width: 30em;
  height: 40em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.5em;

  &__container {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 1em 2em;
  }

  &__info {
    @include flex();
    padding: 1em;
    gap: 1em;
    border-radius: 0.5em;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-size: 1.5em;
  }

  &__price {
    font-size: 2em;
    font-weight: bold;
    color: map.get($colors, 'c-primary');
  }

  &__buttons {
    @include flex(column);
    gap: 1em;
  }
}
</style>
