<template>
    <div>
        <button  @click="ToggleTheme">Toggle Light Mode {{ themeName }}</button>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

let isLife = false;
const store = useStore();

const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});

const ToggleTheme = (() => {
  if (isLife) {
    ToggleDeath();
    return;
  }
  ToggleLife();
});

const ToggleLife = (() => {
  store.dispatch('theme/themeChange', 'life');
  isLife = true;
});

const ToggleDeath = (() => {
    store.dispatch('theme/themeChange', 'death');
    isLife = false;
});

onMounted(() => {
  isLife = store.state.theme.currentTheme === 'life' ? true : false;
})
</script>


<style lang="scss">
</style>