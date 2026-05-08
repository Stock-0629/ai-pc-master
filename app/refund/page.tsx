"use client";

import { RefreshCcw, AlertTriangle } from "lucide-react";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-l-4 border-orange-500 pl-6">
          <h1 className="text-4xl font-black tracking-tighter">
            退換貨須知 <span className="text-orange-500 text-2xl ml-2">REFUND POLICY</span>
          </h1>
        </div>

        <div className="space-y-8">
          <section className="bg-slate-900/40 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-orange-400">
              <RefreshCcw size={24} />
              <h2 className="text-xl font-black">七天鑑賞期說明</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              依據消保法規定，電腦組裝屬於「客製化給付」商品，並不適用於一般電商之七天無條件退貨。
              但若硬體於收貨後七天內發生非人為之故障，我們提供全機換新服務。
            </p>
          </section>

          <section className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-red-400">
              <AlertTriangle size={24} />
              <h2 className="text-xl font-black">注意事項</h2>
            </div>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>● 請務必錄影開箱，以保障雙方權益。</li>
              <li>● 退換貨需保留原廠完整包裝盒與配件，若遺失恕無法受理。</li>
              <li>● 人為損壞（如液體潑濺、自行拆機）不在保固與退換範圍內。</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
