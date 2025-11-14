import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl w-fit">
        <Image
          src="/images/design-mode/Screenshot from 2025-11-12 17-59-47.png"
          alt="Dashboard preview"
          width={1600}
          height={1100}
          className="w-full h-auto max-h-[1100px] object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
