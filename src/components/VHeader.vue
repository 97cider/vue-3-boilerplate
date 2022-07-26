<template>
    <div class="header inverted">
        <div class="header-item"><img class="header-icon" src="../assets/images/vue-pixel.png"></div>
        <div class="header-item"><h2>vue-3-boilerplate.</h2></div>
        <div><h3 class="light">quick, simple, easy.</h3></div>
        <div class="gutter"></div>
        <div class="header-item"><NavBar /></div>
        <div class="header-item"><ThemeToggle /></div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ThemeToggle from './ThemeToggle.vue';
import NavBar from './NavBar.vue';

const store = useStore();


const themeName = computed(() => {
  return `${store.state.theme.currentTheme}`;
});


</script>


<style lang="scss">
.header {
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  user-select: none;
}

.header-item {
  padding-right: 5px;
  padding-left: 5px;
}

.header-icon {
  width: 24px;
  height: 24px;
  padding-top: 5px;
  pointer-events: none;
}

.gutter {
  width: 100%;
}
</style>