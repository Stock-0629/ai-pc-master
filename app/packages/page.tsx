import React from 'react';
import { ShieldCheck, Cpu, Layout, HardDrive, Zap, MousePointer2, Info } from 'lucide-react';

export default function PackagesPage() {
  const packages = [
    { icon: Cpu, label: "處理器 CPU", val: "Intel Core i5-14100", price: "$4,400", note: "內置強大顯示晶片" },
    { icon: Layout, label: "主機板 MB", val: "華碩 TUF GAMING B760-PLUS WIFI", price: "$5,490", note: "穩定且具有 Wi-Fi 6 功能" },
    { icon: Zap, label: "記憶體 RAM", val: "威剛 16GB DDR5-5600", price: "$1,600", note: "高效能運行環境" },
    { icon: HardDrive, label: "硬碟 SSD", val: "威剛 XPG S70 BLADE 1TB Gen4", price: "$2,650", note: "讀取速 7000MB/s" },
    { icon: Info, label: "電源 PSU", val: "海韻 Focus GX-550 (550W)", price: "$2,690", note: "10 年保固 穩定之選" }
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            硬體配置 <span className="text-cyan-500">PACKAGES</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            我們精選高效能零件，確保您的 AI 算力穩定發揮。
            每一份清單皆經過壓力測試。
          </p>
        </div>

        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <span className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-widest">
                入門工作站
              </span>
              <h2 className="text-3xl font-black">AI 入門推薦配置</h2>
              <div className="text-right">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">估計總價 (不含顯示卡)</div>
                <div className="text-4xl font-black text-cyan-500">$17,830 <span className="text-sm text-slate-400 font-normal">TWD</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {packages.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">{item.label}</div>
                      <div className="font-medium">{item.val}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-cyan-500">{item.price}</div>
                    <div className="text-[10px] text-slate-500">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
