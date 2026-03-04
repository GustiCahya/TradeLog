"use client";

import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TradeInputPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    pair: "",
    date: new Date().toISOString().slice(0, 16),
    session: "London",
    entryTF: "1m",
    direction: "LONG",
    pnl: "",
    rr: "",
    day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    emotion: "Neutral",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Trade logged successfully! (Mock)");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-6 pt-32 pb-24">
      <Link href="/overview" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
      
      <h1 className="text-3xl font-bold tracking-tight mb-2">Log New Trade</h1>
      <p className="text-gray-400 mb-10">Capture every detail of your trade, including your emotional state and RR.</p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pair */}
            <div className="space-y-2">
              <label htmlFor="pair" className="block text-sm font-medium text-gray-300">
                Pair / Symbol
              </label>
              <input 
                id="pair"
                type="text" 
                required
                value={formData.pair}
                onChange={handleChange}
                placeholder="e.g. BTC/USD" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                Date & Time
              </label>
              <input 
                id="date"
                type="datetime-local" 
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all [&::-webkit-calendar-picker-indicator]:filter-invert"
              />
            </div>

            {/* Day */}
            <div className="space-y-2">
              <label htmlFor="day" className="block text-sm font-medium text-gray-300">
                Day
              </label>
              <select 
                id="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
              >
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(d => (
                  <option key={d} value={d} className="bg-gray-900">{d}</option>
                ))}
              </select>
            </div>

            {/* Session */}
            <div className="space-y-2">
              <label htmlFor="session" className="block text-sm font-medium text-gray-300">
                Session
              </label>
              <select 
                id="session"
                value={formData.session}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
              >
                {["London", "New York", "Asian", "Overlap"].map(s => (
                  <option key={s} value={s} className="bg-gray-900">{s}</option>
                ))}
              </select>
            </div>

            {/* Entry TF */}
            <div className="space-y-2">
              <label htmlFor="entryTF" className="block text-sm font-medium text-gray-300">
                Entry TF
              </label>
              <input 
                id="entryTF"
                type="text" 
                value={formData.entryTF}
                onChange={handleChange}
                placeholder="e.g. 1m, 5m" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Direction */}
            <div className="space-y-2">
              <label htmlFor="direction" className="block text-sm font-medium text-gray-300">
                Direction
              </label>
              <select 
                id="direction"
                value={formData.direction}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
              >
                <option value="LONG" className="bg-gray-900 text-emerald-400">Long</option>
                <option value="SHORT" className="bg-gray-900 text-red-400">Short</option>
              </select>
            </div>

            {/* P/L */}
            <div className="space-y-2">
              <label htmlFor="pnl" className="block text-sm font-medium text-gray-300">
                Profit / Loss ($)
              </label>
              <input 
                id="pnl"
                type="number" 
                step="any"
                value={formData.pnl}
                onChange={handleChange}
                placeholder="0.00" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* RR */}
            <div className="space-y-2">
              <label htmlFor="rr" className="block text-sm font-medium text-gray-300">
                Risk-Reward (RR)
              </label>
              <input 
                id="rr"
                type="number" 
                step="0.1"
                value={formData.rr}
                onChange={handleChange}
                placeholder="e.g. 2.5" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            {/* Emotion */}
            <div className="space-y-2">
              <label htmlFor="emotion" className="block text-sm font-medium text-gray-300">
                Emotion
              </label>
              <select 
                id="emotion"
                value={formData.emotion}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
              >
                {["Neutral", "Confident", "Greedy", "Fearful", "Anxious", "Disciplined", "Frustrated"].map(e => (
                  <option key={e} value={e} className="bg-gray-900">{e}</option>
                ))}
              </select>
            </div>


          </div>

          {/* General Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300">
              General Notes & Reflection
            </label>
            <textarea 
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Reflect on the trade execution..." 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all resize-y"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 px-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Trade Record
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
