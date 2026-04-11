import Link from "next/link";
import { ArrowRight, BarChart3, Target, ShieldCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/PageAnimate";

export default function Home() {
  return (
    <div className="flex-1 relative overflow-hidden bg-black text-white pt-20">
      {/* Immersive background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400 mb-8">
              Akses Awal
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Kuasai strategi Anda dengan kejelasan mutlak.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
              Latihan dan jurnal trading yang elegan dan kuat dirancang untuk membantu Anda menganalisis trading Anda, menemukan pola tersembunyi, dan meningkatkan profitabilitas Anda.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register" 
                className="h-12 w-full sm:w-auto px-8 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-all hover:scale-105"
              >
                Mulai Jurnal <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/overview" 
                className="h-12 w-full sm:w-auto px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                Lihat Dasbor
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Feature Section */}
      <div className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <StaggerItem>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dasbor Interaktif</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Saring, urutkan, dan paginasi riwayat trading Anda secara instan. Analisis keunggulan Anda dengan grafik dinamis di halaman analitik Anda.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pencatatan Trading Lanjutan</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Catat entri dengan pelengkapan otomatis pasangan, sinkronisasi PnL/RR, dan penyesuaian zona waktu otomatis. Edit trading masa lalu dengan mudah.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Penyimpanan Aman</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Data Anda disimpan dengan aman dan sepenuhnya pribadi, memastikan hanya Anda yang memiliki akses ke wawasan dan kinerja trading pribadi Anda.                
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
