<template>
    <label class="toggle protected">
        <input v-model="isLife" type="checkbox" @click="toggleTheme"/>
        <span class="path">
          <div class="switch inverted"></div>
          <span class="toggle-icons">
            <img class="toggle-icon" src="../assets/images/theme-moon.png">
            <img class="toggle-icon" src="../assets/images/theme-sun.png">
          </span>
        </span>
    </label>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const isLife = ref(false);
const store = useStore();

const toggleTheme = (() => {
  if (isLife.value) {
    toggleDeath();
    return;
  }
  toggleLife();
});

const toggleLife = (() => {
  store.dispatch('theme/themeChange', 'life');
  isLife.value = true;
});

const toggleDeath = (() => {
    store.dispatch('theme/themeChange', 'death');
    isLife.value = false;
});

onMounted(() => {
  isLife.value = store.state.theme.currentTheme === 'life' ? true : false;
})
</script>


<style lang="scss">
  input {
    display: none;
  }

  .toggle {
    position: relative;
    display: inline-block;
    align-items: center;
    margin-top: 5px;
    border-radius: 30px;
    min-width: 60px;
    height: 24px;
    user-select: none;
    cursor: pointer;
  }

  .path {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }

  .switch {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    transition: 0.4s ease-out;
    z-index: 2;
  }

  .toggle-icons {
    width: 85%;
    position: absolute;
    display: flex;
    justify-content: space-between;
  }

  .toggle-icon {
    width: 18px;
    height: 18px;
    z-index: 0;
    margin-left: 5px;
    margin-right: 5px;
    pointer-events: none;
  }

  input:checked + .path > .switch {
    transform: translateX(32px);
  }

</style>