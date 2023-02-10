

<template>
	<H1>Exemple question</H1>
	<p>
    Posez une question (réponse oui / non) :
    <input v-model="question" />
  </p>
  <p v-if="reponse.image">Réponse : {{ reponse.res }}</p>
  <img :src="reponse.image" />
</template>


<script setup lang="ts">
import { reactive, watch, ref } from 'vue';
const question = ref('');
const reponse = reactive({
  res: 'En attente de votre question...',
  image: '',
});
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    reponse.res = 'Requête en cours... ';
    try {
      const res = await fetch('https://yesno.wtf/api');
      const resJSON = await res.json();
      reponse.res = resJSON.answer;
      reponse.image = resJSON.image;

    } catch (error) {
      console.log("🚀 ~ file: App.vue:57 ~ watch ~ error", error)
      reponse.res = `Erreur : ${error}` 
      
    }
  }
})
</script>
<style scoped>

</style>