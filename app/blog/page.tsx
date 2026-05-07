'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/data.json?t=' + new Date().getTime())
      .then(res => res.json())
      .then(json => setPosts(json.posts || []));
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="relative z-10">
        <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 shadow-2xl">
          <Link href="/" className="text-3xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition flex items-center gap-3">AI PC MASTER</Link>
          <div className="flex items-center gap-12 text-lg font-black uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition">🏠 首頁</Link>
              <Link href="/blog" className="text-white border-b-2 border-cyan-500 pb-1">📰 最新資訊</Link>
              <Link href="/warranty" className="text-slate-400 hover:text-white transition">🛡️ 保固條件</Link>
              {/* ⚠️ 物理鎖死 */}
              <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-10 py-3 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(6,199,85,0.4)]">💬 聯絡我們</a>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-10 pt-20 pb-20">
            <h1 className="text-6xl font-black italic uppercase mb-16">All Reports / <span className="text-cyan-400">趨勢全覽</span></h1>
            <div className="grid gap-6">
                {posts.map((post: any) => (
                    <Link key={post.id} href={`/blog/${post.id}`} target="_blank" className="block bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-500/50 transition">
                        <div className="flex justify-between text-xs font-bold text-cyan-500 uppercase mb-4"><span>{post.source}</span><span>{post.date}</span></div>
                        <h2 className="text-3xl font-black uppercase mb-4">{post.title}</h2>
                        <p className="text-slate-400 line-clamp-2">{post.summary}</p>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </main>
  );
}
