'use client';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-[#111] shadow-2xl rounded-3xl overflow-hidden border border-slate-800">
        
        {/* Header Section */}
        <div className="p-10 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-black">
          <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase">
            Legal & Refund <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg italic tracking-widest font-bold">客製化商品退換貨及服務條款</p>
        </div>

        <div className="p-10 space-y-12">
          
          {/* 1. 消保法聲明 */}
          <section>
            <h2 className="text-2xl font-black text-white mb-5 flex items-center gap-3">
              <span className="text-cyan-400">01.</span> 客製化給付排除聲明
            </h2>
            <div className="bg-red-500/10 border-l-8 border-red-500 p-6 rounded-r-xl">
              <p className="text-lg leading-relaxed text-slate-200">
                本站商品屬「依消費者要求所為之客製化給付」，依據 <span className="text-white font-black underline">《消費者保護法》第19條第2項</span> 及《通訊交易解除權合理例外情事適用準則》，<span className="text-white font-black bg-red-500/20 px-1">不享有 7 天無條件退貨之權利</span>。訂單進入製作流程後，恕不接受取消或修改。
              </p>
            </div>
          </section>

          {/* 2. 瑕疵認定 */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-black text-white mb-5 flex items-center gap-3">
                <span className="text-cyan-400">02.</span> 瑕疵擔保與退換
              </h2>
              <ul className="text-lg space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">●</span>
                  <span>依《民法》第354條，若收貨時發現重大瑕疵（如：功能故障、外觀破損），請於簽收起 <span className="text-white font-bold">7 日內</span> 聯繫客服。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1 text-2xl">●</span>
                  <span>退回商品須保持原始包裝、配件、贈品及購買明細之完整性。</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700 self-center">
              <h3 className="text-sm font-black text-slate-500 mb-3 uppercase tracking-tighter border-b border-slate-700 pb-2">非瑕疵認定 / Disclaimer</h3>
              <p className="text-base text-slate-400 leading-7 italic">
                螢幕顯示色差（以實品為準）、極小汙點、包裝微損、或個人操作不當導致之損壞，恕不列入退換貨範圍。
              </p>
            </div>
          </section>

          {/* 3. 人為損壞判定 */}
          <section>
            <h2 className="text-2xl font-black text-white mb-5 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> 人為損壞判定基準
            </h2>
            <div className="border border-slate-700 bg-[#151515] p-8 rounded-2xl">
              <p className="text-lg text-slate-200 leading-relaxed mb-8">
                商品發生功能性故障時，其損壞原因（如自然損毀或人為操作不當）之判定，
                <span className="text-cyan-400 font-black underline decoration-2">一律以原廠技術部門出具之檢測報告為最終依據</span>。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <p className="text-red-500 font-black uppercase italic text-sm tracking-widest">以下情況不予保固 / Void Warranty</p>
                  <ul className="text-sm space-y-2 text-slate-400 font-medium">
                    <li>● 自行拆卸、改裝或更換非原廠零件</li>
                    <li>● 液體滲入（受潮）、外力擠壓變形、掉落損毀</li>
                    <li>● 使用非官方規範之電壓或錯誤電源導致燒毀</li>
                  </ul>
                </div>
                <div className="bg-slate-900/80 p-5 rounded-xl border border-dashed border-slate-600 self-center">
                  <p className="text-slate-500 italic leading-6 text-xs">
                    * 若經原廠判定為人為損壞，相關檢測費用、維修零件費及物流成本，皆須由消費者自行承擔。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 智財權擔保 */}
          <section>
            <h2 className="text-2xl font-black text-white mb-5 flex items-center gap-3">
              <span className="text-cyan-400">04.</span> 權利擔保聲明
            </h2>
            <p className="text-lg text-slate-400 leading-loose">
              消費者委託客製之內容（圖片、標誌、文字）須保證未侵害他人之智慧財產權。如因內容引發法律糾紛，由消費者自行承擔法律責任。本服務條款若有未盡事宜，雙方同意以台灣桃園地方法院為第一審管轄法院。
            </p>
          </section>

          {/* LINE Support Button - 修正連結失效問題 */}
          <div className="mt-16 text-center py-12 border-t border-slate-800">
            <p className="text-slate-500 mb-8 text-lg italic font-medium">如有退換貨需求，請先準備好「開箱影片」並聯繫客服：</p>
            <a 
              href="https://lin.ee/rELcEE2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-4 bg-[#06C755] text-white font-black py-5 px-14 rounded-2xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(6,199,85,0.3)] text-xl"
            >
              <span>聯繫官方 LINE 客服</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
