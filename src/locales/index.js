import { createI18n } from 'vue-i18n'

import messages from './configs/en-US';
// import kr from './configs/kr';

const loadedLanguages = ['en-US'];

const i18n = new createI18n({
    locale: 'en-US ',
    fallbackLocale: 'en-US',
    legacy: false,
    globalInjection: true,
    allowComposition: true,
    messages: messages
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