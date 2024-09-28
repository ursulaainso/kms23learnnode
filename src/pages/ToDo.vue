<script setup>
import { ref, computed } from "vue";
import ItemList from '../components/ItemList.vue';

let message = ref('');
let i = 0;
let items = ref([
    { id: i++, text: 'piim', done: false },
    { id: i++, text: 'viin', done: true },
    { id: i++, text: 'sai', done: false },
    { id: i++, text: 'leib', done: true },
]);

function addItem() {
    if (message.value.trim() !== '') {
        items.value.push({ id: i++, text: message.value.trim(), done: false });
    }
    message.value = '';
}

let doneItems = computed(() => {
    return items.value.filter(item => item.done);
});

let toDoItems = computed(() => {
    return items.value.filter(item => !item.done);
});
</script>

<template>

    <div class="content">

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

        <ItemList :items="items" title="All items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
    </div>
</template>
