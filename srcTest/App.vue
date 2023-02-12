
<template>
  <section class="product-list">
    <PriceProduct v-for="(product,i) of products" @changeQt="updateQt"  :product="product" :key="i"/>
  </section>
  <div v-show="totalProductHT !== '0 HT €'">Le total HT est : {{ totalProductHT }}</div>
  <div v-show="totalProductTTC !== '0 HT €'">Le total TTC est : {{ totalProductTTC }}</div>
  <Answer/>

  
</template>
<script setup lang="ts">
import { computed, reactive, watch} from 'vue';
import type { IProduct } from './interfaces/product.interface'
const products =reactive<IProduct[]>( [
  {
    id: 1,
    quantite: 0,
    prix: 150,
    tva: 20,
    nom: 'voiture',
    total : 0
    }, 
    {
    id: 2,
    quantite: 0,
    prix: 100,
    tva: 10,
    nom: 'moto',
    total : 0
  }
])

const updateQt = (idEl:number, val: any) => {
  products.map(el => {
    if (el.id === idEl) {
      el.quantite = val;
      return el.total = el.quantite * el.prix;
    }
  })
}

const totalProductHT = computed(()=> `${products.reduce((a, b) => (b.quantite * b.prix) + a ,0)} € HT`)
const totalProductTTC = computed(()=> `${(products.reduce((a, b) => ((b.quantite * b.prix * (1 + b.tva/100))) + a ,0)).toFixed(2)} € TTC`)
watch([products], () => {
  products.map(el => el.total = el.quantite * el.prix)
})

</script>
<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;

}

</style>




