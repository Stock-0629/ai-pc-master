'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const lineUrl = "https://lin.ee/rELcEE2";

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(data => setPosts(data.posts));
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans scroll-smooth pb-24">
      {/* 統一導覽列 */}
      <nav className="p-6 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 z-50">
        <Link href="/" className="text-xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition">
          AI PC <span className="text-cyan-400">INSIGHTS</span>
        </Link>
        <div className="flex items-center gap-6">
            <Link href="/" className="text-[11px] font-bold uppercase text-slate-400 hover:text-white transition">首頁</Link>
            <Link href="/blog" className="text-[11px] font-bold uppercase text-white transition">最新資訊</Link>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-[11px] font-black px-6 py-2 rounded-full uppercase hover:bg-cyan-400 transition">裝機諮詢</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-10 pt-20">
          <h1 className="text-6xl font-black italic uppercase mb-16 tracking-tighter">All Reports / <span className="text-cyan-400">趨勢全覽</span></h1>
          <div className="grid gap-6">
              {posts.map((post: any) => (
                  <Link key={post.id} href={`/blog/${post.id}`} target="_blank" className="block bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-500/50 transition">
                      <div className="flex justify-between text-xs font-bold text-cyan-500 uppercase mb-4">
                          <span>{post.source}</span>
                          <span className="text-slate-600">{post.date}</span>
                      </div>
                      <h2 className="text-3xl font-black uppercase mb-4">{post.title}</h2>
                      <p className="text-slate-400 line-clamp-2">{post.summary}</p>
                  </Link>
              ))}
          </div>
      </div>
    </main>
  );
}
