import Link from "next/link";
import { Activity } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <Activity className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold tracking-tight">TradeLog</span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/overview" className="text-gray-400 hover:text-white transition-colors">
            Overview
          </Link>
          <Link href="/trade-input" className="text-gray-400 hover:text-white transition-colors">
            Trade Input
          </Link>
          <Link href="/summary" className="text-gray-400 hover:text-white transition-colors">
            Summary
          </Link>
        </nav>
        
        {/* Action */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
