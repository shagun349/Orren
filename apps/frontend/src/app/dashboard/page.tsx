import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { Charts } from '@/components/dashboard/Charts';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { Leaf, Bell, Search } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#020604] pb-20">

            {/* Top Navigation */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#020604]/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-black">
                                <Leaf className="h-5 w-5 fill-current" />
                            </div>
                            <span>Orren</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#" className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-bold text-white">Dashboard</a>
                            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Inventory</a>
                            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Reports</a>
                            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Settings</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-zinc-400 hover:text-white transition-colors relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        <div className="flex items-center gap-3 border-l border-white/10 pl-6 ml-2">
                            <div className="text-right hidden sm:block leading-tight">
                                <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Warehouse Manager</div>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-[var(--color-primary)] text-black flex items-center justify-center font-bold text-xs ring-2 ring-white/10 shadow-lg">
                                SJ
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 space-y-8">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
                        <p className="text-zinc-400">Real-time insights into your reverse logistics operations.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                            Last 24 Hours
                        </button>
                        <button className="flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-black hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                            <Search className="h-4 w-4" />
                            Scan New Item
                        </button>
                    </div>
                </div>

                <StatsGrid />
                <Charts />
                <RecentActivity />
            </main>
        </div>
    );
}
