'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [orderId, setOrderId] = useState('');
  const [orderResult, setOrderResult] = useState<any>(null);

  // 🚀 物理鎖死 LINE 連結：https://lin.ee
  const lineUrl = "https://lin.ee";

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(json => setData(json));
  }, []);

  const handleTrackOrder = () => {
    if (!orderId) return alert("請輸入您的工單號碼！");
    const found = data?.info?.orders?.find((o: any) => o.id.toUpperCase() === orderId.toUpperCase());
    if (found) setOrderResult(found);
    else setOrderResult({ error: "查無此單號，請聯繫 LINE 客服。" });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 💡 科技感動態背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* 1. 統一導覽列：加大字體與圖標 */}
        <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 shadow-2xl">
          <Link href="/" className="text-3xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition flex items-center gap-3">
            <span className="bg-cyan-500 text-slate-950 px-2 rounded-lg text-xl">AI</span> PC MASTER
          </Link>
          <div className="flex items-center gap-12 text-lg font-black uppercase">
              <Link href="/" className="text-white border-b-2 border-cyan-500 pb-1">🏠 首頁</Link>
              <Link href="/blog" className="text-slate-400 hover:text-white transition">📰 最新資訊</Link>
              <Link href="/warranty" className="text-slate-400 hover:text-white transition">🛡️ 保固條件</Link>
              <a href="https://lin.ee" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-10 py-3 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(6,199,85,0.4)]">
                💬 聯絡我們
              </a>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <section className="text-center pt-32 pb-16 px-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic uppercase leading-none text-white">
            LIMITLESS <span className="text-cyan-400 font-sans">BUILD</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-2xl font-medium opacity-80 leading-relaxed">
              打破通路限制。不僅是組裝，更是對「極限特殊硬體」的追尋。<br/>
              由 <span className="text-white underline decoration-cyan-500">JC 電腦組裝 / 訂製</span> 為您服務。
          </p>
        </section>

        {/* 3. 我們的特殊性 (JC 特殊優勢) */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex items-center gap-4 mb-16">
              <h2 className="text-2xl font-black italic uppercase tracking-widest text-slate-500">Why Choose JC? / <span className="text-white">我們的特殊性</span></h2>
              <div className="flex-1 h-[1px] bg-white/5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {data?.info?.advantages?.map((adv: any, i: number) => (
                  <div key={i} className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-cyan-500/50 transition duration-700 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 text-9xl font-black text-cyan-500/5 group-hover:text-cyan-500/10 transition italic">0{i+1}</div>
                      <h3 className="text-2xl font-black text-cyan-400 mb-6 uppercase tracking-widest leading-tight">{adv.title}</h3>
                      <p className="text-slate-400 text-lg leading-loose font-medium">
                          {adv.desc}
                      </p>
                      <div className="mt-10 h-1 w-12 bg-cyan-500/30 group-hover:w-full transition-all duration-700"></div>
                  </div>
              ))}
          </div>
        </section>

        {/* 4. 工單查詢系統 */}
        <section className="max-w-4xl mx-auto px-6 mb-40">
          <div className="bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 p-12 rounded-[3rem] shadow-3xl backdrop-blur-md">
            <h2 className="text-2xl font-black italic uppercase mb-8 text-cyan-400 tracking-widest text-center">Order Tracking / 工單查詢</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input 
                type="text" 
                placeholder="輸入您的工單編號 (EX: AI20260501)" 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 text-xl outline-none focus:border-cyan-500 transition text-white font-bold"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
              <button onClick={handleTrackOrder} className="bg-white text-slate-950 font-black px-12 py-6 rounded-2xl text-xl hover:bg-cyan-400 transition-all shadow-lg">
                查詢
              </button>
            </div>

            {orderResult && (
              <div className="mt-8 p-10 bg-black/60 rounded-[2.5rem] border border-cyan-500/30 animate-in fade-in slide-in-from-top-4">
                {orderResult.error ? (
                  <p className="text-red-400 font-bold text-lg text-center">{orderResult.error}</p>
                ) : (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-white/10 pb-6">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Customer</span>
                      <span className="text-xl font-black text-white">{orderResult.customer_name}</span>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Status / 目前貨況</span>
                        <p className="text-2xl font-black text-cyan-400">{orderResult.status}</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-slate-500 uppercase block mb-2">Specifications / 裝機清單</span>
                        <p className="text-sm text-slate-300 font-medium">{orderResult.parts_list}</p>
                    </div>
                    <p className="text-lg text-slate-300 italic border-l-4 border-cyan-500 pl-4">「{orderResult.detail}」</p>
                    <p className="text-[10px] text-slate-600 font-bold uppercase mt-4 text-right">Updated: {orderResult.last_update}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 5. 7 階段專業組裝流程 (找回來了！) */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-black italic uppercase tracking-widest text-slate-500">Service Process / <span className="text-white">職人工序</span></h2>
              <div className="flex-1 h-[1px] bg-white/5"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data?.info?.workflow?.map((w: any, i: number) => (
                  <div key={i} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition duration-500 relative">
                      <div className="text-5xl font-black text-cyan-500/10 mb-6 group-hover:text-cyan-400/20 transition">{w.step}</div>
                      <h4 className="text-xl font-black text-white mb-3 tracking-widest border-l-4 border-cyan-500 pl-4">{w.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                  </div>
              ))}
              {/* 服務報價卡片 */}
              <div className="p-10 rounded-[2.5rem] bg-cyan-600 text-slate-950 shadow-[0_0_60px_rgba(8,145,178,0.4)] flex flex-col justify-between transform hover:scale-105 transition duration-500">
                  <div>
                    <h4 className="text-5xl font-black mb-2 tracking-tighter italic">NT$ 1,500</h4>
                    <p className="text-xs font-black opacity-80 uppercase mb-8 tracking-widest">固定組裝燒機工費</p>
                    <p className="text-sm font-bold leading-relaxed italic mb-8">
                        零件價格以當日官方公告為主，<br/>
                        透明報價，絕不抽成。
                    </p>
                  </div>
                  <a href="https://lin.ee" target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-950 text-white text-center py-5 rounded-2xl font-black text-sm uppercase hover:bg-slate-800 transition shadow-2xl">
                    立即預約裝機 →
                  </a>
              </div>
          </div>
        </section>

        {/* 6. 頁尾：品牌資訊 */}
        <footer className="text-center py-24 border-t border-white/5 bg-black/20">
            <div className="mb-8">
                <p className="text-3xl font-black text-white tracking-[0.2em] uppercase">托尼購商行</p>
                <p className="text-lg font-bold text-cyan-500 uppercase tracking-widest mt-2">JC 電腦組裝 / 訂製</p>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-slate-700 italic">
                AI PC Master Bureau © 2026
            </p>
        </footer>

        {/* 7. 側邊懸浮 LINE：全路徑鎖死 */}
        <a href="https://lin.ee" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-50 bg-[#06C755] p-5 rounded-full shadow-[0_0_40px_rgba(6,199,85,0.6)] hover:scale-110 transition active:scale-95">
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.303-.253 1.184 1.1 0 1.353-1.184 7.309-4.303 9.971-7.369 1.959-2.227 1.968-4.041 1.968-4.963z"/></svg>
        </a>
      </div>
    </main>
  );
}
