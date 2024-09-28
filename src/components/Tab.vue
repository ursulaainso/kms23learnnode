<script setup>
import { ref } from 'vue';
defineProps(['titles']);
const emit = defineEmits(['change']);
let current = ref(0);
function activeChange(key){
    current.value = key;
    emit('change', key);
}
</script>
<template>
    <div class="tabs">
        <ul>
            <!-- <li class="is-active"><a>Pictures</a></li> -->
           
            <li v-for="(title,key) in titles" :class="{'is-active': key===current}">
                <a @click="activeChange(key)">{{ title }}</a>
            </li>
        </ul>
    </div>
</template>