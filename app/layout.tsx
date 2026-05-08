import "./globals.css"; // 確保有引入全局樣式

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-black text-white">
        {/* 導航欄導航欄 (NAV) */}
        <nav className="p-4 border-b border-white/10">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="font-bold">AI PC MASTER</div>
            <div className="flex gap-4">
              <a href="/refund" className="text-slate-400 hover:text-white transition">退換貨須知</a>
              <a 
                href="https://lin.ee/rELcEE2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#06C755] text-white px-4 py-2 rounded-full text-sm font-bold"
              >
                LINE 聯繫我們
              </a>
            </div>
          </div>
        </nav>

        {/* 主要內容區 */}
        <main className="relative overflow-x-hidden min-h-screen">
          {children}
        </main>

        {/* 頁尾頁尾 (FOOTER) - 只在這裡定義一次 */}
        <footer className="text-center py-16 border-t border-white/10 bg-black">
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-[0.2em] uppercase">
              托尼購商行
            </h2>
            <p className="text-sm md:text-lg font-bold tracking-widest text-cyan-500">
              JC 電腦組裝 / 訂製
            </p>
            <div className="pt-8">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-500 italic">
                AI PC MASTER BUREAU © 2024 -
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
