"use client"

import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"

const BentoCard = ({ title, description, Component, isLarge, isSmall }) => (
  <div className={`overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative ${isLarge ? "lg:col-span-2" : ""}`}>
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className={`self-stretch relative -mt-0.5 z-10 ${
      isLarge ? "h-[600px] md:h-[700px] lg:h-[800px]" : 
      isSmall ? "h-[400px] md:h-[450px] lg:h-[500px]" : 
      "h-[500px] md:h-[600px] lg:h-[700px]"
    }`}>
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "ワンクリックで過去の会議を再生",
      description:
        "すべての会議データは安全にローカルに保存されます。文字起こしやサマリーから、いつでも目的の発言を検索し、音声と共に再生できます。",
      Component: OneClickIntegrationsIllustration,
      isLarge: true,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[780px] text-center text-foreground text-[1.625rem] md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-[1.15] tracking-tight">
              <span className="block whitespace-nowrap">録音データは</span>
              <span className="block whitespace-nowrap">あなたの端末で安全に保管</span>
            </h2>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} title={card.title} description={card.description} Component={card.Component} isLarge={card.isLarge} isSmall={card.isSmall} />
          ))}
        </div>
      </div>
    </section>
  )
}
