
<template>
	<section class="product">
		<div>
			<span for="quantity">Nombre de {{ props.product.nom }} : {{ props.product.quantite }}</span>
		</div>
	
		<div>
			<label for="prix">Quantité : </label><input @input="emit('changeQt', props.product.id, updatedPrice )" id="prix" type="number" v-model="updatedPrice" />
		</div>
		<h2>Prix unitaire  HT : {{ props.product.prix }}</h2>
		<h2>Prix total HT : {{ prixHT }}</h2>
		<h2>Prix produit TTC : {{ prixTTC }}</h2>

	</section>

</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import type { IProduct } from './../interfaces/product.interface'
const props = defineProps<{
	product: IProduct
}>()

const emit = defineEmits<{
	(e: 'changeQt', id:number,newVal: number): void
}>()
const updatedPrice = ref(props.product.quantite)

const prixHT = computed(() => `${props.product.total} €`);
const prixTTC = computed(() => `${Math.round(props.product.total * (1 + props.product.tva/100))} €`);

</script>
<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  padding: .5rem;
  border: 1px solid black;
  border-radius: 10px;
  
}

</style>
