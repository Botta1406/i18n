// // // middleware.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { locales, defaultLocale } from './src/i18n';
//
// export function middleware(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;
//
//     // Check if the path includes a valid locale
//     const localeInPath = locales.some((locale) => pathname.startsWith(`/${locale}`));
//
//     // If there's no locale in the path, redirect to the default locale
//     if (!localeInPath && !pathname.startsWith(`/${defaultLocale}`)) {
//         const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
//         return NextResponse.redirect(redirectUrl);
//     }
//
//     return NextResponse.next();
// }
//
// export const config = {
//     matcher: ['/((?!_next|favicon.ico).*)'],
// };


// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import {defaultLocale, locales} from "@/i18n";
// import { locales, defaultLocale } from '../i18n'; // ✅ correct relative path

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const localeInPath = locales.some((locale) => pathname.startsWith(`/${locale}`));

    if (!localeInPath && !pathname.startsWith(`/${defaultLocale}`)) {
        const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|favicon.ico).*)'],
};
