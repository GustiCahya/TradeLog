import { Activity, ArrowUpRight, TrendingUp, DollarSign, Brain } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/PageAnimate";
import { auth } from "@/auth";
import { getOverviewStats } from "@/lib/services/trade.service";

export default async function OverviewPage() {
  const session = await auth();
  console.log("getOverviewStats called", session?.user);

  const data = await getOverviewStats(session?.user?.id || "");

  const stats = [
    { name: "Total PnL", value: data.totalPnl >= 0 ? `+$${data.totalPnl.toFixed(2)}` : `-$${Math.abs(data.totalPnl).toFixed(2)}`, positive: data.totalPnl >= 0, icon: DollarSign },
    { name: "Win Rate", value: `${data.winRate}%`, positive: parseFloat(data.winRate as string) >= 50, icon: TrendingUp },
    { name: "Total Trades", value: data.totalTrades.toString(), positive: true, icon: Activity },
    { name: "Avg RR", value: `${data.avgRr}R`, positive: parseFloat(data.avgRr as string) > 1, icon: ArrowUpRight },
  ];

  const recentTrades = data.recentTrades;
  return (
    <div className="flex-1 max-w-full mx-auto w-full px-6 pt-32 pb-24">
      <FadeIn delay={0.1}>
        <div className="max-w-7xl mx-auto flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Dashboard</h1>
            <p className="text-gray-400">Welcome back. Here is your refined trading performance.</p>
          </div>
          <Link 
            href="/trade-input" 
            className="h-10 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center transition-colors"
          >
            Log New Trade
          </Link>
        </div>
      </FadeIn>

      {/* Stats Grid */}
      <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <StaggerItem key={stat.name}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-2xl font-bold text-white">{stat.value}</h2>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      {/* Extended Trade Table */}
      <FadeIn delay={0.5}>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <h3 className="font-medium text-lg text-white">Refined Trade History</h3>
            <Link href="/summary" className="text-sm text-blue-400 hover:text-blue-300">View Analytics</Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 bg-white/5 uppercase border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium">Date / Day</th>
                  <th className="px-6 py-4 font-medium">Pair</th>
                  <th className="px-6 py-4 font-medium">Session</th>
                  <th className="px-6 py-4 font-medium">TF</th>
                  <th className="px-6 py-4 font-medium">Dir</th>
                  <th className="px-6 py-4 font-medium">RR</th>
                  <th className="px-6 py-4 font-medium">Mindset</th>
                  <th className="px-6 py-4 font-medium text-right">PnL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentTrades.map((trade) => {
                  const isPositive = (trade.pnl || 0) > 0;
                  return (
                  <tr key={trade.id} className="hover:bg-white/[0.02] transition-all group">
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">{new Date(trade.date).toLocaleDateString()}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{trade.day}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-blue-400">{trade.pair}</td>
                    <td className="px-6 py-4">
                      <span className="text-gray-300">{trade.session}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-gray-400 border border-white/10">{trade.entryTF}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${trade.direction === 'LONG' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                        {trade.direction}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-mono font-bold ${Number(trade.rr) > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trade.rr}R
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                         <Brain className="w-3 h-3 text-purple-400" />
                         <span className="text-xs text-gray-400 italic">{trade.emotion}</span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-right font-bold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isPositive ? `+$${trade.pnl?.toFixed(2)}` : `-$${Math.abs(trade.pnl || 0).toFixed(2)}`}
                    </td>
                  </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
