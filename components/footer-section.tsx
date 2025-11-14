"use client"

export function FooterSection() {
  return (
    <footer className="w-full">
      <div className="max-w-[1320px] mx-auto px-5 flex flex-col">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
          {/* Left Section: Logo, Description */}
          <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
            <div className="flex gap-3 items-stretch justify-center">
              <div className="text-center text-foreground text-xl font-semibold leading-4">Paratalk</div>
            </div>
            <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">会議を、もっとスマートに。</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center text-foreground/70 text-xs md:text-sm py-4 border-t border-border/50">
          © 2025 Calibur Technology Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
