<script setup>
    import L from "leaflet";
    import 'leaflet/dist/leaflet.css';
    import {onMounted, useId, watch} from 'vue';
    let props = defineProps(['lat', 'lng', 'zoom']);
    let emit = defineEmits(['zoom']);
    const id = useId();
    let zoom = toRefs(props).zoom;
    let lat = toRefs(props).lat;
    let lng = toRefs(props).lng;
    let map = null;
    let zoomDebounce = null;

    onMounted(() => {
        var map = L.map('map' + id).setView([props.lat, props.lng], props.zoom);  
        //var map = L.map('map' + id).setView([51.505, -0.09], 17);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        map.on('zoomend', function(ev) {
            emit('zoom', map.getZoom());
        });
        props.markers.forEach((marker) => {
          L.marker([51.5, -0.09]).addTo(map);
        })

    })
   
  watch(zoom, (newZoom, oldZoom) => {
    clearTimeout(zoomDebounce);
    zoomDebounce = setTimeout(() => {
    map.setZoom(newZoom);
    }, 1000);
  }) 

  watch(lat, newLat => {
    map.panTo([newLat, lng])
  }) 

  watch(lng, newLng => {
    map.panTo([newLng, lat])
  }) 

</script>
<template>
    <div :id="'map' + id"></div>
</template>
<style scoped>
    div {
        height: 80vh;
    }
</style>