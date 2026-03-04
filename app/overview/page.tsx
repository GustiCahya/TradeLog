import { Activity, ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";

// Mock Data
const stats = [
  { name: "Total PnL", value: "+$4,250.00", change: "+12.5%", positive: true, icon: DollarSign },
  { name: "Win Rate", value: "68.5%", change: "+2.1%", positive: true, icon: TrendingUp },
  { name: "Total Trades", value: "142", change: "+12 this week", positive: true, icon: Activity },
  { name: "Avg R-Multiple", value: "1.8R", change: "-0.2R", positive: false, icon: ArrowUpRight },
];

const recentTrades = [
  { id: 1, symbol: "BTC/USD", type: "LONG", entry: "64200", exit: "65100", pnl: "+$450.00", date: "2023-10-24", positive: true },
  { id: 2, symbol: "AAPL", type: "SHORT", entry: "175.50", exit: "173.20", pnl: "+$230.00", date: "2023-10-23", positive: true },
  { id: 3, symbol: "ETH/USD", type: "LONG", entry: "3450", exit: "3410", pnl: "-$120.00", date: "2023-10-22", positive: false },
  { id: 4, symbol: "TSLA", type: "LONG", entry: "210.00", exit: "225.50", pnl: "+$775.00", date: "2023-10-21", positive: true },
  { id: 5, symbol: "NVDA", type: "SHORT", entry: "450.00", exit: "465.00", pnl: "-$300.00", date: "2023-10-20", positive: false },
];

export default function OverviewPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 pt-32 pb-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back. Here is your trading performance.</p>
        </div>
        <Link 
          href="/trade-input" 
          className="h-10 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center transition-colors"
        >
          Log New Trade
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-400">{stat.name}</p>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-bold">{stat.value}</h2>
                <span className={`text-xs font-medium flex items-center ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Trades Table */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <h3 className="font-medium text-lg">Recent Trades</h3>
          <Link href="/summary" className="text-sm text-blue-400 hover:text-blue-300">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 bg-white/5 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Asset</th>
                <th className="px-6 py-4 font-medium">Type</th>
                <th className="px-6 py-4 font-medium">Entry</th>
                <th className="px-6 py-4 font-medium">Exit</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-right">PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentTrades.map((trade) => (
                <tr key={trade.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{trade.symbol}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${trade.type === 'LONG' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                      {trade.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{trade.entry}</td>
                  <td className="px-6 py-4 text-gray-300">{trade.exit}</td>
                  <td className="px-6 py-4 text-gray-400">{trade.date}</td>
                  <td className={`px-6 py-4 text-right font-medium ${trade.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {trade.pnl}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
