"use client";

import React from "react";
import { ShieldCheck, Cpu, Layout, HardDrive, Zap, MousePointer2, Info } from "lucide-react";

export default function PackagesPage() {
  const packages = [
    { icon: Cpu, label: "處理器 CPU", val: "Intel Core i5-12400", note: "內建強大顯示晶片" },
    { icon: Layout, label: "主機板 MB", val: "華擎 B660M-HDV", note: "支援高速記憶體" },
    { icon: Zap, label: "記憶體 RAM", val: "金士頓 8GB DDR4", note: "流暢運行多工作業" },
    { icon: HardDrive, label: "硬碟 SSD", val: "威剛 500GB M.2", note: "極速開機體驗" },
    { icon: Info, label: "電源 PSU", val: "海盜船 550W", note: "穩定電力輸出" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            精選 <span className="text-cyan-400">PACKAGES</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            由專業團隊精心挑選的 AI 算力套餐，
            每一項硬體都經過效能壓力測試。
          </p>
        </div>

        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest">
                入門工作站
              </span>
              <h2 className="text-3xl font-black">AI 入門基本組</h2>
              <div className="text-right">
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">
                  預估總價 (不含顯示卡)
                </div>
                <div className="text-4xl font-black text-cyan-400">
                  $17,830 <span className="text-sm text-slate-400 font-normal">TWD</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {packages.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <item.icon className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">{item.label}</div>
                      <div className="font-medium">{item.val}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm italic">
            * 價格僅供參考，實際價格以詢價當日為準。
          </p>
        </div>
      </div>
    </main>
  );
}
