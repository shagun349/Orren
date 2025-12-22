import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Features() {
    return (
        <>
            {/* Feature 1: Circular Economy (Dark) */}
            <section className="py-24 bg-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-16 max-w-2xl">
                        <span className="text-orange-500 font-semibold mb-2 block">Value Recovery</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Capture value from the <br /> circular economy.
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Don't let inventory go to waste. Our platform helps you identify high-demand items
                            and route them to the most profitable channels immediately.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                            Learn about recovery
                        </button>
                    </div>

                    <div className="rounded-2xl bg-black shadow-2xl shadow-black/20 border border-zinc-800 p-4 md:p-8 overflow-hidden">
                        {/* Dashboard Mockup */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="col-span-1 border-r border-zinc-800 p-4">
                                <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">Filters</div>
                                <div className="space-y-4">
                                    <div className="h-2 w-20 bg-zinc-800 rounded" />
                                    <div className="h-8 w-full bg-zinc-900 rounded border border-zinc-800" />
                                    <div className="h-8 w-full bg-zinc-900 rounded border border-zinc-800" />
                                    <div className="mt-8 border-t border-zinc-800 pt-4">
                                        <div className="h-2 w-20 bg-zinc-800 rounded" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 p-4">
                                <div className="flex justify-between mb-8">
                                    <div className="space-y-2">
                                        <div className="h-4 w-48 bg-zinc-800 rounded" />
                                        <div className="text-4xl font-bold text-green-500">$ 128,500</div>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <div className="h-4 w-24 bg-zinc-800 rounded ml-auto" />
                                        <div className="text-4xl font-bold text-orange-500">2.8%</div>
                                    </div>
                                </div>
                                {/* Fake Chart */}
                                <div className="flex items-end gap-2 h-40">
                                    {[40, 60, 45, 78, 55, 90, 80, 70, 60, 50, 65, 85].map((h, i) => (
                                        <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm hover:bg-green-500/50 transition-colors" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 2: Trash to Cash (Darker) */}
            <section className="py-24 bg-black text-white overflow-hidden border-t border-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-green-500 font-semibold mb-2 block">Instant Decisions</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Turn trash into cash by making smart decisions instantly.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Our computer vision models analyze item condition, brand, and authenticity in milliseconds,
                                giving your team the confidence to buy or sell.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Real-time market valuation",
                                    "Automated grading system",
                                    "Fraud detection & prevention"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-green-500 h-6 w-6" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Visual of scanning a shoe */}
                            <div className="aspect-square bg-zinc-900/30 rounded-2xl border border-zinc-800 relative flex items-center justify-center p-8">
                                {/* Grid overlay */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                                {/* Simulated Shoe Image Box */}
                                <div className="relative w-64 h-64 bg-zinc-800/50 rounded-xl border border-white/10 flex items-center justify-center rotate-[-12deg] backdrop-blur-sm">
                                    <span className="text-6xl">👟</span>
                                    {/* Scanning beam */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-[scan_2s_ease-in-out_infinite]" />

                                    {/* Tags */}
                                    <div className="absolute -top-4 -right-4 bg-green-500 text-black px-3 py-1 text-xs font-bold rounded-full shadow-lg shadow-green-500/20">
                                        VERIFIED
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg shadow-orange-500/20">
                                        $180.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 3: Accuracy (Darkest) */}
            <section className="py-24 bg-[#050505] text-white border-t border-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Highly accurate engine to convert linear to circular.
                            </h2>
                            <div className="flex items-baseline gap-2">
                                <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">95%</span>
                                <span className="text-xl text-gray-500">Automated <br /> Processing</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            {/* Code/Data visual */}
                            <div className="bg-black rounded-xl border border-zinc-800 p-6 font-mono text-sm leading-relaxed overflow-hidden relative shadow-2xl">
                                <div className="absolute top-0 right-0 p-2 text-xs text-zinc-700">engine_core.py</div>
                                <div className="text-green-400">def optimize_flow(item):</div>
                                <div className="pl-4 text-orange-300">confidence = model.predict(item)</div>
                                <div className="pl-4 text-zinc-500">if confidence &gt; 0.98:</div>
                                <div className="pl-8 text-blue-300">return "AUTO_APPROVE"</div>
                                <div className="pl-4 text-zinc-500">elif item.category in HIGH_VALUE:</div>
                                <div className="pl-8 text-blue-300">routing.priority_queue.add(item)</div>
                                <div className="pl-4 text-zinc-500">else:</div>
                                <div className="pl-8 text-blue-300">return "MANUAL_REVIEW"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature 4: Costs (Dark) */}
            <section className="py-24 bg-black border-t border-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Lower your sorting costs and optimize your inventory flow.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Drastically reduce manual labor hours and processing time per item.
                            </p>

                            <div className="mt-8">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-gray-300">Processing Cost / Item</span>
                                </div>
                                <div className="w-full bg-zinc-900 rounded-full h-12 relative flex items-center px-4 overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full bg-orange-900/30 rounded-full w-full" />
                                    <span className="relative z-10 font-bold text-orange-400">$ 0.45 (Industry Avg)</span>
                                </div>
                                <div className="w-[40%] bg-green-600 rounded-full h-12 mt-4 relative flex items-center px-4 shadow-lg shadow-green-500/10">
                                    <span className="relative z-10 font-bold text-white">$ 0.12 (Orren)</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-900 to-green-950 rounded-2xl p-8 text-white relative overflow-hidden border border-green-800/30">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
                            <h3 className="text-xl font-bold mb-2">Total Saved Annualy</h3>
                            <div className="text-5xl font-bold mb-8">$ 1,420,000+</div>
                            <p className="opacity-80 text-sm">Based on 10M items processed annually with Orren engine v2.4.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
