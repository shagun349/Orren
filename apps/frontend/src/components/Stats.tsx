'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

export function Stats() {
    return (
        <section className="bg-[#020604] py-24">
            <div className="container mx-auto px-6">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    {/* Left Text */}
                    <div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                            Actionable Intelligence
                        </h2>
                        <p className="mb-8 text-lg text-zinc-400">
                            Your dashboard gives you a live view of your circular economy performance.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <CheckCircle2 className="mt-1 h-6 w-6 text-[var(--color-primary)]" />
                                <div>
                                    <h4 className="font-bold text-white">99% Accuracy</h4>
                                    <p className="text-sm text-zinc-500">In material identification compared to human experts.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Zap className="mt-1 h-6 w-6 text-[var(--color-primary)]" />
                                <div>
                                    <h4 className="font-bold text-white">10X Speed</h4>
                                    <p className="text-sm text-zinc-500">Process items in seconds, not minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Chart */}
                    <div className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-sm font-bold text-white">Live Throughput</h3>
                            <div className="flex gap-1">
                                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            </div>
                        </div>

                        {/* CSS Bar Chart */}
                        <div className="flex h-48 items-end gap-2 md:gap-4">
                            {[40, 65, 45, 80, 95].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${height}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    className="w-full rounded-t-md bg-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/40 transition-colors relative group"
                                >
                                    {/* Last bar active */}
                                    {i === 4 && (
                                        <div className="absolute inset-0 bg-[var(--color-primary)] rounded-t-md shadow-[0_0_20px_rgba(34,197,94,0.5)]"></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Resale</div>
                                <div className="text-lg font-bold text-white">₹4,24,500</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Recycled</div>
                                <div className="text-lg font-bold text-white">855 kg</div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Pending</div>
                                <div className="text-lg font-bold text-white">124 units</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
