<script setup>
import LeafletMap from '/.components/LeafletMap.vue'
import {ref} from 'vue';
let map1Zoom = 19;
let map1Lat = ref(40.222); 
let map1Lng = ref(21.3333);  
let map1Markers = ref([
   {lat: 32.2324, lng: 12.4232},
   {lat: 22.34343, lng: 21.432321} 
])


</script>
<template> 
    <input type="range" min="1" max="19" step="1" v-model="map1Zoom"> {{ map1Zoom }}
    <button class="button is primary" @click="map1Markers.push({lng: getRandomInRange(-180, 180), lng:})">Go to New York</button>
    <LeafletMap 
     :lat ="51.42505"
     :lng="13.2429" 
     :zoom="map1Zoom" 
     @zoom="map1Zoom=$event">
    </LeafletMap>
    <LeafletMap lat ="51.505" lng="-0.09" zoom="17"></LeafletMap>
    <LeafletMap lat ="31.502425" lng="3.0232" zoom="19"></LeafletMap>
</template>
