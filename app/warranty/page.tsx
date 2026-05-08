"use client";

import React from "react";
import { ShieldCheck, Truck, MonitorSmartphone, AlertTriangle, CheckCircle2, Headphones } from "lucide-react";

export default function WarrantyPage() {
  const steps = [
    {
      title: "原廠硬體保固",
      desc: "所有零件皆為全新公司貨，保固期限依原廠官方規定為準。保固期間內若硬體發生非人為故障，托尼購商行提供免費代送修服務。",
      icon: <Truck className="text-blue-400" size={32} />,
    },
    {
      title: "一年遠端協助",
      desc: "購買日起一年內，提供專業遠端連線診斷，協助排除系統故障、驅動程式異常或軟體設定問題。",
      icon: <MonitorSmartphone className="text-cyan-400" size={32} />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* 頁面標題 */}
        <div className="mb-16 border-l-4 border-blue-500 pl-6">
          <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">保固服務說明</h1>
          <p className="text-slate-400 text-sm italic font-bold tracking-widest uppercase">
            Warranty & Technical Support
          </p>
        </div>

        {/* 兩大核心服務 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group">
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-slate-400 leading-relaxed italic font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 詳細規則區塊 */}
        <div className="space-y-8">
          {/* 保固規範 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <ShieldCheck size={28} />
              <h2 className="text-2xl font-bold">服務規範細則</h2>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 text-blue-500 shrink-0" />
                <span>代送修期間，若原廠判定為新品不良，將依原廠流程更換良品或新品。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 text-blue-500 shrink-0" />
                <span>遠端協助時間為 <span className="text-white font-bold underline decoration-blue-500">週一至週五 10:00 - 20:00</span>，需事先預約。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-1 text-blue-500 shrink-0" />
                <span>本商行僅針對硬體進行保固，個人數據與重要資料請務必自行定期備份。</span>
              </li>
            </ul>
          </section>

          {/* 非保固範圍 */}
          <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-red-400 mb-6">
              <AlertTriangle size={28} />
              <h2 className="text-2xl font-bold">非保固範圍（人為因素）</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400 font-medium">
              <p>• 自行拆解硬體或撕毀防拆標籤。</p>
              <p>• 使用非官方、非法或未經授權之軟體導致毀損。</p>
              <p>• 意外事故（摔落、撞擊、液體滲入）。</p>
              <p>• 因天災或不可抗力因素導致之損壞。</p>
              <p>• 硬體過保固期後之維修需酌收檢測費與物流費。</p>
            </div>
          </section>
        </div>

        {/* 聯繫客服導購 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 mb-6 font-mono text-xs uppercase tracking-[0.3em]">
            <Headphones size={14} /> Contact Support
          </div>
          <p className="text-xl font-bold text-white mb-2">有任何硬體問題？</p>
          <p className="text-slate-400 mb-8">請聯繫官方 LINE 或 私訊粉專，我們將盡快為您安排檢測。</p>
          <button className="bg-white text-black font-black px-12 py-4 rounded-full hover:bg-blue-400 hover:text-white transition-all">
            聯繫托尼購商行
          </button>
        </div>

      </div>
    </main>
  );
}
