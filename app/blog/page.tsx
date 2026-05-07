'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🚀 核心官方 LINE 連結 - 物理級鎖死
  const lineUrl = "https://lin.ee/rELcEE2";

  useEffect(() => {
    // 加上快取清除參數，確保 Vercel 抓到的是最新產生的數據
    fetch('/data.json?v=' + new Date().getTime())
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("數據讀取失敗", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative overflow-hidden">
      
      {/* 科技感背景 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* 🚀 UI 優化：超大統一導覽列 */}
        <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 shadow-2xl">
          <Link href="/" className="text-3xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition flex items-center gap-3">
            AI PC MASTER
          </Link>
          <div className="flex items-center gap-12">
              <Link href="/" className="text-lg font-black uppercase text-slate-400 hover:text-white transition">🏠 首頁</Link>
              <Link href="/blog" className="text-lg font-black uppercase text-white border-b-2 border-cyan-500 pb-1">📰 最新資訊</Link>
              <Link href="/warranty" className="text-lg font-black uppercase text-slate-400 hover:text-white transition">🛡️ 保固條件</Link>
              <a 
                href="https://lin.ee/rELcEE2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#06C755] text-white text-lg font-black px-10 py-4 rounded-full uppercase hover:brightness-110 transition shadow-[0_0_30px_rgba(6,199,85,0.4)]"
              >
                💬 聯絡我們
              </a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-10 pt-24 pb-24">
            <h1 className="text-7xl font-black italic uppercase mb-16 tracking-tighter">
                Latest Reports / <span className="text-cyan-400">趨勢全覽</span>
            </h1>

            {loading ? (
                <div className="py-20 text-center text-slate-500 font-black italic animate-pulse uppercase tracking-widest text-2xl">
                    Loading Intelligence Data...
                </div>
            ) : posts.length > 0 ? (
                <div className="grid gap-8">
                    {posts.map((post: any) => (
                        <Link 
                            key={post.id} 
                            href={`/blog/${post.id}`} 
                            target="_blank" 
                            className="group block bg-white/[0.03] border border-white/10 p-12 rounded-[3rem] hover:border-cyan-500/50 transition duration-500 shadow-2xl"
                        >
                            <div className="flex justify-between items-center text-xs font-bold text-cyan-500 uppercase mb-6 tracking-[0.3em]">
                                <span className="bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">{post.source}</span>
                                <span className="text-slate-600">{post.date}</span>
                            </div>
                            <h2 className="text-4xl font-black uppercase mb-6 group-hover:text-white transition leading-tight">{post.title}</h2>
                            <p className="text-slate-400 text-lg leading-loose line-clamp-2 font-medium mb-8">{post.summary}</p>
                            <span className="text-[10px] font-black text-slate-500 uppercase border-b border-white/10 pb-1 group-hover:text-cyan-400 group-hover:border-cyan-400 transition">
                                Read Full Analysis →
                            </span>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10">
                    <p className="text-slate-500 text-xl font-bold">目前尚無公開報告，請執行資料庫同步腳本。</p>
                </div>
            )}
        </div>

        {/* 頁尾 */}
        <footer className="text-center py-24 border-t border-white/5 opacity-50 bg-black/20">
            <p className="text-[11px] font-bold uppercase tracking-[0.6em]">托尼購商行 / JC 電腦組裝 © 2026</p>
        </footer>

        {/* 側邊懸浮 LINE - 物理鎖死 */}
        <a 
          href="https://lin.ee/rELcEE2" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-10 right-10 z-50 bg-[#06C755] p-5 rounded-full shadow-[0_0_40px_rgba(6,199,85,0.6)] hover:scale-110 transition active:scale-95"
        >
            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.303-.253 1.184 1.1 0 1.353-1.184 7.309-4.303 9.971-7.369 1.959-2.227 1.968-4.041 1.968-4.963z"/>
            </svg>
        </a>
      </div>
    </main>
  );
}
