import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiDesigned',
  description: 'Software Developer | Engineer | Entrepreneur | Christian | Arsenal Fan | Lover | Traveller',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='fixed top-8 w-full'>
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html >
  )
}
