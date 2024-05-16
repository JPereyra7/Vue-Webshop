<script setup lang="ts">
import type { IProduct } from "../models/IProducts";
import type { ICartItem } from "@/models/ICartitem";
import Product from "./Product.vue";

interface ProductsProp {
  products: IProduct;
  cart: ICartItem;
}

defineProps<ProductsProp>();

defineEmits<{
  (e: "handleBuy", id: number): void;
}>();
</script>

<template>
  <section class="products">
    <Product
      v-for="product in products"
      :product="product"
      :key="product.id"
      :on-checkout="false"
      @buy="(id: number) => { $emit('handleBuy', id) }"
    />
  </section>
</template>

<style scoped></style>
