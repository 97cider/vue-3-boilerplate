<template>
    <div :class="theme">
      <div class="content">
        <VHeader />
          <router-view />
        <VFooter />
      </div>
    </div>
</template>

<script setup>
  import VHeader from './components/VHeader.vue';
  import VFooter from './components/VFooter.vue';
  import { computed, onBeforeMount, watch } from '@vue/runtime-core';
  import { useStore } from 'vuex';

  const store = useStore();

  const theme = computed(() => {
    return store.state.theme.currentTheme;
  });

  onBeforeMount(() => {
    if (localStorage.theme) {
      store.dispatch("theme/themeChange", localStorage.theme);
    } else {
      localStorage.theme = store.state.theme.currentTheme;
    }
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