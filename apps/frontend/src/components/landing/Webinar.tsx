export function Webinar() {
    return (
        <section className="py-24 bg-gray-900 relative">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Use a placeholder valid image or color */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10" />
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-50 contrast-125 saturate-0" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-2xl text-white">
                    <span className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-4 block">Archive</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Webinar: Solving the Resale Verification Challenge.
                    </h2>
                    <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-sm transition-colors uppercase tracking-wide">
                        Watch Webinar
                    </button>
                </div>
            </div>
        </section>
    );
}
