<script setup>
import {ref} from 'vue'
const products = ref([
       { 
        "name": "Pizza Royale",
        "price": 12,
        "image": "src/assets/img/pizza2.jpg",
        "sale": true,
        "notAvailable": true,
      }
])
</script>
<template>
    <div class="product-section" v-for="product in products">
      <div class="product-image">
        <img :src= "product.image"/>
      </div>
      <div class="product-description">
        <h1>{{ product.name }}</h1>
        <p v-show="product.notAvailable">Momentanément indisponible !</p>
        <p v-if="product.sale">
          <span class="sale">{{ product.price }}€</span>
          <span class="new-price">{{ product.price - 5 }}€</span>
        </p>
        <p v-else>
        <span class="price">{{ product.price }} €</span>
        </p>
      </div>
    </div>
</template>
<style scoped>

</style>