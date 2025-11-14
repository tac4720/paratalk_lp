"use client"

import AiCodeReviews from "./bento/ai-code-reviews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import AiChat from "./bento/ai-chat"
import { useTypewriter } from "@/hooks/use-typewriter"
import { useInView } from "@/hooks/use-in-view"

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
  const { ref, isInView } = useInView({ threshold: 0.3 })
  
  const line1 = useTypewriter({
    text: "いつでもどこでも、",
    speed: 80,
    delay: 500,
    start: isInView,
  })

  const line2 = useTypewriter({
    text: "Paratalkがそばに",
    speed: 80,
    delay: 500 + "会議中も、".length * 80,
    start: isInView,
  })

  const cards = [
    {
      title: "あらかじめ用意した切り返しを即座に引用",
      description:
        "会話内容をリアルタイムでembedding類似度が高い発言に適した切り返しを、設定ファイルから引用します。",
      Component: AiCodeReviews,
      isSmall: true,
    },
    {
      title: "いつでもどこでもAIにChatできる",
      description:
        "画面に映っている内容や録音している音声はAIに渡されます。パソコンを開いているとき、いつでもParatalkが隣にいます。",
      Component: AiChat,
      isSmall: true,
    },
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
            <h2 ref={ref} className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              <span className="block whitespace-nowrap">
                {line1.displayedText}
                {!line1.isComplete && <span className="animate-pulse">|</span>}
              </span>
              <span className="block whitespace-nowrap">
                {line2.displayedText}
                {line1.isComplete && !line2.isComplete && <span className="animate-pulse">|</span>}
              </span>
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              記録しながら、切り返しを提案。資料も即座に相談。AIがリアルタイムであなたを支えます。
            </p>
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
