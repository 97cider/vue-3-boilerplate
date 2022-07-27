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
  import { computed, onBeforeMount, watch} from '@vue/runtime-core';
  import { useStore } from 'vuex';
  import { loadLanguageAsync } from './locales';

  const store = useStore();

  const theme = computed(() => {
    return store.state.theme.currentTheme;
  });

  const vLocale = computed(() => {
    return store.state.locale.currentLocale;
  });

  onBeforeMount(() => {
    if (localStorage.theme) {
      store.dispatch("theme/themeChange", localStorage.theme);
    } else {
      localStorage.theme = store.state.theme.currentTheme;
    }
    if (localStorage.locale) {
      store.dispatch("locale/localeChange", localStorage.locale);
    } else {
      localStorage.locale = store.state.locale.currentLocale;
    }
    loadLanguageAsync(localStorage.locale);
  });

  watch(theme, () => {
    localStorage.theme = store.state.theme.currentTheme;
  });

  watch(vLocale, () => {
    localStorage.locale = store.state.locale.currentLocale;
    loadLanguageAsync(localStorage.locale);
  })

  computed(() => {
    localStorage.theme = store.state.theme.currentTheme;
    localStorage.locale = store.state.locale.currentLocale;
  });
</script>>

<style lang="scss">
  @import "./assets/styles/global";

  #app {
    display: block;
  }
</style>