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
