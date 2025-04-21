
import { ReactNode } from 'react';
import '../globals.css';

export default function LocaleLayout({
                                         children,
                                     }: {
    children: ReactNode;
}) {
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
