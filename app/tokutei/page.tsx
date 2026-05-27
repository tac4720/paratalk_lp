import type { Metadata } from "next"
import { LegalLayout } from "@/components/legal-layout"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Paratalk",
  description: "Paratalkの販売事業者・所在地・料金・解約条件等の特定商取引法に基づく表記",
}

export default function TokuteiPage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記" updatedAt="2026年5月27日">
      <table>
        <tbody>
          <tr>
            <th>販売事業者</th>
            <td>株式会社カリバー(Calibur Technology Co., Ltd.)</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>代表取締役 王剣鋒</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>神奈川県横浜市中区長者町5-85 三共横浜ビル14階</td>
          </tr>
          <tr>
            <th>電話番号</th>
            <td>
              045-328-7655
              <br />
              <span className="text-muted-foreground text-xs">
                ※お問い合わせはメールにて承ります。電話でのお問い合わせには対応しておりません。
              </span>
            </td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td>
              <a href="mailto:support@paratalk.jp">support@paratalk.jp</a>
            </td>
          </tr>
          <tr>
            <th>法人番号</th>
            <td>5010401153283</td>
          </tr>
          <tr>
            <th>運営サービス</th>
            <td>Paratalk(リアルタイム会話アシスタント)</td>
          </tr>
          <tr>
            <th>販売価格</th>
            <td>
              月額サブスクリプション(税込):
              <ul>
                <li>Starter: 980円/月(月30,000クレジット)</li>
                <li>Standard: 1,980円/月(月75,000クレジット)</li>
                <li>Pro: 4,980円/月(月180,000クレジット)</li>
              </ul>
              追加クレジット(税込、繰越可):
              <ul>
                <li>15,000クレジット: 500円</li>
                <li>66,000クレジット: 2,000円</li>
                <li>180,000クレジット: 5,000円</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>商品代金以外の必要料金</th>
            <td>
              インターネット接続料金、データ通信料金等はお客様のご負担となります。
            </td>
          </tr>
          <tr>
            <th>支払方法</th>
            <td>クレジットカード決済(Stripe, Inc. の決済システムを利用)</td>
          </tr>
          <tr>
            <th>支払時期</th>
            <td>
              月額サブスクリプション: お申込時および毎月の自動更新日に即時。
              <br />
              追加クレジット: お申込時に即時。
            </td>
          </tr>
          <tr>
            <th>商品の引渡時期</th>
            <td>
              決済完了後、即時にクレジットがお客様のアカウントへ反映されます。
            </td>
          </tr>
          <tr>
            <th>返品・キャンセル</th>
            <td>
              <p>
                <strong>月額サブスクリプション</strong>:
                アプリ内設定画面およびStripeカスタマーポータルからいつでも解約可能です。
                解約後は当該課金期間の終了まで引き続きご利用いただけます。
                日割りでの返金は行いません。
              </p>
              <p>
                <strong>追加クレジット</strong>:
                商品の性質上、購入後のキャンセル・返金には応じかねます。
              </p>
              <p>
                <strong>未使用クレジット</strong>:
                現金または金銭的価値による払戻しは行いません。サービス内での消費のみ可能です。
              </p>
              <p>
                <strong>不具合等による返金</strong>:
                当社の責めに帰すべき事由によりサービスを継続的に利用できなかった場合は、
                お問い合わせの上、個別に対応いたします。
              </p>
            </td>
          </tr>
          <tr>
            <th>動作環境</th>
            <td>
              Windows 10 / 11(Microsoft Store配布版を推奨)。
              インターネット接続、マイク、必要に応じてシステム音声キャプチャ環境。
            </td>
          </tr>
        </tbody>
      </table>
    </LegalLayout>
  )
}
