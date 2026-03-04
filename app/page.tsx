import Link from "next/link";
import { ArrowRight, BarChart3, Target, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 relative overflow-hidden bg-black text-white pt-20">
      {/* Immersive background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            TradeLog is now in Beta
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Master your edge with absolute clarity.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            The most beautiful and powerful trading journal designed to help you analyze your trades, uncover hidden patterns, and scale your profitability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register" 
              className="h-12 w-full sm:w-auto px-8 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-all hover:scale-105"
            >
              Start Journaling <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/overview" 
              className="h-12 w-full sm:w-auto px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deep Analytics</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Automatically calculate your win rate, profit factor, and average R-multiple to understand your true performance.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision Input</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Log entries, exits, position sizes, and custom notes in seconds with our streamlined trade input form.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Storage</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Your data is securely stored and backed up on Neon PostgreSQL, ensuring your trading history is always safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}