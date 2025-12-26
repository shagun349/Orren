import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020604]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-black">
                        <Leaf className="h-5 w-5 fill-current" />
                    </div>
                    <span>Orren</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--color-primary)]">
                        Product
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--color-primary)]">
                        Solutions
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--color-primary)]">
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--color-primary)]">
                        About Us
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login?mode=login" className="text-sm font-bold text-white transition-colors hover:text-[var(--color-primary)]">
                        Login
                    </Link>
                    <Link href="/login?mode=signup">
                        <Button className="h-10 rounded-md bg-[var(--color-primary)] px-6 text-black hover:bg-green-400">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
