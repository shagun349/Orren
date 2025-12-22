import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-32 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto">
                    Get a demo to see <br /> Orren in action.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 shadow-orange-500/20">
                        Book a Demo
                    </button>
                    <button className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-bold transition-colors flex items-center gap-2 border border-zinc-700">
                        Contact Sales <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
                    {[
                        { title: "Rapid Integration", desc: "Connects with your existing ERP in days, not months.", icon: "🔌" },
                        { title: "24/7 Processing", desc: "Our engine runs continuously to ensure zero downtime.", icon: "⚡" },
                        { title: "Verified Security", desc: "Enterprise-grade security for your data and inventory pipeline.", icon: "🛡️" },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 text-left hover:bg-zinc-900 transition-colors">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
