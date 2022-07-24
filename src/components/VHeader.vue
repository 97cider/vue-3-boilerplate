<template>
    <div class="theme-title-background">
        Yo this is an updated header!
        <ThemeToggle />
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import ThemeToggle from './ThemeToggle.vue';

const store = useStore();


const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});


</script>


<style lang="scss">
</style>