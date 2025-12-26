'use client';
import { Package, RefreshCw, Zap, Leaf } from 'lucide-react';
import { clsx } from 'clsx';

function StatCard({ icon: Icon, label, value, trend, trendLabel, colorClass }: any) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a]/50 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-[#0a0a0a]/80 group">
            <div className="flex items-start justify-between">
                <div className={clsx("rounded-lg p-3 text-black", colorClass)}>
                    <Icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold bg-white/5 py-1 px-2 rounded text-green-400">
                    {trend}
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-sm font-medium text-zinc-400">{label}</h3>
                <p className="mt-2 text-3xl font-bold text-white tracking-tight">{value}</p>
                {trendLabel && <div className="mt-1 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-[var(--color-primary)] w-1/2"></div>
                </div>}
            </div>
        </div>
    );
}

export function StatsGrid() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
                icon={Package}
                label="Items Processed"
                value="1,284"
                trend="+12.5%"
                trendLabel="true"
                colorClass="bg-blue-500" // Kept distinct blue for items
            />
            <StatCard
                icon={RefreshCw}
                label="Recovered Revenue"
                value="₹42,350"
                trend="+8.2%"
                trendLabel="true"
                colorClass="bg-[var(--color-primary)]"
            />
            <StatCard
                icon={Zap}
                label="Processing Speed"
                value="48 items/min"
                trend="Avg 1.2s"
                trendLabel="true"
                colorClass="bg-yellow-500"
            />
            <StatCard
                icon={Leaf}
                label="Waste Diverted"
                value="2.4 Tons"
                trend="+240kg"
                trendLabel="true"
                colorClass="bg-[#059669]"
            />
        </div>
    );
}
