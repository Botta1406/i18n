import en from '@/i18n/locale/en.json';
import fr from '@/i18n/locale/fr.json';
import te from '@/i18n/locale/te.json'

export const messages = {
    en,
    fr,
    te,
};

export const locales = ['en', 'fr',"te"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

