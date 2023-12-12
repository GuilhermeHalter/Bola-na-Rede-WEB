<script setup>

import {ref, reactive } from "vue";

import CamisaService from "../services/Camisas"
import imageService from "../services/images"

const coverUrl = ref("");
const file = ref(null);
const camisaAtual = reactive({
    descricao: "",
    quantidade: "",
    preco: 0,
    time:null,
})

function onFileChange(e) {
  file.value = e.target.files[0];
  coverUrl.value = URL.createObjectURL(file.value);
}

async function salvar(){
    const capa = await imageService.uploadImage(file.value);
    camisaAtual.capa_attachment_key = capa.attachment_key;
    await CamisaService.saveCamisas(camisaAtual);
    Object.assign(camisaAtual, {
        id:"",
        descricao: "",
        quantidade:"",
        preco: 0,
        time:null,
        capa_attachment_key:"",
    });
    showForm.value = false;
}

const showForm = ref(false);
</script>

<template>
    <from>
        <div>
            <input type="file" @change="onFileChange"/>
            <div>
                <img v-if="coverUrl" :src="coverUrl"/>
            </div>
        </div>
        <div>
            <input type="text" v-model="camisaAtual.descricao" placeholder="Descrição"/>
        </div>
        <div>
            <input type="text" v-model="camisaAtual.quantidade" placeholder="Quantidade"/>
        </div>
        <div>
            <input type="number" v-model="camisaAtual.preco" placeholder="Preço"/>
        </div>
        <div>
            <input type="text" v-model="camisaAtual.time" placeholder="Time"/>
        </div>

        <div>
            <button @click="salvar">Salvar</button>
        </div>

    </from>
</template>
<style scoped>

</style>