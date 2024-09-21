<script setup>
import { ref } from "vue";
let message = ref('Hello Vue');
setTimeout(() => {
    message.value = 'Hello Kaspar';
}, 10000);
</script>

<template>
    <div class="container">
        <div class="content">
            <h1>{{ message }}</h1>
            <button class="button is-primary">Click me</button>
        </div>
    </div>
</template>


