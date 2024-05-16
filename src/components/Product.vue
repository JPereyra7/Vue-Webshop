<script setup lang="ts">
import type { IProduct } from "../models/IProducts";

interface ProductProps {
  product: IProduct;
  onCheckout: boolean;
}
defineProps<ProductProps>();

defineEmits<{
  (e: "buy", id: number): void;
}>();
</script>

<template>
  <article class="product">
    <h3>{{ product.title }}</h3>
    <div class="image-container">
      <img src="product.image" alt="product.title" />
    </div>
    <p>{{product.price}} kr</p>
    <button v-if="!onCheckout" @click="$emit('buy', product.id)">Köp</button>
  </article>
</template>

<style scoped></style>
