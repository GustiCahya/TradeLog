"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Charts
const monthlyPnL = [
  { name: 'Jan', pnl: -120 },
  { name: 'Feb', pnl: 400 },
  { name: 'Mar', pnl: 1050 },
  { name: 'Apr', pnl: 850 },
  { name: 'May', pnl: 1400 },
  { name: 'Jun', pnl: 950 },
  { name: 'Jul', pnl: 2200 },
];

const equityCurve = [
  { date: 'Mon', equity: 10000 },
  { date: 'Tue', equity: 10200 },
  { date: 'Wed', equity: 10050 },
  { date: 'Thu', equity: 10800 },
  { date: 'Fri', equity: 11200 },
  { date: 'Sat', equity: 10900 },
  { date: 'Sun', equity: 11500 },
];

export default function SummaryPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 pt-32 pb-24">
      <Link href="/overview" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
      
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Performance Summary</h1>
        <p className="text-gray-400">Deep dive into your analytics and discover your trading edge.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Equity Curve Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-6 text-white">Equity Curve (7 Days)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={equityCurve} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="equity" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                <CartesianGrid stroke="#ffffff10" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#ffffff20', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly PnL Bar Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-semibold text-lg mb-6 text-white">Monthly Net PnL</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPnL} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#ffffff10" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  cursor={{ fill: '#ffffff05' }}
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#ffffff20', borderRadius: '8px', color: '#fff' }}
                />
                <Bar 
                  dataKey="pnl" 
                  radius={[4, 4, 0, 0]}
                  fill="#3b82f6" // Fallback
                  shape={(props: any) => {
                    const { x, y, width, height, payload } = props;
                    return (
                      <rect 
                        x={x} 
                        y={payload.pnl < 0 ? y : y} 
                        width={width} 
                        height={Math.abs(height)} 
                        fill={payload.pnl >= 0 ? '#10b981' : '#ef4444'} 
                        rx={4} 
                        ry={4} 
                      />
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Advanced Stats */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h3 className="font-semibold text-lg mb-6 text-white">Advanced Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-400 mb-1">Profit Factor</p>
            <p className="text-2xl font-bold text-white">2.4</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Max Drawdown</p>
            <p className="text-2xl font-bold text-red-400">14.2%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Average Win</p>
            <p className="text-2xl font-bold text-emerald-400">$450.00</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Average Loss</p>
            <p className="text-2xl font-bold text-red-400">-$180.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
