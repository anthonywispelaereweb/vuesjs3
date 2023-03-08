<script setup lang="ts">
import type { ProductInterface } from '@/interfaces';
import ShopProduct from './ShopProduct.vue';

defineProps<{
  products: ProductInterface[];
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: string): void;
  (e: 'incPage'): void;
}>();
</script>

<template>
  <div class="d-flex flex-column p-20">
    <div class="grid mb-20">
      <ShopProduct
        @add-product-to-cart="emit('addProductToCart', $event)"
        v-for="product of products"
        :product="product"
        :key="product._id"
      />
    </div>
    <div class="d-flex flex-raw align-items-center justify-content-center ">
      <button @click="emit('incPage')" class="btn btn-primary">Charger plus de produits</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins' as m;
.grid {
  display: grid;
  grid-template-columns: 1fr;
  @include m.md {
    grid-template-columns: 1fr 1fr;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include m.xl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-auto-rows: 400px;
  gap: 20px;
}
</style>