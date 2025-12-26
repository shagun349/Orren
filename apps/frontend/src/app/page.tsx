import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Workflow } from '@/components/Workflow';
import { Features } from '@/components/Features';
import { Stats } from '@/components/Stats';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#020604] text-white selection:bg-[var(--color-primary)] selection:text-black">
            <Navbar />
            <Hero />
            <Problem />
            <Workflow />
            <Features />
            <Stats />
            <CTA />
            <Footer />
        </main>
    );
}
