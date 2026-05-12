import "./globals.css";
import Link from "next/link";
import { Home, Newspaper, ShieldCheck, RefreshCcw } from "lucide-react";

export const metadata = {
  title: "AI PC MASTER | 專業電腦組裝訂製",
  description: "托尼購商行 - 提供最專業的電腦組裝與配置建議",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-black text-white antialiased">
        {/* 全局導航欄 */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition">
              AI PC MASTER
            </Link>

            {/* 選單連結 - 這裡已修正 <li> 結構 */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6 text-[13px] font-bold text-slate-300">
                <li>
                  <Link href="/" className="flex items-center gap-1 hover:text-cyan-400 transition">
                    <Home size={14} /> 首頁
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors">
                    <Home size={14} /> 關於我們
                  </Link>
                </li>
                {/* 這是你要新增的：電腦套餐 */}
                <li>
                  <Link href="/packages" className="flex items-center gap-1 text-cyan-400 border-b border-cyan-400/50 pb-0.5 hover:text-cyan-300 transition">
                    ■ 電腦套餐
                  </Link>
                </li>

                <li>
                  <Link href="/news" className="flex items-center gap-1 hover:text-cyan-400 transition">
                    <Newspaper size={14} /> 最新資訊
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="flex items-center gap-1 hover:text-blue-400 transition">
                    <ShieldCheck size={14} /> 保固條件
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="flex items-center gap-1 hover:text-orange-400 transition">
                    <RefreshCcw size={14} /> 退換貨須知
                  </Link>
                </li>
              </ul>

              {/* 右側 LINE 按鈕 */}
              <Link 
                href="https://lin.ee/rELcEE2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#06C755] hover:bg-[#05b34c] text-white px-5 py-2 rounded-full text-xs font-black flex items-center gap-2 transition shadow-lg shadow-[#06C755]/20"
              >
                ● 聯絡我們
              </Link>
            </div>
          </div>
        </nav>

        {/* 主要內容填充 */}
        <main className="pt-16 min-h-screen relative overflow-x-hidden">
          {children}
        </main>

        {/* 唯一頁尾 - 修正重複問題 */}
        <footer className="bg-black py-20 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            <h2 className="text-3xl font-black tracking-[0.3em] uppercase">
              托尼購商行
            </h2>
            <p className="text-cyan-500 font-bold tracking-[0.2em] text-sm">
              JC 電腦組裝 / 訂製
            </p>
            <div className="pt-10">
              <p className="text-[10px] text-slate-600 font-medium tracking-[0.4em] italic uppercase">
                AI PC MASTER BUREAU © 2024 - 2025
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
