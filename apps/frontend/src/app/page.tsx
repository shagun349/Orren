import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { Features } from '@/components/landing/Features';
import { Webinar } from '@/components/landing/Webinar';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Webinar />
      <CTA />
      <Footer />
    </main>
  );
}
