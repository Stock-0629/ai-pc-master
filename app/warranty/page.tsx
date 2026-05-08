"use client";
import React from "react";
import { ShieldCheck, Info } from "lucide-react";

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-l-4 border-blue-500 pl-6">
          <h1 className="text-4xl font-black">保固條件</h1>
          <p className="text-slate-400 mt-2 italic font-bold text-sm uppercase tracking-widest">Warranty Policy</p>
        </div>
        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <ShieldCheck size={24} />
              <h2 className="text-xl font-black">原廠硬體保固</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              所有零件皆為全新公司貨，保固期限依原廠官方規定為準（通常為 3 至 10 年）。
              保固期間內若硬體發生非人為故障，托尼購商行提供免費代送修服務。
            </p>
          </section>
          <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 flex items-start gap-3">
            <Info className="text-blue-400 shrink-0" size={20} />
            <p className="text-xs text-slate-500 leading-relaxed">
              溫馨提醒：保固不包含人為損壞、液體潑濺、自行拆解或外部撞擊。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
