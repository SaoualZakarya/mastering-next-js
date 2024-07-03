import './globals.css'
import {Inter} from 'next/font/google'
import { NavBar } from './components/NavBar';
import { Metadata } from 'next';

const inter = Inter({subsets:['latin']});

export const metaData:Metadata ={
  title:"WikiRocket!",
  description:"WikiRocket! information"
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png"></link>
      </head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}