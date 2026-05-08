"use client";

import React from "react";
import { RefreshCcw, ShieldCheck, AlertCircle, Scale, Gavel } from "lucide-react";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 標題區 */}
        <div className="mb-12 border-l-4 border-orange-500 pl-6">
          <h1 className="text-4xl font-black mb-2">JC客製化電腦 退換貨政策</h1>
          <p className="text-slate-400 text-sm italic font-bold tracking-widest uppercase">
            Refund & Return Policy
          </p>
        </div>

        <div className="space-y-8">
          {/* 第一部分：重要聲明 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-orange-400 mb-6">
              <AlertCircle size={28} />
              <h2 className="text-2xl font-bold">一、 重要聲明：客製化給付不適用七天鑑賞期</h2>
            </div>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                本商行所提供之電腦組裝服務，係依據消費者要求所為之<span className="text-orange-400 font-bold">客製化給付</span>。
              </p>
              <p>
                依據《消費者保護法》第 19 條第 1 項規定，並經行政院公告之《通訊交易解除權合理例外情事適用準則》第 2 條，
                <span className="text-red-500 font-bold bg-red-500/10 px-1 italic">客製化商品不適用七天無理由退換貨（即無七天鑑賞期）</span>。
              </p>
              <p>訂單一旦進入組裝程序，恕不接受取消或退貨。</p>
            </div>
          </section>

          {/* 第二部分：瑕疵擔保 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-cyan-400 mb-6">
              <RefreshCcw size={28} />
              <h2 className="text-2xl font-bold">二、 瑕疵擔保與換貨流程</h2>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <p className="mb-4">雖不適用七天鑑賞期，但本商行仍提供硬體瑕疵擔保：</p>
              <ul className="list-decimal list-inside space-y-4 ml-2">
                <li>
                  <span className="font-bold text-white">到貨瑕疵：</span> 
                  若商品於收貨時發現外觀破損、無法開機或硬體異常，請於收貨後 <span className="text-cyan-400 font-bold">48 小時內</span>聯繫官方客服，並提供拆箱錄影佐證。
                </li>
                <li>
                  <span className="font-bold text-white">硬體更換：</span> 
                  經鑑定確認為硬體本身瑕疵或組裝問題，本商行將免費提供收回檢測並更換同型號良品。
                </li>
              </ul>
            </div>
          </section>

          {/* 第三部分：保固說明 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <ShieldCheck size={28} />
              <h2 className="text-2xl font-bold">三、 保固說明</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6 text-slate-300">
              <div className="border-l border-white/20 pl-4">
                <h3 className="font-bold text-white mb-2 underline underline-offset-4 decoration-blue-500">1. 零組件保固</h3>
                <p>所有硬體配件均享有原廠授權保固，保固期限依各品牌原廠規定為準。</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <h3 className="font-bold text-white mb-2 underline underline-offset-4 decoration-blue-500">2. 代組裝服務</h3>
                <p>本商行提供一年內硬體故障代送原廠之服務（可能產生相關物流費用）。</p>
              </div>
              <div className="border-l border-white/20 pl-4 text-red-400/80">
                <h3 className="font-bold mb-2 uppercase tracking-widest">3. 除外責任</h3>
                <p>凡人為損壞（如液體灑入、自行拆裝、撞擊）、天災、或因自行修改軟體（含非法軟體）導致之系統故障，不在保固範圍內。</p>
              </div>
            </div>
          </section>

          {/* 第四部分：法律爭議 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-slate-400 mb-6">
              <Scale size={28} />
              <h2 className="text-2xl font-bold">四、 法律適用與爭議處理</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-slate-300 ml-2">
              <li>本政策之解釋與適用，均依中華民國相關法令辦理。</li>
              <li>如因本契約發生爭議，雙方同意以<span className="text-white font-bold underline decoration-slate-500">台灣彰化地方法院</span>為第一審管轄法院。</li>
            </ul>
          </section>

          {/* 第五部分：最終解釋權 */}
          <div className="pt-8 mt-8 border-t border-white/10 flex flex-col items-center">
            <div className="flex items-center gap-2 text-slate-500 mb-4">
              <Gavel size={20} />
              <span className="text-xl font-bold tracking-tighter uppercase">Final Interpretation</span>
            </div>
            <p className="text-2xl font-black text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              五、 最終解釋權歸「托尼購商行」所有
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
