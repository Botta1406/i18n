// import { messages, locales, defaultLocale, Locale } from '@/i18n'
// import Navbar from '@/app/Navbar';
//
// type Props = {
//     params: {
//         locale: string;
//     };
// };
//
// export default function HomePage({ params }: Props) {
//     const localeParam = params.locale;
//     const isValidLocale = locales.includes(localeParam as Locale);
//     const currentLocale = isValidLocale ? (localeParam as Locale) : defaultLocale;
//     const t = messages[currentLocale];
//
//     if (!t) {
//         return (
//             <div className="text-red-500 text-center p-4">
//                 <p>Translation not found for locale: {currentLocale}</p>
//             </div>
//         );
//     }
//
//     return (
//         <>
//             <Navbar />
//             <div className="p-8 text-center">
//                 <h1 className="text-2xl mb-4">🌍 Multilingual Page</h1>
//                 <h2 className="text-3xl font-bold text-blue-600">{t.welcome}</h2>
//                 <p className="mt-2 text-gray-700">{t.about}</p>
//             </div>
//         </>
//     );
// }
