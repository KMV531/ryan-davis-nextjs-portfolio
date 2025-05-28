import { Geist, Geist_Mono } from 'next/font/google'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Theme Provider
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Davis | Developer Portfolio',
  description: 'Built with Next.js, Tailwind CSS, Framer Motion & More.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Toaster richColors position='bottom-right' />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
