<script setup>
import { ref } from "vue";
let message = ref('Hello Vue');
setTimeout(() => {
    message.value = 'Hello Kaspar';
}, 10000);
</script>

<template>
    <h1>{{ message }}</h1>
</template>


