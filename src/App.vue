<script setup>
import {ref} from 'vue';
import Modal from './components/Modal.vue';
let modalOpen = ref(false);
let modal2Open = ref(false);
let modal3Open = ref(false);

</script>

<template>
    <div class="container mt-2">
        <button class="button is-primary" @click="modalOpen=true">Open Modal</button>
        <button class="button is-secondary" @click="modal2Open=true" >Open Modal 2</button>
        <button class="button is-secondary" @click="modal3Open=true" >Open Modal 3</button>
        <Modal :isOpen="modalOpen" @close="modalOpen=false" url="https://bulma.io/assets/images/placeholders/1280x960.png"></Modal>
        <Modal :isOpen="modal2Open" @close="modal2Open=false" url="https://picsum.photos/1280/960?r=1"></Modal>
        <Modal :isOpen="modal3Open" @close="modal3Open=false" url="https://picsum.photos/1280/960?r=2"></Modal>

    </div>
</template>
