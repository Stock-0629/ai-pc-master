import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI PC MASTER",
  description: "專業電腦組裝與訂製服務",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-slate-50`}>
        {/* 響應式導覽列 */}
        <nav className="p-4 md:p-8 border-b border-white/5 flex justify-between items-center bg-[#020617]/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl">
          {/* Logo: 手機版自動縮小字體 */}
          <Link href="/" className="text-xl md:text-3xl font-black italic tracking-tighter text-white hover:text-cyan-400 transition flex items-center gap-2">
            AI PC MASTER
          </Link>

          {/* 桌面版選單: md 以上顯示，以下隱藏 */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-lg font-black uppercase">
              <Link href="/" className="text-slate-400 hover:text-white transition">🏠 首頁</Link>
              <Link href="/blog" className="text-slate-400 hover:text-white transition">📰 最新資訊</Link>
              <Link href="/warranty" className="text-slate-400 hover:text-white transition">🛡️ 保固條件</Link>
              <Link href="/refund" className="text-slate-400 hover:text-white transition">📜 退換貨須知</Link>
              <a href="https://lin.ee" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-8 py-3 rounded-full hover:brightness-110 transition shadow-[0_0_30px_rgba(6,199,85,0.4)]">
                💬 聯絡我們
              </a>
          </div>

          {/* 手機版快速連結: md 以下顯示，只顯示關鍵圖示/按鈕 */}
          <div className="flex md:hidden items-center gap-4">
              <Link href="/refund" className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 text-slate-400">📜 須知</Link>
              <a href="https://lin.ee" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-4 py-2 rounded-full text-xs font-bold">
                LINE
              </a>
          </div>
        </nav>

        {/* 頁面內容區塊 */}
        <div className="relative overflow-x-hidden">
          {children}
        </div>

        {/* 通用底部: 手機版自動改為單欄排版 */}
        <footer className="text-center py-16 md:py-24 border-t border-white/5 bg-black/20 mt-20 px-6">
            <div className="mb-8">
                <p className="text-2xl md:text-3xl font-black text-white tracking-[0.2em] uppercase">托尼購商行</p>
                <p className="text-sm md:text-lg font-bold text-cyan-500 uppercase tracking-widest mt-2">JC 電腦組裝 / 訂製</p>
            </div>
            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-700 italic">AI PC MASTER BUREAU © 2026</p>
        </footer>

        {/* 懸浮 LINE 按鈕: 手機版稍微縮小避開底欄 */}
        <a href="https://lin.ee/rELcEE2" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#06C755] p-4 md:p-5 rounded-full shadow-[0_0_40px_rgba(6,199,85,0.6)] hover:scale-110 transition active:scale-95">
            <svg className="w-8 h-8 md:w-10 md:h-10 fill-white" viewBox="0 0 24 24">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.303-.253 1.184-.253 1.184l-.03 1.03c-.007.242.164.288.346.132l2.392-2.048c.31-.266.651-.57 1.285-.596 5.623-.23 9.219-4.225 9.219-9.144z"/>
            </svg>
        </a>
      </body>
    </html>
  );
}
