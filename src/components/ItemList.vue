<script setup>
defineProps(['items', 'title']);
</script>
<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            <label class="checkbox">
                <input type="checkbox" v-model="item.done" />
                {{ item.text }}
            </label>
        </li>
    </ul>
</template>