'use client';

import Link from 'next/link';

export default function WarrantyPage() {
  const lineUrl = "https://lin.ee/rELcEE2";

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* 科技感背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
      

        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-6xl font-black italic uppercase mb-16 border-l-8 border-cyan-500 pl-8">Warranty Policy / <span className="text-cyan-400">保固條款</span></h1>
          
          <div className="space-y-12">
            {/* 1. 台灣原廠件 */}
            <section className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem]">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-500">01.</span> 台灣原廠代理硬體
              </h2>
              <ul className="space-y-4 text-slate-300 text-lg leading-relaxed list-disc ml-6">
                <li>所有台灣零件均享由「原廠」提供之完整保固（期限依原廠公告為準）。</li>
                <li><strong className="text-white">加值服務：</strong> 自交機日起一年內，發生非人為故障，本商行提供「免費代送原廠」服務。</li>
                <li>請務必保留零件完整外盒與保固卡，以利後續出保流程。</li>
              </ul>
            </section>

            {/* 2. 系統與軟體 */}
            <section className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem]">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-500">02.</span> 軟體系統支援
              </h2>
              <ul className="space-y-4 text-slate-300 text-lg leading-relaxed list-disc ml-6">
                <li><strong className="text-white">遠端協助：</strong> 交機日起一年內，提供免費遠端軟體除錯與技術諮詢。</li>
                <li>服務內容包含：驅動程式異常、系統優化建議。</li>
                <li>※ 註：不包含盜版軟體安裝、因使用者操作不當導致之系統毀損重灌。</li>
              </ul>
            </section>

            {/* 3. 海外件聲明 */}
            <section className="bg-red-500/5 border border-red-500/20 p-10 rounded-[3rem]">
              <h2 className="text-2xl font-black text-red-400 mb-6 flex items-center gap-3">
                <span className="text-red-500">03.</span> 海外跨境硬體（特別聲明）
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                為追求極致性價比與美學，部分特殊零件（如特製機殼、風扇等）為海外採購。
                <br /><br />
                <strong className="text-red-400">※ 注意事項：</strong>
                海外硬體於交機時均會提供測試正常之紀錄影片，<strong className="underline">交機完成後本商行不負擔後續硬體保固責任。</strong>
                如需代寄回原發貨國維修，需由客戶自付國際往返運費。
              </p>
            </section>

            {/* 4. 法律警語 */}
            <section className="p-10 text-slate-500 text-sm italic border-t border-white/10">
              <h3 className="font-bold text-slate-400 mb-4 uppercase tracking-widest">Legal Disclaimer / 法律聲明</h3>
              <p className="leading-relaxed">
                1. 本商行（托尼購商行 / JC電腦組裝）僅負責代購與硬體組裝服務，所有硬體瑕疵之最終判斷權歸屬於硬體原廠。<br />
                2. 對於因電腦故障導致之任何數據損失、營業損失或時間成本，本商行概不負責。建議使用者定期備份重要資料。<br />
                3. 若經檢測發現為人為因素（如：自行拆解、超頻損壞、液體滲入、雷擊天災等），將不在免費代送與保固服務範圍內。<br />
                4. 本保固條款之解釋權歸 托尼購商行 所有。
              </p>
            </section>
          </div>
        </div>

        {/* 統一頁尾 */}
        <footer className="text-center py-24 border-t border-white/5 bg-black/20">
            <div className="mb-6">
                <p className="text-2xl font-black text-white tracking-widest uppercase">托尼購商行</p>
                <p className="text-sm font-bold text-cyan-500 uppercase tracking-widest">JC 電腦組裝 / 訂製</p>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-slate-700 italic">
                AI PC Master Bureau © 2026
            </p>
        </footer>
      </div>
    </main>
  );
}
