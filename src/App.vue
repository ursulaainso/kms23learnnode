<script setup>
  import Tab from './components/Tab.vue';
</script>
<template>
  <Tab></Tab>
  <div class="container mt-3">
    <Suspense>
      <RouterView></RouterView>
    </Suspense>
  </div>
</template>