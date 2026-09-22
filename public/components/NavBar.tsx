"use client";

import { useState } from "react";

const navItems = [
    "Home",
    "Shop",
    "Categories",
    "Deals",
    "Reviews",
];

const categories = ["Women", "Men", "Accessories", "Beauty", "Home"];

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7d52b] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <a href="#" className="flex items-center gap-3" aria-label="Shopping Pee home">
                    <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-black shadow-lg shadow-black/15">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f7d52b_0%,#f7d52b_50%,#111111_50%,#111111_100%)]" />
                        <svg viewBox="0 0 24 24" fill="none" className="relative h-6 w-6" aria-hidden="true">
                            <path d="M12 2.5C14.7 5.8 18.8 9.2 18.8 13.4C18.8 17.3 15.9 20 12 20C8.1 20 5.2 17.3 5.2 13.4C5.2 9.2 9.3 5.8 12 2.5Z" fill="#f7d52b" stroke="black" strokeWidth="1.8" strokeLinejoin="round" />
                            <path d="M12 7.1L13.7 12.2H10.3L12 7.1Z" fill="black" opacity="0.9" />
                            <path d="M9.2 11.2H14.8" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M10.1 14.3H13.9" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
                            <path d="M11.1 17.1H12.9" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-base font-black tracking-tight text-black sm:text-lg">Shopping Pee</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/75">
                            Fresh drop
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
                    {navItems.map((item) => {
                        if (item === "Categories") {
                            return (
                                <div key={item} className="group relative">
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] text-black/75 transition duration-200 hover:-translate-y-0.5 hover:bg-black/5 hover:text-black focus:outline-none"
                                    >
                                        {item}
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                                            aria-hidden="true"
                                        >
                                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-52 -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                                            {categories.map((category) => (
                                                <a
                                                    key={category}
                                                    href="#"
                                                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-black/75 transition hover:bg-[#f7d52b] hover:text-black"
                                                >
                                                    {category}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <a
                                key={item}
                                href="#"
                                className="inline-flex items-center rounded-full px-3 py-2 text-sm font-bold uppercase tracking-[0.12em] text-black/75 transition duration-200 hover:-translate-y-0.5 hover:bg-black/5 hover:text-black"
                            >
                                {item}
                            </a>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <button className="hidden items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-black transition duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-[#f7d52b] sm:inline-flex">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                            <path d="M10.5 18a7.5 7.5 0 1 1 5.303-2.197L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Search
                    </button>

                    <button className="group inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-black uppercase tracking-[0.08em] text-[#f7d52b] shadow-lg shadow-black/15 transition duration-200 hover:-translate-y-0.5 hover:bg-black/90 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)] active:translate-y-0">
                        Cart
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f7d52b] px-1.5 text-[10px] font-black text-black transition-transform duration-200 group-hover:scale-110">
                            2
                        </span>
                    </button>

                    <button
                        type="button"
                        aria-label="Open mobile menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-black text-[#f7d52b] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-black/90 md:hidden"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="border-t border-black/10 bg-[#f9e68a] px-4 py-3">
                    {navItems.map((item) => {
                        if (item === "Categories") {
                            return (
                                <div key={item} className="border-b border-black/10 py-2 last:border-b-0">
                                    <button
                                        type="button"
                                        onClick={() => setIsCategoriesOpen((open) => !open)}
                                        className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left text-sm font-black uppercase tracking-[0.12em] text-black"
                                    >
                                        {item}
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className={`h-4 w-4 transition-transform duration-200 ${isCategoriesOpen ? "rotate-180" : ""}`}
                                            aria-hidden="true"
                                        >
                                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className={`grid overflow-hidden transition-all duration-200 ${isCategoriesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <div className="space-y-2 px-2 pb-2 pt-1">
                                                {categories.map((category) => (
                                                    <a
                                                        key={category}
                                                        href="#"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="block rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold text-black/75"
                                                    >
                                                        {category}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <a
                                key={item}
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                                className="block border-b border-black/10 px-2 py-3 text-sm font-black uppercase tracking-[0.12em] text-black/80 last:border-b-0"
                            >
                                {item}
                            </a>
                        );
                    })}

                    <div className="mt-3 flex items-center gap-3 pb-1">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/20 bg-white px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-black">
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                                <path d="M10.5 18a7.5 7.5 0 1 1 5.303-2.197L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Search
                        </button>

                        <button className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-sm font-black uppercase tracking-[0.08em] text-[#f7d52b]">
                            Cart
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f7d52b] px-1.5 text-[10px] font-black text-black transition-transform duration-200 group-hover:scale-110">
                                2
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;