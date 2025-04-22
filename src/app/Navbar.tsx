'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const locales = ['en', 'fr', 'te'];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const getPathWithoutLocale = () => {
        const segments = pathname.split('/');
        if (locales.includes(segments[1])) {
            segments.splice(1, 1);
        }
        return segments.join('/') || '/';
    };

    return (
        <nav className="w-full bg-blue-600 shadow-md border-b border-blue-700">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="text-xl font-bold text-white">🌐 MyApp</div>

                {/* Right: Menu Items */}
                <div className="flex items-center space-x-6 relative">
                    {/* Home Link */}
                    {/*<Link*/}
                    {/*    href={`/${getPathWithoutLocale()}`}*/}
                    {/*    className="text-white font-medium hover:underline"*/}
                    {/*>*/}
                    {/*    Home*/}
                    {/*</Link>*/}

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white font-medium hover:bg-blue-500 px-3 py-1 rounded-md transition"
                        >
                            Language ▾
                        </button>
                        {open && (
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                                {locales.map((locale) => (
                                    <Link
                                        key={locale}
                                        href={`/${locale}${getPathWithoutLocale()}`}
                                        className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-100"
                                        onClick={() => setOpen(false)}
                                    >
                                        {locale.toUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
