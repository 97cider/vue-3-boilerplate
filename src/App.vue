<template>
    <div :class="theme">
      <VHeader />
        <router-view />
      <VFooter />
    </div>
</template>

<script setup>
  import VHeader from './components/VHeader.vue';
  import VFooter from './components/VFooter.vue';
  import { computed, onMounted, watch } from '@vue/runtime-core';
  import { useStore } from 'vuex';
  const store = useStore();

  onMounted(() => {
    console.log('mounting main component');
    if (localStorage.theme) {
      console.log(`Local theme detected: Setting theme to ${localStorage.theme}`);
      store.dispatch("theme/themeChange", localStorage.theme);
    } else {
      console.log(`No theme detected: Setting to ${store.state.theme.currentTheme}`);
      localStorage.theme = store.state.theme.currentTheme;
    }
  });

  const theme = computed(() => {
    return store.state.theme.currentTheme;
  });

  watch(theme, () => {
    localStorage.theme = store.state.theme.currentTheme;
    console.log(`theme changed: ${localStorage.theme}`);
  });

  computed(() => {
    localStorage.theme = store.state.theme.currentTheme;
  });
</script>>

<style lang="scss">
  @import './assets/styles/global.scss';

  #app {
    display:block;
  }
</style>