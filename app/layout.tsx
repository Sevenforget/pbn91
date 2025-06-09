import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "일상의 조각들 - 개인 블로그",
  description: "일상 경험을 공유하는 개인 블로그입니다.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 bg-fixed">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&query=abstract geometric pattern with purple and blue')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"></div>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
