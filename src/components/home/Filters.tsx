'use client';

import { useEffect, useState } from 'react';

const categories = ["All", "Women", "Men", "Accessories", "Beauty", "Home"];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = [
    { name: "Black", value: "#111111" },
    { name: "White", value: "#ffffff" },
    { name: "Yellow", value: "#f7d52b" },
    { name: "Pink", value: "#f9a8d4" },
    { name: "Green", value: "#22c55e" },
];
const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "$200+"];

function Filters() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const syncFilterState = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        syncFilterState();
        window.addEventListener('resize', syncFilterState);

        return () => window.removeEventListener('resize', syncFilterState);
    }, []);

    return (
        <aside className={`w-full overflow-hidden rounded-[28px] border border-black/10 bg-[#fffdf7] shadow-[0_18px_40px_rgba(17,17,17,0.08)] transition-all duration-300 ${isOpen ? 'max-w-sm' : 'max-w-[220px] sm:max-w-[240px] lg:max-w-sm'}`}>
            <div className={`flex items-center justify-between ${isOpen ? 'border-b border-black/10 pb-4' : 'pb-3'} px-4 pt-4`}>
                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-expanded={isOpen}
                    aria-controls="filters-panel"
                    className="flex flex-1 items-center gap-3 text-left"
                >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f7d52b] text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 6h16" />
                            <path d="M7 12h10" />
                            <path d="M10 18h4" />
                        </svg>
                    </span>
                    <span className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">Browse</p>
                        <h2 className="mt-1 text-xl font-black text-black sm:text-2xl">{isOpen ? 'Filters' : 'Filter'}</h2>
                    </span>
                </button>

                {isOpen && (
                    <button
                        type="button"
                        className="ml-3 rounded-full border border-black/10 bg-[#f7d52b] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-black"
                    >
                        Reset
                    </button>
                )}

                <button
                    type="button"
                    aria-label={isOpen ? 'Collapse filters' : 'Expand filters'}
                    onClick={() => setIsOpen((current) => !current)}
                    className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-[#f8f2d8]"
                >
                    <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div id="filters-panel" className="space-y-6 px-5 pb-5 pt-5">
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-black/70">Category</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${category === "All"
                                            ? "border-black bg-black text-[#f7d52b]"
                                            : "border-black/10 bg-white text-black/75 hover:border-black/20 hover:bg-[#fff6b3]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-black/70">Price</h3>
                        <div className="mt-3 space-y-2">
                            {priceRanges.map((range) => (
                                <label key={range} className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 hover:bg-[#f8f2d8]">
                                    <input
                                        type="radio"
                                        name="price"
                                        className="h-4 w-4 accent-black"
                                        defaultChecked={range === "$50 - $100"}
                                    />
                                    <span className="text-sm font-medium text-black/75">{range}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-black/70">Size</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-bold text-black/75 transition hover:border-black/20 hover:bg-[#f7d52b] hover:text-black"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-black/70">Color</h3>
                        <div className="mt-3 flex flex-wrap gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    title={color.name}
                                    aria-label={color.name}
                                    className="h-9 w-9 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition hover:scale-110"
                                    style={{ backgroundColor: color.value }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-[#f7d52b] p-4">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-black/65">Offer</p>
                        <p className="mt-2 text-xl font-black text-black">Save up to 30%</p>
                        <p className="mt-1 text-sm text-black/70">On selected essentials this week.</p>
                    </div>
                </div>
            )}
        </aside>
    );
}

export default Filters;