<script setup>
import {ref, onMounted} from "vue";
import CamisaService from "../services/Camisas"

const camisas = ref([]);

onMounted(async () => {
  await carregarCamisas();
});

const carregarCamisas = async () => {
  const data = await CamisaService.getAllCamisas();
  camisas.value = data;
}

</script>

<template>
  <div class="container">
    <div v-for="camisa in camisas" :key="camisa.id" class="card">
      <img v-if="camisa.capa" :src="camisa.capa.url" class="card-image" />
      <h2>{{ camisa.descricao }}</h2>
      <p>Quantidade: {{ camisa.quantidade }}</p>
      <p>Preço: {{ camisa.preco }}</p>
      <p>Time: {{ camisa.time }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box; /* Adicionado para incluir padding e border no tamanho total */
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%; /* Tornar a imagem ocupar 100% da largura do contêiner pai */
  height: auto; /* Manter a proporção da imagem */
  border-radius: 8px; /* Adicionar borda arredondada */
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  margin: 0;
}

/* Consulta de mídia para ajustar o layout em telas menores */
@media (max-width: 768px) {
  .card {
    width: 100%; /* Ocupar 100% da largura em telas menores */
  }
}
</style>
