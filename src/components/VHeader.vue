<template>
    <div class="theme-title-background">
        Yo this is a header!
        <button>Toggle Light Mode {{ themeName }}</button>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

console.log(store.state.theme.currentTheme);

const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});
</script>


<style lang="scss">
</style>