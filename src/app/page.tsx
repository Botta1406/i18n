import { messages, Locale } from '@/i18n';

export default function HomePage({ params }: { params: { locale: Locale } }) {
    const locale = params.locale;

    // fallback to 'en' if locale is missing or invalid
    const t = messages[locale] ?? messages['en'];

    return (
        <div className="p-8 text-center">
            <h1 className="text-2xl mb-4">🌍 Multilingual Page</h1>
            <h2 className="text-3xl font-bold text-blue-600">{t.welcome}</h2>
            <p className="mt-2 text-gray-700">{t.about}</p>
        </div>
    );
}
