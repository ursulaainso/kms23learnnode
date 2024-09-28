<script setup>
import { ref, shallowRef } from 'vue';
import Tab from './components/Tab.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
let titles = ['ToDo', 'Modals', 'ChuckNorris'];
let components = [ToDo, Modals, ChuckNorris];
let currentTitle = ref('ToDo');
let currentComponent = shallowRef(ToDo);
function tabChange(key){
  currentTitle.value = titles[key];
  currentComponent.value = components[key];
}
</script>
<template>
  <Tab :titles="titles" @change="tabChange"></Tab>
  <!-- <ToDo v-if="currentTitle === 'ToDo'"></ToDo>
  <Modals v-if="currentTitle === 'Modals'"></Modals>
  <ChuckNorris v-if="currentTitle === 'ChuckNorris'"></ChuckNorris> -->
  <component :is="currentComponent"></component>
</template>