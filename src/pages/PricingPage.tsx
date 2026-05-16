// path: src/pages/PricingPage.tsx
import { motion } from 'motion/react';
import { PHONE_DISPLAY, PHONE_TEL } from '../constants'; // using new constants

export function PricingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100"
    >
      <h1 className="text-3xl font-bold text-slate-800">料金目安</h1>
      <p className="text-slate-700 leading-relaxed">
        料金は荷物の量、距離、作業内容、待機時間、階段作業の有無によって変わります。
        まずは荷物の内容・積み地・降ろし地・希望日時をお送りください。内容を確認したうえで、事前に目安金額をお伝えします。
      </p>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">サービス別料金目安</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">軽貨物配送</h3>
            <p className="text-slate-600">近距離配送から長距離チャーター便まで、柔軟に対応いたします。荷物量や距離に応じて料金を算出します。</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">家具・家電の運搬</h3>
            <p className="text-slate-600">大型家具や家電一点からの運搬も承ります。搬入・搬出作業の有無で料金が変わります。</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">小さな引越し</h3>
            <p className="text-slate-600">単身引越しや学生さんの引越しなど、軽貨物で運べる範囲での対応となります。詳細はお問い合わせください。</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-2">お墓掃除・お参り代行</h3>
            <p className="text-slate-600">遠方にお住まいの方や忙しい方に代わって、お墓の清掃やお参りを行います。サービス内容により料金が異なります。</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">追加料金が出る条件</h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2">
          <li><strong>距離:</strong> 配送距離が長くなる場合</li>
          <li><strong>荷物量:</strong> 軽貨物車両に積載可能な範囲を超える荷物量の場合（複数台手配の可能性）</li>
          <li><strong>階段作業:</strong> エレベーターがない建物や、階数が多い場合の階段作業</li>
          <li><strong>待機時間:</strong> 積み込みや荷降ろし時の待機時間が長時間に及ぶ場合</li>
          <li><strong>夜間・早朝:</strong> 22:00～翌朝6:00の作業</li>
          <li><strong>有料道路・駐車場:</strong> 高速道路料金や有料駐車場料金が発生する場合</li>
        </ul>
      </div>

      <p className="text-slate-700 mt-8 leading-relaxed">
        正式な見積もりは、お問い合わせフォームまたはLINEにて、詳細なご要望をお伝えいただいた後にお伝えします。
        お気軽にご相談ください。
      </p>
      {PHONE_TEL && (
        <a href={`tel:${PHONE_TEL}`} className="block text-center text-lg font-bold text-[#52a285] hover:underline">
          <span className="inline-block px-4 py-2 rounded-lg border border-[#52a285] hover:bg-[#e6f0ec] transition-colors">
            お電話でのお問い合わせ: {PHONE_DISPLAY}
          </span>
        </a>
      )}
    </motion.div>
  );
}
