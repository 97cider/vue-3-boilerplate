<template>
    <div class="header">
        Yo this is an updated header!
        <ThemeToggle />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ThemeToggle from './ThemeToggle.vue';

const store = useStore();


const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});


</script>


<style lang="scss">
</style>