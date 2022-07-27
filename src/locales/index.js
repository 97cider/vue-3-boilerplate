import { createI18n } from 'vue-i18n'
import messages  from './configs/en.js';

const loadedLanguages = ['en'];

const i18n = new createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    messages: messages,
});

const setLanguage = ((lang) => {
    i18n.global.locale.value = lang;
    return lang;
});

const loadLanguageAsync = ((lang) => {
    if (i18n.global.locale.value === lang) {
        return Promise.resolve(setLanguage(lang));
    }
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setLanguage(lang));
    }
    return import(`./configs/${lang}.js`).then(
        messages => {
            console.log(`Lazy Loading: ${lang}`);
            i18n.global.setLocaleMessage(lang, messages.default);
            loadedLanguages.push(lang);
            return setLanguage(lang);
        }
    )
});

export {
    i18n,
    loadLanguageAsync
}