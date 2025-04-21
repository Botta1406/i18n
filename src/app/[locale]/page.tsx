import { messages, locales, defaultLocale, Locale } from '@/i18n';

type Props = {
    params: {
        locale: string;
    };
};

export default function HomePage({ params }: Props) {
    const localeParam = params.locale;
    const isValidLocale = locales.includes(localeParam as Locale);
    const currentLocale = isValidLocale ? (localeParam as Locale) : defaultLocale;

    const t = messages[currentLocale];

    if (!t) {
        return (
            <div className="text-red-500 text-center p-4">
                <p>Translation not found for locale: {currentLocale}</p>
            </div>
        );
    }

    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">{t.welcome}</h1>
            <p>{t.about}</p>
        </div>
    );
}
