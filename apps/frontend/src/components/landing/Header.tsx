import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming we might have UI components or I'll just use raw HTML buttons for now
import { Menu } from 'lucide-react';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white tracking-tight">
                    Orren
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Product
                    </Link>
                    <Link href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Solutions
                    </Link>
                    <Link href="#learn" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Learn
                    </Link>
                    <Link href="#company" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Company
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden md:flex text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Log In
                    </Link>
                    <Link href="/signup" className="hidden md:flex bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                        Sign Up
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
