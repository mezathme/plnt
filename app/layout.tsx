import {Inter} from 'next/font/google'
import "@/styles/global.scss"
const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'WeAreWay',
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="wrapper">{children}</div>
        </body>
        </html>
    )
}
