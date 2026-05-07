'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [orderId, setOrderId] = useState('');
  const [orderResult, setOrderResult] = useState<any>(null);

  useEffect(() => {
    fetch('/data.json?t=' + new Date().getTime())
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("數據同步失敗"));
  }, []);

  const handleTrackOrder = () => {
    if (!orderId) return alert("請輸入您的工單號碼！");
    const found = data?.info?.orders?.find((o: any) => o.id.toUpperCase() === orderId.toUpperCase());
    if (found) setOrderResult(found);
    else setOrderResult({ error: "查無此工單，請聯繫 LINE 客服。" });
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* 科技背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        

        {/* Hero */}
        <section className="text-center pt-32 pb-16 px-6">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 italic uppercase leading-none text-white">
            LIMITLESS <span className="text-cyan-400 font-sans">BUILD</span>
          </h1>
          <div className="mt-12">
            {/* ⚠️ 物理鎖死 2 */}
            <a href="https://lin.ee/rELcEE2" target="_blank" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-lg hover:bg-cyan-400 transition transform hover:scale-105 inline-block shadow-2xl">
              立即加 LINE 索取配單建議
            </a>
          </div>
        </section>

        {/* 特殊性/優勢區塊 */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-3 gap-8">
              {data?.info?.advantages?.map((adv: any, i: number) => (
                  <div key={i} className="group p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-cyan-500/50 transition duration-700 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 text-9xl font-black text-cyan-500/5 group-hover:text-cyan-500/10 transition italic">0{i+1}</div>
                      <h3 className="text-2xl font-black text-cyan-400 mb-6 uppercase tracking-widest">{adv.title}</h3>
                      <p className="text-slate-400 text-lg leading-loose font-medium">{adv.desc}</p>
                  </div>
              ))}
          </div>
        </section>

        {/* 工單追蹤 */}
        <section className="max-w-4xl mx-auto px-6 mb-40">
          <div className="bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 p-12 rounded-[3rem] shadow-3xl backdrop-blur-md text-center">
            <h2 className="text-2xl font-black italic uppercase mb-8 text-cyan-400 tracking-widest">Order Tracking / 工單查詢</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input type="text" placeholder="輸入您的工單編號" className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 text-xl outline-none focus:border-cyan-500 text-white font-bold" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
              <button onClick={handleTrackOrder} className="bg-white text-slate-950 font-black px-12 py-6 rounded-2xl text-xl hover:bg-cyan-400 transition-all">查詢</button>
            </div>
            {orderResult && (
              <div className="mt-8 p-10 bg-black/60 rounded-[2.5rem] border border-cyan-500/30 animate-in fade-in">
                {orderResult.error ? <p className="text-red-400 font-bold">{orderResult.error}</p> : (
                  <div className="space-y-4 text-left">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Customer: <span className="text-white text-lg ml-2">{orderResult.customer_name}</span></p>
                    <p className="text-2xl font-black text-cyan-400 italic">「{orderResult.status}」</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{orderResult.detail}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 7 階段流程 */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data?.info?.workflow?.map((w: any, i: number) => (
                  <div key={i} className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition duration-500 relative">
                      <div className="text-5xl font-black text-cyan-500/10 mb-6">{w.step}</div>
                      <h4 className="text-xl font-black text-white mb-3 tracking-widest border-l-4 border-cyan-500 pl-4">{w.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                  </div>
              ))}
              <div className="p-10 rounded-[2.5rem] bg-cyan-600 text-slate-950 shadow-[0_0_60px_rgba(8,145,178,0.4)] flex flex-col justify-between transform hover:scale-105 transition duration-500">
                  <h4 className="text-5xl font-black mb-2 tracking-tighter italic">NT$ 1,500</h4>
                  <p className="text-xs font-black opacity-80 uppercase mb-8">組裝燒機工費</p>
                  {/* ⚠️ 物理鎖死 3 */}
                  <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="block w-full bg-slate-950 text-white text-center py-5 rounded-2xl font-black text-sm uppercase hover:bg-slate-800 transition shadow-2xl">立即預約裝機 →</a>
              </div>
          </div>
        </section>

        <footer className="text-center py-24 border-t border-white/5 bg-black/20">
            <div className="mb-8">
                <p className="text-3xl font-black text-white tracking-[0.2em] uppercase">托尼購商行</p>
                <p className="text-lg font-bold text-cyan-500 uppercase tracking-widest mt-2">JC 電腦組裝 / 訂製</p>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.6em] text-slate-700 italic">AI PC MASTER BUREAU © 2026</p>
        </footer>

        {/* ⚠️ 物理鎖死 4 (懸浮) */}
        <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="fixed bottom-10 right-10 z-50 bg-[#06C755] p-5 rounded-full shadow-[0_0_40px_rgba(6,199,85,0.6)] hover:scale-110 transition active:scale-95">
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.303-.253 1.184-.253 1.184l-.03 1.03c-.007.242.164.288.346.132l2.392-2.048c.31-.266.651-.57 1.285-.596 5.623-.23 9.219-4.225 9.219-9.144z"/>
            </svg>
        </a>
      </div>
    </main>
  );
}
