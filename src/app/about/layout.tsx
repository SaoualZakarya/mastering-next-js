import type { Metadata } from "next"

export const metadata:Metadata ={
  title:'About',
  description:'About page'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <nav>About navbar</nav>
            <main>{children}</main>
        </>
    )
  }