<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';

let chars = ref([]);
let info = ref({});
let current = 1;
getCharacter(current);

function getCharacter(page) {
    axios.get('https://rickandmortyapi.com/api/character', {
        params: {
            page
        }
    }).then(response => {
        console.log(response);
        chars.value = response.data.results;
        info.value = response.data.info;
    });
}

function next() {
    getCharacter(++current);
}
function prev() {
    getCharacter(--current);
}

</script>
<template>
    <div class="field has-addons">
        <p class="control">
            <button class="button" @click="prev" :disabled="current <= 1">
                <span>Prev</span>
            </button>
        </p>
        <p class="control">
            <button class="button" disabled>
                <span>{{ current }}/{{ info.pages }}</span>
            </button>
        </p>
        <p class="control">
            <button class="button" @click="next" :disabled="current >= info.pages">
                <span>Next</span>
            </button>
        </p>
    </div>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="char in chars">
            <CharacterCard :char="char"></CharacterCard>
        </div>

    </div>

</template>