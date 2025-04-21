import { messages, Locale } from '@/i18n';

export default function AboutPage({ params }: { params: { locale: Locale } }) {
    const t = messages[params.locale];

    return (
        <div className="p-4 text-center">
            <h2 className="text-2xl">{t.about}</h2>
        </div>
    );
}
