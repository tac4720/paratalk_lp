import Link from "next/link"
import type React from "react"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

interface LegalLayoutProps {
  title: string
  updatedAt: string
  children: React.ReactNode
}

export function LegalLayout({ title, updatedAt, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <header className="w-full py-4 px-6">
          <div className="max-w-[1320px] mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-foreground text-xl font-semibold">Paratalk</span>
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              ← トップへ戻る
            </Link>
          </div>
        </header>

        <main className="max-w-[840px] mx-auto px-6 pt-6 pb-16 md:pt-12 md:pb-24">
          <div className="mb-10 md:mb-14">
            <h1 className="text-foreground text-3xl md:text-4xl font-semibold leading-tight">{title}</h1>
            <p className="mt-3 text-muted-foreground text-sm">最終更新日: {updatedAt}</p>
          </div>
          <div className="legal-prose text-foreground/90 text-[15px] leading-7">{children}</div>
        </main>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
