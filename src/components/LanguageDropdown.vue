<template>
  <HeaderDropDown :defaultItem="defaultItem" :items="locales" :selectedEvent="'clicked'" @clicked="UpdateLocale"/>
</template>

<script setup>
import HeaderDropDown from './header-drop-down/HeaderDropDown.vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { onMounted, computed } from '@vue/runtime-core';

const {locale, t} = useI18n({ useScope: 'global' });
const store = useStore();
const defaultItem =  computed(() => {
    return locales.find(isSelected);
});

const locales = [
    {
        key: 'en',
        locale: 'en-US'
    },
    {
        key: '한국어',
        locale: 'kr'
    }
]

const UpdateLocale = ((lang) => {
    store.dispatch('locale/localeChange', lang.locale);
});

const isSelected = ((locales) => {
    return locales.locale === store.state.locale.currentLocale;
})

onMounted(() => {
    defaultItem.value = locales.find(isSelected);
    if (!defaultItem.value)
    {
        defaultItem.value = locales[0];
    }
})
</script>