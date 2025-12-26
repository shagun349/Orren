'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginContent() {
    const searchParams = useSearchParams();
    const mode = searchParams.get('mode');
    const greeting = mode === 'signup' ? 'Welcome' : 'Welcome back';

    return (
        <div className="relative z-10 w-full max-w-md space-y-8 rounded-2xl border border-white/5 bg-[#0a0a0a]/80 p-10 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col items-center text-center">
                <Link href="/" className="mb-8 flex items-center gap-2 text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)] text-black">
                        <Leaf className="h-6 w-6 fill-current" />
                    </div>
                    <span>Orren</span>
                </Link>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                    {greeting}
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                    Automate your reverse logistics today.
                </p>
            </div>

            <div className="mt-8 space-y-4">
                <Button className="h-12 w-full justify-center gap-3 overflow-hidden rounded-md bg-white text-base font-medium text-black hover:bg-gray-100 transition-all">
                    {/* Google Icon */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Continue with Google
                </Button>
            </div>

            <p className="text-center text-xs text-zinc-500">
                By clicking continue, you agree to our{' '}
                <a href="#" className="underline hover:text-white">Terms of Service</a> and{' '}
                <a href="#" className="underline hover:text-white">Privacy Policy</a>.
            </p>
        </div>
    );
}

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#020604] relative overflow-hidden px-4">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <LoginContent />
            </Suspense>
        </main>
    );
}
