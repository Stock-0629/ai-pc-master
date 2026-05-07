import json

def generate_pc_final_data():
    print("🤖 AI 正在同步資料庫：加入【為什麼選擇我們】的特殊優勢數據...")
    
    # 這裡加入您要求的特殊性內容
    advantages = [
        {
            "id": "adv-1",
            "title": "海外特殊風扇代購",
            "desc": "專攻北美 Amazon 或京東限定的高靜壓、極限 RGB 風扇。提供台灣市面上買不到的特殊尺寸與散熱性能，打破常規配置。"
        },
        {
            "id": "adv-2",
            "title": "專屬機殼圖繪/噴繪",
            "desc": "我們提供客製化機殼圖繪服務。無論是動漫主題、極簡線條或是雷雕刻繪，JC 職人親手為您的主機注入靈魂。"
        },
        {
            "id": "adv-3",
            "title": "全球特別版硬體",
            "desc": "獨家導入台灣代理商未引進的特殊顏色版本 (如櫻花粉、極地銀) 或聯名限量零件，讓您的主機具備稀缺的收藏價值。"
        }
    ]

    # 保留工單、流程與 Blog
    order_database = [{"id": "AI20260501", "customer_name": "Kenneth 先生", "status": "【燒機測試中】", "last_update": "2026-05-08"}]
    
    business_info = {
        "advantages": advantages,
        "workflow": [
            {"step": "01", "title": "諮詢設備", "desc": "溝通用途與預算，選擇材料。"},
            {"step": "02", "title": "方案定案", "desc": "確定材料清單與最終報價。"},
            {"step": "03", "title": "付款完成", "desc": "支援綠界、刷卡、現金。"},
            {"step": "04", "title": "即時追蹤", "desc": "隨時回報零件到貨狀況。"},
            {"step": "05", "title": "職人組裝", "desc": "精密理線，提供縮時影片。"},
            {"step": "06", "title": "順跑測試", "desc": "嚴苛燒機、穩定度確認。"},
            {"step": "07", "title": "完美交機", "desc": "依照預定方式完成交付。"}
        ],
        "orders": order_database
    }

    data = {"posts": [], "info": business_info}
    with open('public/data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print("✅ 數據同步完成！")

if __name__ == "__main__":
    generate_pc_final_data()
