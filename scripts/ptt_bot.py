import json

def generate_pc_final_data():
    print("🤖 AI 正在同步資料庫：加入【新店開業優惠】...")
    
    # 1. 豐富的 Blog 內容 (加入開業促銷)
    blog_posts = [
        {
            "id": "promo-01",
            "source": "官方公告 / 優惠",
            "title": "🔥 新店開業盛典：前三單組裝費僅需 NT$ 500！",
            "summary": "為慶祝 AI PC MASTER 官方站點正式上線，首三位下單客戶可享超狂組裝優惠，直接省下 $1,000...",
            "content": """
                【AI PC MASTER 品牌官網正式營運】
                
                感謝各位硬體玩家的關注，為了回饋首批支持我們的朋友，我們推出「開業搶先體驗單」：
                
                🎯 優惠內容：
                不論預算高低，凡前三位完成下單並付清之客戶，專業職人組裝費用由 NT$ 1,500 直接優待至 NT$ 500！
                
                🎯 服務不縮水：
                1. 同樣享有精密理線服務。
                2. 提供完整組裝縮時影片紀錄。
                3. 同樣通過 48H 穩定性燒機測試。
                
                目前名額倒數中，請立即點擊右下角 LINE 聯絡職人確認名額！
            """,
            "date": "2026-05-08"
        },
        {
            "id": "1",
            "source": "極客灣 Geekerwan",
            "title": "AMD Ryzen 7 9800X3D 深度解析：2026 遊戲之王",
            "summary": "Reddit 網友一致公認，第二代 3D V-Cache 技術徹底解決了積熱問題...",
            "content": "根據全球論壇數據，9800X3D 是目前唯一不需要考慮升級的 CPU 選擇。",
            "date": "2026-05-08"
        }
    ]

    # 2. 業務流程與其他數據
    business_info = {
        "advantages": [
            {"title": "海外特殊風扇代購", "desc": "專攻 Amazon/京東限定高靜壓風扇。"},
            {"title": "專屬機殼圖繪/噴繪", "desc": "提供客製化機殼噴繪，賦予主機靈魂。"},
            {"title": "全球特別版硬體", "desc": "獨家導入特殊色限量零件。"}
        ],
        "workflow": [
            {"step": "01", "title": "諮詢設備", "desc": "溝通用途與預算。"},
            {"step": "02", "title": "方案定案", "desc": "確定清單與報價。"},
            {"step": "03", "title": "付款完成", "desc": "支援多種支付方式。"},
            {"step": "04", "title": "即時追蹤", "desc": "掌握零件與裝機進度。"},
            {"step": "05", "title": "職人組裝", "desc": "精密組裝，提供縮時影片。"},
            {"step": "06", "title": "順跑測試", "desc": "48H 穩定度燒機。"},
            {"step": "07", "title": "完美交機", "desc": "享有一年軟體遠端諮詢。"}
        ],
        "orders": [{"id": "AI20260501", "customer_name": "Kenneth 先生", "status": "【燒機測試中】", "last_update": "2026-05-08"}]
    }

    data = {"posts": blog_posts, "info": business_info}
    with open('public/data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print("✅ data.json 更新成功！包含開業優惠。")

if __name__ == "__main__":
    generate_pc_final_data()
