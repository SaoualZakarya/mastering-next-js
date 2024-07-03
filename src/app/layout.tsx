import type { Metadata } from "next"

export const metadata:Metadata = {
  title:'Home',
  description:'Home page'
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
      <body>{children}</body>
    </html>
  )
}