import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background Gradients/Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        New Features Available
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Give your items <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                            a second life.
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Maximize the value of your inventory with our AI-powered sorting engine.
                        Identify, sort, and resell items with 99% accuracy in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25">
                            Get Started
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                            View Demo <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Hero Image / Graphic Placeholder */}
                <div className="relative mx-auto max-w-5xl">
                    <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-white/10 p-4 md:p-8 backdrop-blur-sm relative overflow-hidden group">
                        {/* abstract shapes / hand holding device simulation */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

                        <div className="relative h-full w-full flex items-center justify-center">
                            <div className="relative w-64 h-96 bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl rotate-[-5deg] transform transition-transform group-hover:rotate-0 duration-700">
                                {/* Screen content */}
                                <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] overflow-hidden">
                                    <div className="p-6 pt-10 text-white">
                                        <div className="w-12 h-1 bg-gray-700 rounded-full mx-auto mb-6" />
                                        <div className="space-y-4">
                                            <div className="h-32 bg-green-500/20 rounded-xl border border-green-500/30 flex items-center justify-center">
                                                <span className="text-green-400 font-mono text-xs">Scanning...</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-2 w-20 bg-gray-700 rounded" />
                                                <div className="h-2 w-32 bg-gray-800 rounded" />
                                            </div>
                                            <div className="pt-4 flex justify-between items-center">
                                                <div className="text-2xl font-bold">$125.00</div>
                                                <div className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full">SELL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating UI Elements */}
                            <div className="absolute top-1/2 right-10 md:right-20 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Efficiency</div>
                                        <div className="text-sm font-bold text-white">+124%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 md:left-20 bg-gray-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl animate-pulse">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Match Rate</div>
                                        <div className="text-sm font-bold text-white">98.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
