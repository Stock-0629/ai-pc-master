"use client";

import React from "react";
import { Newspaper, Zap, Cpu, ShieldCheck, Sparkles, MousePointer2 } from "lucide-react";

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      tag: "AI 趨勢",
      title: "2024 AI 算力需求爆發：為什麼你需要更強的 GPU？",
      desc: "隨著大型語言模型普及，顯示卡的 VRAM 容量成為關鍵。我們為您解析如何挑選最適合 AI 運算的硬體配置。",
      date: "2024-05-20",
      icon: <Zap className="text-yellow-400" size={24} />,
    },
    {
      id: 2,
      tag: "硬體百科",
      title: "Intel vs AMD：今年哪款處理器才是 CP 值之王？",
      desc: "針對遊戲玩家與影音剪輯師，我們深度對比了兩大陣營的最新架構，助您在有限預算內發揮最大效能。",
      date: "2024-05-18",
      icon: <Cpu className="text-cyan-400" size={24} />,
    },
    {
      id: 3,
      tag: "組裝教學",
      title: "客製化電腦避坑指南：新手常犯的五個組裝錯誤",
      desc: "從散熱膏塗抹到記憶體插槽選擇，JC 客製化電腦帶你避開所有硬體衝突陷阱，打造穩定主機。",
      date: "2024-05-15",
      icon: <MousePointer2 className="text-orange-400" size={24} />,
    },
    {
      id: 4,
      tag: "售後保障",
      title: "超越原廠的服務：托尼購商行的一年無憂保固協議",
      desc: "我們不只組裝電腦，更負責您的使用體驗。詳細解讀我們的保固政策與代送服務流程。",
      date: "2024-05-10",
      icon: <ShieldCheck className="text-green-400" size={24} />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 開幕慶看板 */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900/40 to-blue-900/20 border border-cyan-500/30 p-8 md:p-12 mb-16">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <Sparkles size={20} />
              <span className="font-bold tracking-widest uppercase text-sm">Grand Opening</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              🎉 恭喜 <span className="text-cyan-400">JC 客製化電腦</span> 開幕！
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              歡慶托尼購商行正式上線，首波回饋全台網友！
              <br />
              <span className="bg-orange-500 text-black px-2 py-1 font-bold italic">限時限量</span> 前三位下單用戶，
              <span className="text-white text-3xl font-black underline decoration-cyan-500 underline-offset-8">
                全機組裝費只要 500 元！
              </span>
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95">
              立即私訊搶購
            </button>
          </div>
          {/* 裝飾背景 */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </section>

        {/* AI 精選文章標題 */}
        <div className="flex items-center gap-4 mb-8">
          <Newspaper className="text-cyan-400" size={32} />
          <h2 className="text-3xl font-bold">AI 精選資訊</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        {/* 圖卡網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer overflow-hidden relative"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold text-cyan-500/80 tracking-widest uppercase mb-2 block">
                {item.tag}
              </span>
              <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {item.desc}
              </p>
              <div className="text-[10px] text-slate-600 font-mono italic">
                {item.date}
              </div>
              
              {/* 卡片發光裝飾 */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
            </div>
          ))}
        </div>

        {/* 頁尾品牌標誌 */}
        <div className="mt-20 text-center opacity-30">
          <p className="text-sm font-mono tracking-tighter italic">托尼購商行 - ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </main>
  );
}
