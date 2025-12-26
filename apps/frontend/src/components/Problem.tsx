'use client';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Trash2 } from 'lucide-react';

const problems = [
    {
        icon: TrendingDown,
        title: 'Lost Revenue',
        description: 'Items sit in warehouses depreciating in value while waiting for manual inspection.',
        color: 'text-red-500',
    },
    {
        icon: Clock,
        title: 'Slow Processing',
        description: 'Human sorting is inconsistent and slow, creating bottlenecks during peak seasons.',
        color: 'text-orange-500',
    },
    {
        icon: Trash2,
        title: 'Unnecessary Waste',
        description: 'Perfectly good items are recycled or trashed due to lack of repair knowledge.',
        color: 'text-gray-400',
    },
];

export function Problem() {
    return (
        <section className="bg-[var(--background)] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        The Problem
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                        The Reverse Logistics Black Hole
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                        Stop guessing what to do with returns. Manual sorting kills margins,
                        slows down operations, and increases waste. It’s time for a smarter solution.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group rounded-xl border border-white/5 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:bg-zinc-900/80 hover:border-white/10"
                        >
                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-black/50 ${problem.color}`}>
                                <problem.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{problem.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
