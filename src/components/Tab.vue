<script setup>
import {useRouter} from 'vue-router';
const router = useRouter();

let routes = router.getRoutes().filter(route => {
    return !route.meta.hasOwnProperty('showInTab') || route.meta.showInTab;  
});
</script>
<template>
    <div class="tabs">
        <ul>
            <!-- <li class="is-active"><a>Pictures</a></li> -->
            <li v-for="route in routes" :class="{'is-active': route.path === $route.path}">
                <RouterLink :to="route.path">{{ route.name }}</RouterLink>
            </li>

        </ul>
    </div>
</template>