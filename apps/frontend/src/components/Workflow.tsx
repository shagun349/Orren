'use client';
import { motion } from 'framer-motion';
import { Scan, Eye, BrainCircuit, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: Scan,
        title: 'Scan Item',
        subtitle: 'Input Inventory',
        description: 'Universal intake via conveyor belt cameras or handheld devices. Instantly logs SKU and condition.',
    },
    {
        icon: Eye,
        title: 'AI Analysis',
        subtitle: 'Computer Vision',
        description: 'Our neural networks identify surface damage, missing parts, and verify authenticity against a global database.',
    },
    {
        icon: BrainCircuit,
        title: 'Decision Engine',
        subtitle: 'Repair, Resell, Recycle',
        description: 'Dynamic routing logic calculates the highest margin path: Send to refurbishment, list on marketplace, or responsibly recycle.',
    },
    {
        icon: TrendingUp,
        title: 'Profit & Impact Report',
        subtitle: 'Real-Time Data',
        description: 'Visualize recovered revenue and CO2 emissions saved. Export reports for ESG compliance.',
    },
];

export function Workflow() {
    return (
        <section className="bg-[#051109] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                        Orchestrate the Chaos
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        From input to impact in four automated steps.
                    </p>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 h-full w-px bg-zinc-800 md:left-1/2 md:-ml-px"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[#051109] border-2 border-[var(--color-primary)] z-10">
                                    <div className="h-2 w-2 rounded-full bg-[var(--color-primary)]"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-20 md:ml-0 md:w-1/2 p-4">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">{step.subtitle}</div>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
