<template>
    <div>
        <h3>more ▼</h3>
        <div v-if="isOpen">
            <li v-for="route in props.routes" v-bind:key="route">
                {{ route }}
            </li>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavDropDownElement from './NavDropDownElement.vue';
const props = defineProps({
    routes: []
});
const isOpen = ref(false);
</script>