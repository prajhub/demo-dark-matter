import Navbar from '@/components/navbar'
import './globals.css'
import { Inter, Roboto, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })
const roboto  = Roboto_Mono({ subsets: ['latin'], weight: ['100', '300', '400', '500'] })
export const metadata = {
  title: 'Dark Matter Production',
  description: 'Dark Matter Production',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>{children}<Footer/>
        </body>
    </html>
  )
}
// <Image src={DarkLogo} width='300' height='300' alt="Dark Matter Logo"  />