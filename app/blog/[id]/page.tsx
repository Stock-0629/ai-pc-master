'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(data => {
        const found = data.posts.find((p: any) => p.id === params.id);
        setPost(found);
    });
  }, [params.id]);

  if (!post) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">LOADING...</div>;

  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 font-sans relative">
      <nav className="p-8 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 shadow-2xl">
        <Link href="/" className="text-3xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition flex items-center gap-3">AI PC MASTER</Link>
        <div className="flex items-center gap-12 text-lg font-black uppercase">
            <Link href="/" className="text-slate-400 hover:text-white transition">🏠 首頁</Link>
            <Link href="/blog" className="text-white border-b-2 border-cyan-500 pb-1">📰 最新資訊</Link>
            <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-10 py-3 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(6,199,85,0.4)]">💬 聯絡我們</a>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-12">{post.title}</h1>
        <div className="bg-white/[0.03] border border-white/10 p-12 rounded-[3rem]">
            <article className="text-lg text-slate-300 leading-loose whitespace-pre-wrap">{post.content}</article>
        </div>
        <div className="mt-20 bg-gradient-to-br from-cyan-500 to-blue-700 p-16 rounded-[4rem] text-center">
            <h2 className="text-3xl font-black text-slate-950 uppercase italic mb-8">需要詳細配單建議？</h2>
            {/* ⚠️ 物理鎖死 */}
            <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-950 text-white px-12 py-5 rounded-full font-black uppercase text-sm shadow-2xl hover:scale-105 transition">透過 LINE 諮詢專業職人 →</a>
        </div>
      </div>
    </main>
  );
}
