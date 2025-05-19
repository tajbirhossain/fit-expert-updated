import { ReactNode } from "react";

export default function RootLayoutWrapper({ children }: { children: ReactNode }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
