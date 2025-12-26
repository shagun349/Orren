'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
                        The Autonomous <br />
                        Agent for <span className="text-[var(--color-primary)]">Circular <br /> Logistics</span>
                    </h1>

                    <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                        Automate your returns on Amazon, Flipkart, and more.
                        Identify, categorize, and monetize reverse inventory automatically.
                        Turn returned goods from trash to treasure in milliseconds.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/login?mode=signup">
                            <button className="h-14 rounded-md bg-[var(--color-primary)] px-8 text-base font-bold text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                                Automate Your Returns
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Visual - 3D Box Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1 backdrop-blur-md">
                        <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] aspect-video flex items-center justify-center">

                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

                            {/* Floating 3D Object Representation */}
                            <div className="relative z-10 w-64 h-40 border-2 border-[var(--color-primary)] bg-[var(--color-primary)]/5 flex flex-col items-center justify-center text-[var(--color-primary)] font-mono text-xs shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                                <div className="absolute top-0 left-0 p-2">Item_Scanned_v04</div>

                                {/* Corner markers */}
                                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[var(--color-primary)]"></div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[var(--color-primary)]"></div>
                                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[var(--color-primary)]"></div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[var(--color-primary)]"></div>

                                <div className="text-3xl font-bold tracking-widest opacity-80">BRAKE PADS</div>
                            </div>

                            {/* HUD Elements */}
                            <div className="absolute bottom-6 left-6 flex gap-4">
                                <div className="rounded bg-zinc-900/90 px-3 py-2 border border-white/10">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span> Status
                                    </div>
                                    <div className="text-sm font-bold text-white">Resellable</div>
                                </div>
                                <div className="rounded bg-zinc-900/90 px-3 py-2 border border-white/10">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Est. Value</div>
                                    <div className="text-sm font-bold text-white">₹1425</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow Effect under the card */}
                    <div className="absolute -inset-4 bg-[var(--color-primary)]/20 blur-[60px] -z-10 rounded-full opacity-50"></div>
                </motion.div>
            </div>
        </section>
    );
}
