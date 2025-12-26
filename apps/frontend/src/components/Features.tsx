import { ScanLine, RefreshCcw, Leaf, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: ScanLine,
        title: 'Material ID',
        description: 'Advanced spectral analysis to identify plastics types, metal alloys, and fabric blends for accurate recycling streams.',
        link: 'Learn more',
    },
    {
        icon: RefreshCcw,
        title: 'Market Pricing',
        description: 'Real-time connection to eBay, Back Market, and B2B liquidation exchanges to determine instant resale value.',
        link: 'View integrations',
    },
    {
        icon: Leaf,
        title: 'Carbon Tracking',
        description: 'Automated Life Cycle Assessment (LCA) for every item. Track diverted landfill waste in kilograms.',
        link: 'See methodology',
    },
];

export function Features() {
    return (
        <section className="bg-[var(--background)] py-24">
            <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group flex flex-col justify-between rounded-xl border border-white/5 bg-[#0a0a0a] p-8 transition-colors hover:border-[var(--color-primary)]/30"
                        >
                            <div>
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-white/10 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                                <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>

                            <a href="#" className="flex items-center text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-green-400 transition-colors group">
                                {feature.link}
                                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
