import enJson from "./locales/en";
import zhCNJson from "./locales/cn";
import zhHKJson from "./locales/hk";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
        ...enJson,
        },
        zh: {
        ...zhCNJson,
        },
        hk: {
        ...zhHKJson,
        },
    },
}));
