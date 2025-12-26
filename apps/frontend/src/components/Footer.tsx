import { Leaf } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#020604] py-12">
            <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-[var(--color-primary)] fill-current" />
                    <span className="font-bold text-white">Orren</span>
                </div>

                <div className="flex gap-8 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Security</a>
                </div>

                <div className="text-xs text-zinc-600">
                    © 2025 Orren Inc.
                </div>
            </div>
        </footer>
    );
}
