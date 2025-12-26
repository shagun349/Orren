'use client';
import { BadgeAlert, Laptop, Watch, Smartphone, Headphones, HelpCircle, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';

const recentItems = [
    { id: '#SKU-9021', product: 'Wireless Headset X1', icon: Headphones, condition: 'Minor Scratch (Cup)', action: 'Resell (Grade B)', confidence: '98.2%', value: '₹85.00', statusColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { id: '#SKU-9022', product: 'ProBook 14"', icon: Laptop, condition: 'Screen Cracked', action: 'Repair Queue', confidence: '99.1%', value: 'Pending', statusColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { id: '#SKU-9023', product: 'Phone Case (Silicone)', icon: Smartphone, condition: 'Degraded Material', action: 'Recycle', confidence: '95.4%', value: '₹0.05', statusColor: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20' },
    { id: '#SKU-9024', product: 'Smart Watch Series 5', icon: Watch, condition: 'Like New', action: 'Resell (Grade A)', confidence: '99.8%', value: '₹142.50', statusColor: 'text-green-500 bg-green-500/10 border-green-500/20' },
];

const attentionItems = [
    { id: '#882', title: 'Unknown Object', desc: 'Low confidence score (42%)', icon: AlertTriangle, color: 'text-yellow-500 bg-yellow-500/10' },
    { id: '#885', title: 'Hazardous Material', desc: 'Battery leakage detected', icon: BadgeAlert, color: 'text-red-500 bg-red-500/10' },
    { id: '#891', title: 'Vintage Item ID', desc: 'Requires expert valuation', icon: HelpCircle, color: 'text-blue-500 bg-blue-500/10' },
];

export function RecentActivity() {
    const handleRowClick = async (item: any) => {
        try {
            await fetch('http://localhost:8000/track/interaction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    item_id: item.id,
                    item_name: item.product,
                    interaction_type: item.action, // Using item action as the interaction type/action
                    condition: item.condition,
                    value: item.value
                }),
            });
        } catch (error) {
            console.error('Failed to track interaction', error);
        }
    };

    return (
        <div className="grid gap-6 lg:grid-cols-3">
            {/* Table */}
            <div className="lg:col-span-2 rounded-xl border border-white/5 bg-[#0a0a0a]/50 p-6 backdrop-blur">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Recent Categorizations</h3>
                    <button className="text-xs text-[var(--color-primary)] hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-zinc-400">
                        <thead className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                            <tr>
                                <th className="pb-4">Item ID</th>
                                <th className="pb-4">Product</th>
                                <th className="pb-4">Condition</th>
                                <th className="pb-4">Action</th>
                                <th className="pb-4 text-right">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {recentItems.map((item) => (
                                <tr
                                    key={item.id}
                                    className="group hover:bg-white/5 cursor-pointer transition-colors"
                                    onClick={() => handleRowClick(item)}
                                >
                                    <td className="py-4 font-mono text-xs text-zinc-500">{item.id}</td>
                                    <td className="py-4 font-medium text-white flex items-center gap-2">
                                        <item.icon className="h-4 w-4 text-zinc-600" />
                                        {item.product}
                                    </td>
                                    <td className="py-4">{item.condition}</td>
                                    <td className="py-4">
                                        <span className={clsx("px-2 py-1 rounded border text-xs font-bold", item.statusColor)}>
                                            {item.action}
                                        </span>
                                    </td>
                                    <td className="py-4 text-right font-bold text-white">{item.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Attention List */}
            <div className="rounded-xl border border-white/5 bg-[#0a0a0a]/50 p-6 backdrop-blur flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Attention Needed</h3>
                    <span className="h-5 w-5 flex items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
                </div>
                <p className="text-sm text-zinc-500 mb-6">Items requiring manual verification.</p>
                <div className="space-y-4 flex-1">
                    {attentionItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 rounded-lg border border-white/5 bg-zinc-900/50 p-4 transition-colors hover:bg-white/5 cursor-pointer">
                            <div className={clsx("p-2 rounded-md", item.color)}>
                                <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">{item.title} #{item.id}</h4>
                                <p className="text-xs text-zinc-500">{item.desc}</p>
                            </div>
                            <div className="ml-auto text-zinc-600">›</div>
                        </div>
                    ))}
                </div>
                <button className="mt-6 w-full rounded-md border border-white/10 bg-white/5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                    View All Tasks
                </button>
            </div>
        </div>
    );
}
