<template>
  <HeaderDropDown :defaultItem="defaultItem" :items="locales" :selectedEvent="'clicked'" @clicked="UpdateLocale"/>
</template>

<script setup>
import HeaderDropDown from './header-drop-down/HeaderDropDown.vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

// eslint-disable-next-line no-unused-vars
const { t } = useI18n({ useScope: 'global' });
const store = useStore();
const defaultItem =  computed(() => {
    let defaultLocale = locales.find(isSelected);
    if (defaultLocale)
    {
        
        return defaultLocale;
    }
    return locales[0];
});

const locales = [
    {
        key: 'en',
        locale: 'en'
    },
    {
        key: '한국어',
        locale: 'kr'
    }
]

const UpdateLocale = ((lang) => {
    console.log(`dispatching locale ${lang.locale}`);
    store.dispatch('locale/localeChange', lang.locale);
});

const isSelected = ((locales) => {
    return locales.locale === store.state.locale.currentLocale;
});
</script>