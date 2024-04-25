import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Evently',
    description: 'Evently is a platform for event management.',
    icons: {
        icon: '/assets/images/logo.svg'
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Link to Google Fonts */}
                <link
                    href={`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`}
                    rel="stylesheet"
                />
                <style>
                    {`
                        body {
                            font-family: 'Poppins', sans-serif; /* Apply Poppins font */
                        }
                    `}
                </style>
            </head>
            <body>{children}</body>
        </html>
    )
}
