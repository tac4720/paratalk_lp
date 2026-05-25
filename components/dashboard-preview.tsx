export function DashboardPreview() {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl w-fit">
        <video
          src="/paratalk_pv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-[1100px] object-contain rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
