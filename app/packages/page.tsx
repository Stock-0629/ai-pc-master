"use client";

import React from "react";
import { Hammer, Loader2, Home } from "lucide-react";
import Link from "next/link";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* 旋轉圖示動畫 */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
            <Loader2 size={48} className="text-cyan-400 animate-spin" />
          </div>
          <div className="absolute -top-2 -right-2">
            <Hammer size={24} className="text-orange-500 animate-bounce" />
          </div>
        </div>

        {/* 文字說明 */}
        <h1 className="text-4xl font-black mb-4 tracking-tighter uppercase">
          網站 <span className="text-cyan-400">準備中</span>
        </h1>
        <p className="text-slate-400 leading-relaxed mb-10 font-medium">
          JC 客製化電腦正在優化套餐內容與即時報價系統，
          <br />
          我們將在近期以全新的面貌與您見面。
        </p>

        {/* 返回首頁按鈕 */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-white text-black font-black px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all active:scale-95"
        >
          <Home size={18} />
          返回首頁
        </Link>

        {/* 頁尾裝飾 */}
        <div className="mt-12 opacity-20">
          <p className="text-[10px] font-mono tracking-[0.5em] uppercase italic">
            Maintenance Mode / JC PC MASTER
          </p>
        </div>

      </div>
    </main>
  );
}
