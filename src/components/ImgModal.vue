<script setup>
import Modal from './Modal.vue';
defineProps(['isOpen', 'url']);

</script>
<template>
    <Modal :isOpen="isOpen" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="url" alt="">
        </p>
    </Modal>
</template>