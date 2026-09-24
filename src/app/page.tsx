
import NavBar from "../../public/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1df] text-black">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-[#f7d52b] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-black">
            New season
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Shop smarter.
            <span className="block text-[#d4a100]">Live better.</span>
          </h1>
          <p className="mt-5 text-lg text-black/70">
            Discover everyday essentials, premium picks, and hot deals curated for the way you live.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#f7d52b] shadow-lg shadow-black/10 transition hover:bg-black/90">
              Shop now
            </button>
            <button className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:border-black/20 hover:bg-[#fff7d1]">
              Browse deals
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-black/70">
            <div>
              <p className="text-2xl font-black text-black">12k+</p>
              <span>Happy shoppers</span>
            </div>
            <div>
              <p className="text-2xl font-black text-black">4.9/5</p>
              <span>Average rating</span>
            </div>
            <div>
              <p className="text-2xl font-black text-black">24h</p>
              <span>Fast delivery</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_24px_80px_rgba(26,26,26,0.12)]">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#111111] via-[#1e1e1e] to-[#d4a100] p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#f7d52b] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-black">
                Trending
              </span>
              <span className="text-sm font-bold text-[#fff5b2]">Up to 40% off</span>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#fff2a8]">Smart Home Bundle</p>
                  <p className="mt-2 text-3xl font-black">$189</p>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffe770] to-[#f7d52b] text-3xl shadow-lg shadow-[#f7d52b]/30">
                  🛍️
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-[#fff0a4]">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-lg font-black text-white">320</p>
                <span>Products</span>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-lg font-black text-white">18</p>
                <span>Categories</span>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-lg font-black text-white">9.8</p>
                <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
