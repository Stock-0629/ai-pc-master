"use client";

import React from "react";
import { ShieldCheck, Info, HeartHandshake } from "lucide-react";

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 標題區 */}
        <div className="mb-12 border-l-4 border-blue-500 pl-6">
          <h1 className="text-4xl font-black tracking-tighter">
            保固條件 <span className="text-blue-500 text-2xl ml-2">WARRANTY POLICY</span>
          </h1>
          <p className="text-slate-400 mt-2 font-bold italic">
            托尼購商行：售後服務是我們的品牌生命線
          </p>
        </div>

        <div className="space-y-8">
          {/* 第一部分：硬體保固 */}
          <section className="bg-slate-900/40 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <ShieldCheck size={24} />
              <h2 className="text-xl font-black">原廠硬體保固</h2>
            </div>
            <ul className="space-y-4 text-slate-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">01.</span>
                <span>
                  所有零件皆為 <strong className="text-white">全新公司貨</strong>，保固期限依原廠官方規定為準（通常為 3 至 10 年）。
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">02.</span>
                <span>
                  保固期間內若硬體發生非人為故障，托尼購商行提供「免費代送修」服務。
                </span>
              </li>
            </ul>
          </section>

          {/* 第二部分：加值服務 */}
          <section className="bg-slate-900/40 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-cyan-400">
              <HeartHandshake size={24} />
              <h2 className="text-xl font-black">托尼購專屬服務</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold mb-2">終身技術諮詢</h3>
                <p className="text-sm text-slate-400">
                  電腦遇到任何疑難雜症，一律提供線上遠端排查服務，讓您用得安心。
                </p>
              </div>
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-white font-bold mb-2">一年免費檢測</h3>
                <p className="text-sm text-slate-400">
                  購買起一年內，非人為因素之硬體檢測與系統重置一律免收工資。
                </p>
              </div>
            </div>
          </section>

          {/* 提醒區塊 */}
          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 flex items-start gap-3">
            <Info className="text-blue-400 shrink-0" size={20} />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              溫馨提醒：保固不包含人為損壞（如：液體潑濺、自行拆解、外部撞擊）、軟體中毒或第三方軟體衝突。
              若超過一年保固期，代送修將酌收基本手續費。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
