import React from 'react';
// 這裡必須包含 ShieldCheck
import { Cpu, Layout, HardDrive, Zap, MousePointer2, Info, ShieldCheck } from '1

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 頁面標題區 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            精選電腦套餐 <span className="text-cyan-500">PACKAGES</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            托尼購商行嚴選硬體配置，拒絕次等零件。所有報價參考欣亞(Sinya)即時系統，
            讓您每一分預算都花在效能刀口上。
          </p>
        </div>

        {/* 套餐卡片開始 - 方案 A */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group">
          <div className="p-8 md:p-12">
            {/* 卡片標題 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold mb-3">
                  方案 A：極致辦公與影音
                </div>
                <h2 className="text-3xl font-black">15代 / 14代 文書首選機</h2>
              </div>
              <div className="text-right">
                <div className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">預估總計 (不含機殼)</div>
                <div className="text-4xl font-black text-cyan-500">$17,080 <span className="text-sm text-slate-400 font-normal">NTD</span></div>
              </div>
            </div>

            {/* 規格清單 */}
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { icon: Cpu, label: '處理器 CPU', val: 'Intel Core i3-14100', price: '$4,400', note: '內建最強文書內顯' },
                { icon: Layout, label: '主機板 MB', val: '華碩 TUF GAMING B760-PLUS WIFI', price: '$5,490', note: '內建 Wi-Fi 6 / 頂級供電' },
                { icon: Zap, label: '記憶體 RAM', val: '金士頓 16GB DDR5-5600', price: '$1,650', note: '高速新世代規格' },
                { icon: HardDrive, label: '硬碟 SSD', val: '金士頓 KC3000 1TB Gen4', price: '$2,850', note: '讀取 7000MB/s 旗艦款' },
                { icon: Zap, label: '電源 PSU', val: '海韻 Focus GX-550 (金牌)', price: '$2,690', note: '10 年保固 穩定之選' },
                { icon: MousePointer2, label: '機殼 CASE', val: '[ 自行選購 ]', price: '需另計', note: '依您的視覺喜好決定', highlight: true },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black rounded-lg text-cyan-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                      <div className={`font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.val}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 md:mt-0 ml-12 md:ml-0">
                    <div className="text-xs text-slate-500 italic hidden lg:block">{item.note}</div>
                    <div className="font-mono text-cyan-500/80 font-bold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 托尼觀點 */}
            <div className="p-6 bg-cyan-500/5 rounded-2xl border border-cyan-500/10">
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <Info size={18} />
                <span className="font-black text-sm uppercase tracking-widest">托尼購商行：專業點評</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                這台機器不只是「能動」，更是追求「穩定」的極致。我們堅持選用 <span className="text-white font-bold">B760 等級主機板</span> 與 <span className="text-white font-bold">Gen4 旗艦 SSD</span>，確保在處理大型 Office 檔案或 4K 影音切換時，反應速度如同手機般順暢。這不是最便宜的清單，但絕對是未來五年最讓您省心的配置。
              </p>
            </div>
          </div>
        </div>
                {/* 套餐卡片開始 - 方案 B */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group mt-12">
          <div className="p-8 md:p-12">
            {/* 卡片標題 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold mb-3">
                  方案 B：主流電競與多媒體創作
                </div>
                <h2 className="text-3xl font-black">Intel Core i5 效能平衡機</h2>
              </div>
              <div className="text-right">
                <div className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">預估總計 (不含機殼)</div>
                <div className="text-4xl font-black text-cyan-500">$29,680 <span className="text-sm text-slate-400 font-normal">NTD</span></div>
              </div>
            </div>

            {/* 規格清單 */}
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { icon: Cpu, label: '處理器 CPU', val: 'Intel Core i5-14500 【14核/20緒】', price: '$7,800', note: '多工處理、遊戲實況首選' },
                { icon: Layout, label: '主機板 MB', val: '華碩 TUF GAMING B760-PLUS WIFI', price: '$5,490', note: '高階供電、擴充性極佳' },
                { icon: Zap, label: '記憶體 RAM', val: '金士頓 32GB(16G*2) DDR5-6000', price: '$3,350', note: '雙通道大容量，創作不卡頓' },
                { icon: HardDrive, label: '顯示卡 GPU', val: '華碩 DUAL-RTX4060-O8G', price: '$9,490', note: '支援 DLSS 3，流暢遊玩 3D 大作' },
                { icon: HardDrive, label: '硬碟 SSD', val: '金士頓 KC3000 1TB Gen4', price: '$2,850', note: '秒速開機與檔案載入' },
                { icon: Zap, label: '電源 PSU', val: '海韻 Focus GX-650 (ATX 3.0)', price: '$3,390', note: '支援最新顯卡供電規範' },
                { icon: MousePointer2, label: '機殼 CASE', val: '[ 自行選購 ]', price: '需另計', note: '建議選用散熱更佳的 ATX 機殼', highlight: true },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black rounded-lg text-cyan-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                      <div className={`font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.val}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 md:mt-0 ml-12 md:ml-0">
                    <div className="text-xs text-slate-500 italic hidden lg:block">{item.note}</div>
                    <div className="font-mono text-cyan-500/80 font-bold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 托尼觀點 */}
            <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <Info size={18} />
                <span className="font-black text-sm uppercase tracking-widest">托尼購商行：專業點評</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                這是目前性價比最高的「全能型」配置。採用 <span className="text-white font-bold">i5-14500 搭配 32GB 大容量記憶體</span>，不論是剪輯影片、開啟數十個網頁分頁，還是遊玩如《黑神話：悟空》等 3D 大作，都能輕鬆勝任。我們特別選用 <span className="text-white font-bold">ATX 3.0 規範電源</span>，不僅供電更穩定，也為未來升級更強大的顯示卡做好了準備。
              </p>
            </div>
          </div>
        </div>
        {/* 套餐卡片開始 - 方案 C */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group mt-12">
          <div className="p-8 md:p-12">
            {/* 卡片標題 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-bold mb-3">
                  方案 C：極致效能與專業工作站
                </div>
                <h2 className="text-3xl font-black">Core Ultra 7 / i7 旗艦標配</h2>
              </div>
              <div className="text-right">
                <div className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">預估總計 (不含機殼)</div>
                <div className="text-4xl font-black text-cyan-500">$51,800 <span className="text-sm text-slate-400 font-normal">NTD</span></div>
              </div>
            </div>

            {/* 規格清單 */}
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { icon: Cpu, label: '處理器 CPU', val: 'Intel Core Ultra 7 265K 【20核/20緒】', price: '$14,500', note: '最新 15 代架構，運算效能巔峰' },
                { icon: Zap, label: '散熱器 Cooler', val: '全漢 FSP MP7 Black (雙塔/6導管)', price: '$1,490', note: '解熱能力強，確保長效不降頻' },
                { icon: Layout, label: '主機板 MB', val: '華碩 TUF GAMING Z890-PLUS WIFI', price: '$9,990', note: '旗艦級 Z 系列，支援次世代擴充' },
                { icon: Zap, label: '記憶體 RAM', val: '金士頓 32GB(16G*2) DDR5-6400 (熾白/RGB)', price: '$3,850', note: '高頻率低延遲，頂級傳輸效率' },
                { icon: HardDrive, label: '顯示卡 GPU', val: '華碩 DUAL-RTX4070-O12G', price: '$18,900', note: '2K/4K 遊戲全開、專業渲染神器' },
                { icon: HardDrive, label: '硬碟 SSD', val: '金士頓 KC3000 2TB Gen4 (雙入組優先)', price: '$3,070', note: '2TB 大容量，系統與素材秒讀取' },
                { icon: Zap, label: '電源 PSU', val: '海韻 Focus GX-850 (ATX 3.1 / 白金牌)', price: '$4,690', note: '足瓦 850W，十年保固旗艦電源' },
                { icon: MousePointer2, label: '機殼 CASE', val: '[ 自行選購 ]', price: '需另計', note: '強烈建議選用通風優良之大型 ATX 機殼', highlight: true },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black rounded-lg text-cyan-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                      <div className={`font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.val}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 md:mt-0 ml-12 md:ml-0">
                    <div className="text-xs text-slate-500 italic hidden lg:block">{item.note}</div>
                    <div className="font-mono text-cyan-500/80 font-bold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 托尼觀點 */}
            <div className="p-6 bg-purple-500/5 rounded-2xl border border-purple-500/10">
              <div className="flex items-center gap-2 mb-3 text-purple-400">
                <Info size={18} />
                <span className="font-black text-sm uppercase tracking-widest">托尼購商行：專業點評</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                這是為追求「絕對效能」的玩家與工作者打造。我們選用了最新 <span className="text-white font-bold">Intel Core Ultra 7 265K</span>，搭配 <span className="text-white font-bold">Z890 旗艦主機板</span>，這不只是為了當下的順暢，更是為了未來 5-10 年的升級彈性。如果您是從事建築、水電、室內設計等需要大型 3D 渲染的專業人士，這套配置能大幅縮短您的輸出時間。若預算充足，建議記憶體可直接攻頂至 <span className="text-white font-bold">64GB</span>，讓多工處理毫無壓力。
              </p>
            </div>
          </div>
        </div>
        {/* 套餐卡片開始 - 方案 D */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group mt-12 mb-20">
          <div className="p-8 md:p-12">
            {/* 卡片標題 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-bold mb-3">
                  方案 D：究極效能、AI 運算與頂級創作者
                </div>
                <h2 className="text-3xl font-black">Core Ultra 9 / i9 巔峰配置</h2>
              </div>
              <div className="text-right">
                <div className="text-slate-500 text-sm mb-1 uppercase tracking-widest font-bold">預估總計 (不含機殼)</div>
                <div className="text-4xl font-black text-cyan-500">$78,600 <span className="text-sm text-slate-400 font-normal">NTD</span></div>
              </div>
            </div>

            {/* 規格清單 */}
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                { icon: Cpu, label: '處理器 CPU', val: 'Intel Core Ultra 9 285K 【24核/24緒】', price: '$19,500', note: 'AI 加速引擎，消費級處理器頂點' },
                { icon: Zap, label: '散熱器 Cooler', val: '貓頭鷹 NH-D15 G2 旗艦級散熱器', price: '$5,490', note: '空冷之王，完美壓制極限高溫' },
                { icon: Layout, label: '主機板 MB', val: '華碩 TUF GAMING Z890-PRO WIFI', price: '$11,990', note: '頂規供電與極致擴充性' },
                { icon: Zap, label: '記憶體 RAM', val: '金士頓 64GB(32G*2) DDR5-6000', price: '$7,250', note: '超大容量，應對複雜渲染與多工' },
                { icon: HardDrive, label: '顯示卡 GPU', val: '華碩 TUF-RTX4070Ti-SUPER-O16G', price: '$28,900', note: '16G 大顯存，4K 遊戲與 AI 運算神器' },
                { icon: HardDrive, label: '硬碟 SSD', val: '金士頓 KC3000 2TB Gen4 (高讀寫款)', price: '$5,650', note: '頂級讀寫，大型素材瞬間加載' },
                { icon: Zap, label: '電源 PSU', val: '海韻 Focus GX-1000 (ATX 3.1 / 金牌)', price: '$5,490', note: '千瓦大功耗，提供最穩定的電力護航' },
                { icon: MousePointer2, label: '機殼 CASE', val: '[ 自行選購 ]', price: '需另計', note: '強烈建議選用高階全塔式機殼', highlight: true },
              ].map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black rounded-lg text-cyan-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</div>
                      <div className={`font-bold ${item.highlight ? 'text-cyan-400' : 'text-white'}`}>{item.val}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-2 md:mt-0 ml-12 md:ml-0">
                    <div className="text-xs text-slate-500 italic hidden lg:block">{item.note}</div>
                    <div className="font-mono text-cyan-500/80 font-bold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 托尼觀點 */}
            <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10">
              <div className="flex items-center gap-2 mb-3 text-red-400">
                <Info size={18} />
                <span className="font-black text-sm uppercase tracking-widest">托尼購商行：頂級點評</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                這是真正的「效能怪獸」。為了壓制 <span className="text-white font-bold">Ultra 9 285K</span> 的強大功耗，我們選用了空冷之王 <span className="text-white font-bold">貓頭鷹 NH-D15 G2</span>，讓您在長時間進行 4K 影片渲染或高強度 AI 模型訓練時，依然能維持冷靜且極致安靜。配置 <span className="text-white font-bold">1000W 大電源</span> 與 <span className="text-white font-bold">64GB 大記憶體</span>，這台主機不只是為了現在，更是為了應對未來十年的軟體需求。對於需要處理超大型 3D 專案或 8K 素材的專家來說，這就是終極解決方案。
              </p>
            </div>
          </div>
        </div>
                {/* 服務聲明區塊 */}
        <div className="mt-20 border-t border-white/10 pt-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* 左側：核心聲明 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-cyan-500 block"></span>
                  組裝說明與規範
                </h3>
                <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-cyan-500">●</span>
                    以上規格與報價僅供參考，實際金額以當日市場行情為準（不含正版軟體）。
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-500">●</span>
                    新機一律建議安裝 <span className="text-white font-bold">Windows 11</span> 以發揮硬體完整效能。
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-500">●</span>
                    若需更換特定機殼或零件，歡迎直接告知型號，我們將為您重新評估相容性。
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-2xl">
                <p className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
                  ⚠️ 關於價格與價值
                </p>
                <p className="text-slate-400 text-sm">
                  我的報價或許不是市場最低，因為每一台主機都包含了「專業組裝費」。
                  我們不拚價格戰，我們拚的是對每一顆螺絲的堅持與售後服務的溫度。
                </p>
              </div>
            </div>

            {/* 右側：品牌承諾 */}
            <div className="bg-gradient-to-br from-slate-900 to-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={120} />
              </div>
              
              <h3 className="text-2xl font-black mb-6">我們提供的，不只是電腦</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                從前期的 <span className="text-white font-bold">需求諮詢、精準選件</span>，到中期的 <span className="text-white font-bold">極致理線、系統優化</span>，
                以及後期的 <span className="text-white font-bold">保固代維修</span>，AI PC MASTER 提供的是一站式的完整解決方案。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
                    ✓
                  </div>
                  <span className="text-sm font-bold">一鍵還原備份系統</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
                    ✓
                  </div>
                  <span className="text-sm font-bold">24小時燒機壓力測試</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
                    ✓
                  </div>
                  <span className="text-sm font-bold">終身技術遠端諮詢</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 italic text-slate-500 text-xs text-center">
                「如果您只追求最低價，我可能不是最適合您的人；但如果您追求的是安心與品質，歡迎與我聯繫。」
              </div>
            </div>

          </div>
        </div>



        {/* 頁尾提醒 */}
        <p className="text-center mt-12 text-slate-600 text-xs font-bold uppercase tracking-widest">
          ※ 實際報價以報價系統為準 | 組裝工資另計
        </p>
      </div>
    </div>
  );
}
