<script setup>
defineProps(['isOpen']);
</script>
<template>
    <div class="modal" :class="{ 'is-active': isOpen }">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>