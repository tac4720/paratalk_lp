"use client"

import Link from "next/link"

const legalLinks = [
  { name: "利用規約", href: "/terms" },
  { name: "プライバシーポリシー", href: "/privacy" },
  { name: "特定商取引法に基づく表記", href: "/tokutei" },
  { name: "お問い合わせ", href: "/contact" },
]

export function FooterSection() {
  return (
    <footer className="w-full">
      <div className="max-w-[1320px] mx-auto px-5 flex flex-col">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 py-10 md:py-[70px]">
          {/* Left: Logo + description */}
          <div className="flex flex-col justify-start items-start gap-6 md:gap-8 p-4 md:p-8 md:max-w-sm">
            <div className="flex gap-3 items-stretch">
              <div className="text-center text-foreground text-xl font-semibold leading-4">Paratalk</div>
            </div>
            <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
              会議を、もっとスマートに。
            </p>
          </div>

          {/* Right: Legal links */}
          <nav className="flex flex-col items-start gap-3 p-4 md:p-8">
            <div className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">Legal</div>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="w-full text-center text-foreground/70 text-xs md:text-sm py-4 border-t border-border/50">
          © 2025 Calibur Technology Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
