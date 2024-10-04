<script setup>
import {onMounted, useId, watch, torefs} from 'vue'
const is = useId();
console.log(process.env.GOOGLE_API_KEY);
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});

onMounted(() =>
loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
})
);
</script>

<template>
