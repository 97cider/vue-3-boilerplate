<template>
    <div class="about">
        <h2>{{ t('about.features.header')}}:</h2>
        <ul>
            <li>{{ t('about.features.feature-one')}}</li>
            <li>{{ t('about.features.feature-two')}}</li>
            <li>{{ t('about.features.feature-three')}}</li>
            <li>{{ t('about.features.feature-four')}}</li>
            <li>{{ t('about.features.feature-five')}}</li>
            <li>{{ t('about.features.feature-six')}}</li>
        </ul>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })
</script>

<style lang="scss">
    .about {
        padding: 30px;
        text-align: center;
    }
    li {
        font-family: "Franklin Gothic Medium", Arial, sans-serif;
    }
</style>