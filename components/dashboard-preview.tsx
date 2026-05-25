import type { ReactNode } from "react"

type DashboardPreviewProps = {
  children?: ReactNode
}

export function DashboardPreview({ children }: DashboardPreviewProps) {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="relative bg-primary-light/50 rounded-2xl p-2 shadow-2xl w-full max-w-[1120px] overflow-hidden">
        <video
          src="/paratalk_pv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full min-h-[420px] md:min-h-0 md:h-auto max-h-[1100px] object-cover md:object-contain rounded-xl shadow-lg"
        />
        {children}
      </div>
    </div>
  )
}
