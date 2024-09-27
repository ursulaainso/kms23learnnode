<script setup>
import { ref } from "vue";
let message = ref('');
let items = ref([
    'piim',
    'viin',
    'sai',
    'leib'
]);

function addItem() {
    if(message.value.trim() !== ''){
        items.value.push(message.value.trim());
    }
    message.value = '';
}
</script>

<template>
    <div class="container">
        <div class="content mt-3">

            <div class="field has-addons">
                <div class="control">
                    <input v-model="message" @keydown.enter="addItem" class="input" type="text" placeholder="Item to add">
                </div>
                <div class="control">
                    <button class="button is-info" @click="addItem">
                        Add
                    </button>
                </div>
            </div>
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
