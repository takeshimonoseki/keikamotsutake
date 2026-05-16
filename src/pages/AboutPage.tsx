// path: src/pages/AboutPage.tsx
import { motion } from 'motion/react';
import { SITE_NAME, PHONE_DISPLAY, PHONE_TEL } from '../constants'; // assuming SITE_NAME is defined in constants

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100"
    >
      <h1 className="text-3xl font-bold text-slate-800">運営者情報</h1>
      <div className="space-y-4 text-slate-700">
        <p>屋号: {SITE_NAME}</p>
        <p>運営者: 要確認</p>
        <p>所在地: 山口県下関市周辺</p>
        <p>連絡先: お問い合わせフォームまたはLINE、お電話(<a href={`tel:${PHONE_TEL}`} className="text-[#52a285] hover:underline">{PHONE_DISPLAY}</a>)から受付</p>
        <p>対応エリア: 下関市を中心に山口県西部周辺</p>
        <p>事業内容: 軽貨物配送、荷物運搬、小さな引越し、お墓掃除・お参り代行、協力ドライバー募集</p>
        <p>備考: 正式な所在地・代表者名等の公開内容は確認後に追記</p>
      </div>
      <p className="text-sm text-slate-500 mt-8">
        ※本ページは「運営者情報」として作成しています。特定の個人情報（代表者名、番地を含む住所など）は記載していません。
        「特定商取引法に基づく表記」に該当するかは未確認です。
      </p>
    </motion.div>
  );
}
