'use client';

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const data = [
    { time: '08:00', resell: 30, repair: 15, recycle: 5 },
    { time: '10:00', resell: 45, repair: 20, recycle: 8 },
    { time: '12:00', resell: 60, repair: 25, recycle: 12 },
    { time: '14:00', resell: 75, repair: 30, recycle: 15 },
    { time: '16:00', resell: 50, repair: 35, recycle: 10 },
    { time: '18:00', resell: 80, repair: 40, recycle: 20 },
];

const distributionData = [
    { name: 'Resell', value: 65, color: '#22c55e' },
    { name: 'Repair', value: 20, color: '#3b82f6' },
    { name: 'Recycle', value: 15, color: '#6b7280' },
];

export function Charts() {
    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {/* Live Throughput */}
            <div className="lg:col-span-2 rounded-xl border border-white/5 bg-[#0a0a0a]/50 p-6 backdrop-blur">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-white">Live Throughput</h3>
                        <p className="text-sm text-zinc-500">Categorization distribution over time</p>
                    </div>
                    <div className="flex gap-4 text-xs font-mono">
                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> Resell</div>
                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span> Repair</div>
                        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#6b7280]"></span> Recycle</div>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barGap={4}>
                            <XAxis dataKey="time" axisLine={false} tickLine={false} stroke="#52525b" fontSize={12} dy={10} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                                cursor={{ fill: '#27272a', opacity: 0.5 }}
                            />
                            <Bar dataKey="resell" fill="#22c55e" radius={[2, 2, 0, 0]} />
                            <Bar dataKey="repair" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                            <Bar dataKey="recycle" fill="#6b7280" radius={[2, 2, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Distribution */}
            <div className="rounded-xl border border-white/5 bg-[#0a0a0a]/50 p-6 backdrop-blur flex flex-col">
                <h3 className="text-lg font-bold text-white mb-6">Distribution</h3>
                <div className="flex-1 relative flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={distributionData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {distributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-white">65%</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">Resell Rate</span>
                    </div>
                </div>
                <div className="mt-8 space-y-3">
                    {distributionData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-2 rounded bg-white/5">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                                <span className="text-sm font-medium text-zinc-300">{item.name}</span>
                            </div>
                            <span className="text-sm font-bold text-white">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
