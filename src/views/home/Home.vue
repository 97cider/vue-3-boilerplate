<template>
    <div class="home">
      <div class="home-item"><img class="home-image" src="../../assets/images/vue-pixel.png"/></div>
      <div class="home-item"><h1>{{ t('home.welcome') }}</h1></div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .home-image {
    width: 160px;
    height: 160px;
    image-rendering: pixelated;
  }
</style>>