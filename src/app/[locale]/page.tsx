//
// import { messages, locales, defaultLocale, Locale } from '@/i18n';
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
//             <div className="p-8 max-w-4xl mx-auto">
//                 <div className="text-center mb-10">
//                     <h1 className="text-3xl font-bold text-blue-600 mb-4">🌍 {t.welcome}</h1>
//                     <p className="text-gray-700 text-lg">{t.about}</p>
//                     <p className="text-gray-700 text-lg">{t.Definition}</p>
//                 </div>
//
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {t.features?.map((feature: any, index: number) => (
//                         <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
//                             <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }
import { messages, locales, defaultLocale, Locale } from '@/i18n';
import Navbar from '@/app/Navbar';

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
        <>
            <Navbar />
            <div className="p-8 max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">🌍 {t.welcome}</h1>
                    <p className="text-gray-700 text-lg font-semibold bg-red-200 p-4 rounded-lg shadow-md">
                        {t.about}
                    </p>
                </div>

                {/* Definition Section */}
                <div className="mt-6 flex">
                    <div className="w-1/4 text-lg font-semibold text-indigo-700">
                        <h2 className="border-l-4 pl-4 border-indigo-600">Definition</h2>
                    </div>
                    <div className="w-3/4 ml-4">
                        <p className="text-gray-700">{t.Definition}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {t.features?.map((feature: any, index: number) => (
                        <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
