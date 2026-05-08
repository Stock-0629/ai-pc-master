"use client";
import React from "react";
import { RefreshCcw, AlertCircle } from "lucide-react";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 border-l-4 border-orange-500 pl-6">
          <h1 className="text-4xl font-black">退換貨須知</h1>
          <p className="text-slate-400 mt-2 italic font-bold text-sm uppercase tracking-widest">Refund Policy</p>
        </div>
        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-orange-400">
              <RefreshCcw size={24} />
              <h2 className="text-xl font-black">客製化商品說明</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              依據消保法規定，電腦組裝屬於「客製化給付」商品，不適用七天無條件退貨。
              若硬體於收貨七天內發生非人為故障，我們提供全機換新。
            </p>
          </section>
          <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20 flex items-start gap-3">
            <AlertCircle className="text-red-400 shrink-0" size={20} />
            <p className="text-xs text-slate-500 leading-relaxed">
              請務必錄影開箱。退換貨需保留完整原廠包裝盒，人為損壞恕不處理。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
