'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);

  // 🚀 核心官方 LINE 連結 - 已鎖死
  const lineUrl = "https://lin.ee/rELcEE2";

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.posts.find((p: any) => p.id === params.id);
        setPost(found);
      });
  }, [params.id]);

  if (!post) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-black italic uppercase tracking-widest">
      Loading...
    </div>
  );

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. 統一導覽列 */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="text-xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition">
          AI PC <span className="text-cyan-400">INSIGHTS</span>
        </Link>
        <div className="flex items-center gap-6">
            <Link href="/" className="text-[11px] font-bold uppercase text-slate-400 hover:text-white transition">首頁</Link>
            <Link href="/blog" className="text-[11px] font-bold uppercase text-slate-400 hover:text-white transition">最新資訊</Link>
            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black text-[11px] font-black px-6 py-2 rounded-full uppercase hover:bg-cyan-400 transition"
            >
              裝機諮詢
            </a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* 返回按鈕 */}
        <Link href="/blog" className="text-cyan-500 font-bold uppercase text-[10px] mb-12 block hover:underline tracking-[0.2em]">
          ← Back to All Reports
        </Link>
        
        <header className="mb-16">
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase mb-6 tracking-widest">
              <span className="bg-white/5 px-3 py-1 rounded border border-white/5 text-cyan-500">{post.source}</span>
              <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-[1.1] text-white">
            {post.title}
          </h1>
        </header>
        
        {/* 文章正文內容 */}
        <div className="bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[3rem] shadow-2xl backdrop-blur-sm">
            <article className="text-lg text-slate-300 leading-[1.8] whitespace-pre-wrap font-medium">
                {post.content}
            </article>
        </div>

        {/* 2. 底部 CTA 轉換區塊 - 連結鎖死 */}
        <div className="mt-20 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-12 md:p-20 rounded-[4rem] text-center shadow-[0_0_80px_rgba(6,182,212,0.2)]">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase italic mb-8 leading-tight">
                對此報告有疑問？<br/>或是想直接以此配置裝機？
            </h2>
            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-950 text-white px-12 py-5 rounded-full font-black uppercase text-sm hover:bg-slate-800 transition transform hover:scale-105 shadow-2xl"
            >
              透過 LINE 諮詢專屬職人 →
            </a>
        </div>
      </div>

      {/* 3. 側邊懸浮 LINE 按鈕 - 連結鎖死 */}
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#06C755] p-4 rounded-full shadow-2xl hover:scale-110 transition cursor-pointer"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.303-.253 1.184 1.1 0 1.353-1.184 7.309-4.303 9.971-7.369 1.959-2.227 1.968-4.041 1.968-4.963z"/>
        </svg>
      </a>

      {/* 頁尾 */}
      <footer className="text-center py-20 border-t border-white/5">
        <p className="text-[9px] text-slate-700 font-bold uppercase tracking-[0.5em] italic">
          AI PC MASTER BUREAU / TECHNOLOGY INTELLIGENCE
        </p>
      </footer>
    </main>
  );
}
