import React from 'react';

export default function AboutPage() {
  const advantages = [
    { title: "小型工作室", desc: "提供最具彈性與溫度的個人化服務。" },
    { title: "專注維修", desc: "深耕技術領域，精準解決各種硬體疑難雜症。" },
    { title: "遠端服務", desc: "打破地理限制，即時提供線上技術支援與諮詢。" },
    { title: "售後服務", desc: "完善的保固追蹤，確保您的設備長期穩定運作。" },
    { title: "海外代購", desc: "可提供代購海外特殊配件搭配，打造獨特規格。" },
    { title: "嚴格測試", desc: "出貨前提供完整燒機穩定性測試，品質絕不妥協。" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-12 border-b border-cyan-400 pb-4">
          About Us <span className="text-cyan-400 text-lg ml-2">關於我們</span>
        </h1>

        <section className="mb-16">
          <p className="text-slate-400 leading-relaxed text-lg mb-8">
            我們致力於為每一位客戶提供最專業的電腦解決方案。
            從零件挑選到最終測試，每一個環節都由專業人員親自把關。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors">
                <h3 className="text-cyan-400 font-bold mb-2">● {item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 為了符合綠界驗證，建議下方同時補上商店資訊 */}
        <footer className="mt-20 pt-8 border-t border-white/10 text-slate-500 text-xs">
          <p>托尼購商行 | 統一編號：80051976</p>
          <p>地址：彰化縣花壇鄉中正路105巷7號</p>
        </footer>
      </div>
    </main>
  );
}