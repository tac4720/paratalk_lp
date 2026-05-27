"use client"

import { Check } from "lucide-react"

type Plan = {
  name: string
  price: string
  priceSuffix?: string
  highlight: string
  description: string
  features: string[]
  popular?: boolean
}

const PAID_FEATURES = [
  "高精度クラウドAI",
  "リアルタイム文字起こし",
  "リアルタイム要約",
  "会議中チャット",
]

const plans: Plan[] = [
  {
    name: "Free",
    price: "¥0",
    highlight: "ローカルのみ",
    description: "ローカルだけで完結。プライバシー重視のあなたへ。",
    features: [
      "ローカルAIモデル(オフライン動作)",
      "ローカル文字起こし",
      "議事録・サマリー自動生成",
      "履歴をローカルに保存",
    ],
  },
  {
    name: "Starter",
    price: "¥980",
    priceSuffix: "/月",
    highlight: "月 30,000 クレジット",
    description: "クラウドAIをライトに使いたい個人向け。",
    features: PAID_FEATURES,
  },
  {
    name: "Standard",
    price: "¥1,980",
    priceSuffix: "/月",
    highlight: "月 75,000 クレジット",
    description: "毎日の会議や商談で使う標準プラン。",
    features: PAID_FEATURES,
    popular: true,
  },
  {
    name: "Pro",
    price: "¥4,980",
    priceSuffix: "/月",
    highlight: "月 180,000 クレジット",
    description: "長時間・ヘビーユース向け。",
    features: PAID_FEATURES,
  },
]

export function PricingSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch flex flex-col items-center gap-3 text-center">
        <h2 className="text-foreground text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          シンプルで明快な料金プラン
        </h2>
        <p className="max-w-[640px] text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
          無料のローカルモードと、月額のクラウドモード。
          <br className="hidden md:block" />
          いつでも解約でき、足りないときは追加クレジットで補充できます。
        </p>
      </div>

      <div className="w-full max-w-[1180px] mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="mt-8 md:mt-10 w-full max-w-[1180px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 px-5 md:px-7 py-5">
        <div className="flex-1">
          <p className="text-foreground text-sm md:text-base font-medium">
            追加クレジット(繰越可)
          </p>
          <p className="mt-1 text-muted-foreground text-xs md:text-sm leading-relaxed">
            クレジットが足りなくなったらいつでも追加購入できます。
            <span className="whitespace-nowrap">15,000 ¥500</span> /{" "}
            <span className="whitespace-nowrap">66,000 ¥2,000</span> /{" "}
            <span className="whitespace-nowrap">180,000 ¥5,000</span>(税込)。
          </p>
        </div>
        <div className="text-muted-foreground text-xs md:text-sm">
          法人/チーム導入のご相談は{" "}
          <a href="/contact" className="text-foreground underline underline-offset-2 hover:text-primary">
            お問い合わせ
          </a>{" "}
          まで
        </div>
      </div>

      <p className="mt-6 text-muted-foreground text-xs">
        表示価格はすべて税込です。決済は Stripe を利用します。
      </p>
    </section>
  )
}

function PricingCard({ plan }: { plan: Plan }) {
  const isPopular = !!plan.popular
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-5 md:p-6 gap-6 ${
        isPopular
          ? "bg-primary text-primary-foreground shadow-[0_8px_32px_-8px_rgba(120,252,214,0.45)]"
          : "bg-gradient-to-b from-foreground/[0.06] to-transparent border border-border"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-2.5 right-5 px-2.5 py-0.5 rounded-full bg-foreground text-primary-foreground text-[11px] font-semibold tracking-wide">
          Popular
        </span>
      )}

      <div className="flex flex-col gap-4">
        <div
          className={`text-sm font-medium ${
            isPopular ? "text-primary-foreground/90" : "text-foreground/90"
          }`}
        >
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-semibold tracking-tight">{plan.price}</span>
          {plan.priceSuffix && (
            <span
              className={`text-sm font-medium ${
                isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}
            >
              {plan.priceSuffix}
            </span>
          )}
        </div>
        <div
          className={`text-sm font-semibold tracking-tight ${
            isPopular ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {plan.highlight}
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <div
        className={`h-px w-full ${
          isPopular ? "bg-primary-foreground/20" : "bg-border"
        }`}
      />

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                isPopular ? "text-primary-foreground" : "text-foreground/70"
              }`}
              strokeWidth={2.5}
            />
            <span
              className={`leading-snug ${
                isPopular ? "text-primary-foreground/90" : "text-foreground/85"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
