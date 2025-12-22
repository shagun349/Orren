
export function Stats() {
    return (
        <section className="py-20 bg-orange-600">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">The sorting engine</h3>
                        <p className="text-orange-100 text-sm">Used by leading reselling platforms globally.</p>
                    </div>

                    <div className="flex items-end gap-2 text-white">
                        <span className="text-6xl font-black">98%</span>
                        <span className="text-lg font-medium mb-2 opacity-90">Sorting <br />Accuracy</span>
                    </div>

                    <div className="flex items-end gap-2 text-white">
                        <span className="text-6xl font-black">2.2M</span>
                        <span className="text-lg font-medium mb-2 opacity-90">Items <br />Processed</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
