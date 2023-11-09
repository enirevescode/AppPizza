<script setup>
import {ref} from 'vue'
const Products= ref([
       { 
        name: "Pizza Royale",
        price: 12
      }
])
</script>
<template>
  <h1>et voila</h1>
    <div class="product-section">
      <div class="product-image">
        <img src="" />
        <h2>ha</h2>
      </div>
      <div class="product-description">
        <h1>we love </h1>
        <span class="price">{{ price }}</span>
      </div>
    </div>
</template>
<style scoped>

</style>