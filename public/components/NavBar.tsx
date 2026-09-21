const navItems = [
    "Home",
    "Shop",
    "Categories",
    "Deals",
    "Reviews",
];

function NavBar() {
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
                        <p className="text-lg font-black tracking-tight text-black">Shopping Pee</p>
                        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/75">
                            Fresh drop
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-sm font-bold uppercase tracking-[0.12em] text-black/75 transition hover:text-black"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button className="hidden items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-2 text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-black hover:text-[#f7d52b] sm:inline-flex">
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                            <path d="M10.5 18a7.5 7.5 0 1 1 5.303-2.197L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Search
                    </button>

                    <button className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-black uppercase tracking-[0.08em] text-[#f7d52b] shadow-lg shadow-black/15 transition hover:bg-black/90">
                        Cart
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f7d52b] px-1.5 text-[10px] font-black text-black">
                            2
                        </span>
                    </button>

                    <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-black text-[#f7d52b] shadow-sm md:hidden"
                        aria-label="Open mobile menu"
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;