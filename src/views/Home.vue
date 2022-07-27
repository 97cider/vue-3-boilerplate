<template>
    <div class="home">
  <p>{{ $t('hello') }}</p>
  <p>{{ t('hello') }}</p>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' }) // use as global scope
</script>