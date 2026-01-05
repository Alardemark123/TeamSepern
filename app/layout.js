import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'TM SEPERN | Modern Luxury Streetwear',
  description: 'Premium streetwear and modern luxury fashion. Bold, minimal, confident.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
