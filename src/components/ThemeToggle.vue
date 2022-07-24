<template>
    <div>
        <button  @click="ToggleTheme">Toggle Light Mode {{ themeName }}</button>
    </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

let isLife = false;
const store = useStore();

const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});


function ToggleTheme() {
  if (isLife) {
    ToggleDeath();
  }
  else {
    ToggleLife();
  }
}

function ToggleLife() {
  console.log(`Toggling Life`);
  store.dispatch('theme/themeChange', 'life');
  isLife = true;
}

function ToggleDeath() {
  console.log(`Toggling Death`);
    store.dispatch('theme/themeChange', 'death');
    isLife = false;
}

onMounted(() => {
  isLife = store.state.theme.currentTheme === 'life' ? true : false;
})
</script>


<style lang="scss">
</style>