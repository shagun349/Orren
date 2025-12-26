import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="bg-[#020604] py-24 pb-32 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Ready to close the loop?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400">
                    Join the circular revolution. Transform your reverse logistics from a cost center into a sustainable profit driver.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link href="/login?mode=signup" className="w-full sm:w-auto">
                        <Button className="h-12 w-full px-8 bg-[var(--color-primary)] text-black hover:bg-green-400 font-bold">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </section >
    );
}
