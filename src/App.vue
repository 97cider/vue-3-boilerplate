<template>
  <div>
    <VHeader />
      <router-view />
    <VFooter />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';
export default {
  components: {
    VHeader,
    VFooter
  },
  setup() {
    
  },
}
</script>>

<style lang="scss">
  @import './assets/styles/global.scss';

  #app {
    display:block;
  }
</style>