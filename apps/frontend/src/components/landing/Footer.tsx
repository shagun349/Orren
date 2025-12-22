import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="text-xl font-bold text-white tracking-tight mb-4 block">
                            Orren
                        </Link>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Features</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Pricing</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Enterprise</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Documentation</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">API Reference</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Blog</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">About</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Careers</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Legal</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Terms of Service</Link></li>
                            <li><Link href="#" className="text-zinc-500 hover:text-white text-sm">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-sm text-zinc-500">
                    <p>© 2024 Orren. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Site Map</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
