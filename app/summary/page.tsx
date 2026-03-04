"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Cell } from 'recharts';
import { ArrowLeft, Target, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

// Mock Data focused on RR and Psychological Performance
const rrBySession = [
  { name: 'London', avgRR: 2.8 },
  { name: 'New York', avgRR: 1.9 },
  { name: 'Asian', avgRR: 1.2 },
  { name: 'Overlap', avgRR: 3.5 },
];

const pnlCurve = [
  { day: 'Mon', pnl: 200 },
  { day: 'Tue', pnl: 650 },
  { day: 'Wed', pnl: 530 },
  { day: 'Thu', pnl: 1100 },
  { day: 'Fri', pnl: 1450 },
  { day: 'Sat', pnl: 1320 },
  { day: 'Sun', pnl: 1200 },
];

export default function SummaryPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-6 pt-32 pb-24">
      <Link href="/overview" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Link>
      
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2 text-white">Performance Analytics</h1>
        <p className="text-gray-400">Trading is 10% strategy and 90% psychology. Analyze your edge.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Cumulative PnL Curve */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold text-lg text-white">Cumulative Performance</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pnlCurve} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="pnl" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                <CartesianGrid stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="day" stroke="#4b5563" axisLine={false} tickLine={false} />
                <YAxis stroke="#4b5563" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff10', borderRadius: '12px' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average RR by Session Bar Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
           <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-lg text-white">Average RR by Session</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rrBySession} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#4b5563" axisLine={false} tickLine={false} />
                <YAxis stroke="#4b5563" axisLine={false} tickLine={false} tickFormatter={(value) => `${value}R`} />
                <Tooltip 
                  cursor={{ fill: '#ffffff05' }}
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff10', borderRadius: '12px' }}
                />
                <Bar dataKey="avgRR" radius={[6, 6, 0, 0]}>
                  {rrBySession.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.avgRR > 2 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Psychological Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-sm text-gray-400 mb-2">Most Frequent Emotion</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">Disciplined</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">42% of trades</span>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-sm text-gray-400 mb-2">Worst Session (by RR)</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">Asian</span>
            <span className="text-xs px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">1.2R Avg</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
             <AlertTriangle className="w-6 h-6 text-blue-400" />
           </div>
           <div>
             <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Insight</p>
             <p className="text-sm text-gray-300">Stick to London/NY for higher RR setups.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
