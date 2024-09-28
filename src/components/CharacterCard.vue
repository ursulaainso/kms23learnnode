<script setup>
defineProps(['char']);
</script>
<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ char.name }}</p>
        </header>
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="char.image" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <p><b>Species:</b> {{ char.species }}</p>
                <p><b>Gender:</b> {{ char.gender }}</p>
                <p><b>Origin:</b> {{ char.origin.name }}</p>
                <p><b>Location:</b> {{ char.location.name }}</p>
                <p><b>Episode Count:</b> {{ char.episode.length }}</p>
            </div>
        </div>
    </div>
</template>