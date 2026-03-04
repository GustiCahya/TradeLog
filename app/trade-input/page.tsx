"use client";

import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TradeInputPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // In a real app, you would redirect or show success toast here.
      alert("Trade logged successfully! (Mock)");
    }, 1000);
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto w-full px-6 pt-32 pb-24">
      <Link href="/overview" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
      
      <h1 className="text-3xl font-bold tracking-tight mb-2">Log New Trade</h1>
      <p className="text-gray-400 mb-10">Enter the details of your latest position. Accuracy is key to good analytics.</p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Asset Symbol */}
            <div className="space-y-2">
              <label htmlFor="symbol" className="block text-sm font-medium text-gray-300">
                Asset Symbol
              </label>
              <input 
                id="symbol"
                type="text" 
                required
                placeholder="e.g. BTC/USD, AAPL" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Trade Type */}
            <div className="space-y-2">
              <label htmlFor="type" className="block text-sm font-medium text-gray-300">
                Position Type
              </label>
              <select 
                id="type"
                required
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
              >
                <option value="LONG" className="bg-gray-900">Long</option>
                <option value="SHORT" className="bg-gray-900">Short</option>
              </select>
            </div>

            {/* Entry Price */}
            <div className="space-y-2">
              <label htmlFor="entryPrice" className="block text-sm font-medium text-gray-300">
                Entry Price
              </label>
              <input 
                id="entryPrice"
                type="number" 
                step="any"
                required
                placeholder="0.00" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Exit Price */}
            <div className="space-y-2">
              <label htmlFor="exitPrice" className="block text-sm font-medium text-gray-300">
                Exit Price
              </label>
              <input 
                id="exitPrice"
                type="number" 
                step="any"
                placeholder="0.00" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">
                Position Size / Quantity
              </label>
              <input 
                id="quantity"
                type="number" 
                step="any"
                required
                placeholder="Number of shares/contracts" 
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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
                className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all [&::-webkit-calendar-picker-indicator]:filter-invert"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300">
              Trade Notes & Rationale
            </label>
            <textarea 
              id="notes"
              rows={4}
              placeholder="Why did you take this trade? Any mistakes?" 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y"
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
