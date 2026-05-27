import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "お問い合わせ | Paratalk",
  description: "Paratalkに関するお問い合わせはこちらから",
}

const SUPPORT_EMAIL = "support@paratalk.jp"

export default function ContactPage() {
  return (
    <LegalLayout title="お問い合わせ" updatedAt="2026年5月27日">
      <p>
        Paratalkに関するご質問、不具合のご報告、機能のご要望、報道・取材のご依頼などは、下記メールアドレス宛にご連絡ください。
        順次対応させていただきます。
      </p>

      <div className="my-8 rounded-xl border border-border bg-card/40 p-6 md:p-8">
        <p className="text-muted-foreground text-sm">メールアドレス</p>
        <p className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight">
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
        <div className="mt-6">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-primary-foreground font-medium text-sm shadow-sm hover:bg-primary/90 transition-colors"
          >
            メールを送る
          </a>
        </div>
      </div>

      <h2>お問い合わせの前に</h2>
      <p>
        以下に該当する場合は、各リンク先もあわせてご確認ください。
      </p>
      <ul>
        <li>
          料金、解約、返金に関するご質問は{" "}
          <a href="/tokutei">特定商取引法に基づく表記</a> および{" "}
          <a href="/terms">利用規約</a>{" "}
          をご覧ください。
        </li>
        <li>
          個人情報の取扱いについては <a href="/privacy">プライバシーポリシー</a> をご覧ください。
        </li>
        <li>
          決済(カード情報の更新・解約)はアプリ内設定画面の「サブスクリプション管理」または Stripeカスタマーポータルから直接お手続きいただけます。
        </li>
      </ul>

      <h2>不具合のご報告について</h2>
      <p>
        円滑な対応のため、可能な範囲で以下の情報をご記載ください。
      </p>
      <ul>
        <li>ご利用OS(Windows 10 / 11等)とバージョン</li>
        <li>Paratalkのバージョン(設定画面に表示)</li>
        <li>発生日時、再現手順</li>
        <li>エラーメッセージ、スクリーンショット(可能であれば)</li>
        <li>ローカルモード / クラウドモードのどちらで発生したか</li>
      </ul>

      <h2>運営会社</h2>
      <p>
        株式会社カリバー(Calibur Technology Co., Ltd.)
        <br />
        神奈川県横浜市中区長者町5-85 三共横浜ビル14階
        <br />
        コーポレートサイト:{" "}
        <a href="https://www.calibur.co.jp/" target="_blank" rel="noopener noreferrer">
          https://www.calibur.co.jp/
        </a>
      </p>
    </LegalLayout>
  )
}
