import Image from "next/image";
import Link from "next/link";
import { products } from "@/components/home/products";

type ProductViewProps = {
    id: string;
};

function ProductView({ id }: ProductViewProps) {
    const product = products.find((item) => item.id === Number(id)) ?? products[0];
    const colorOptions = ["Black", "Ivory", "Sand", "Forest"];

    return (
        <main className="min-h-screen bg-[#f5f1df] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/home"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-white"
                >
                    ← Back to collection
                </Link>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#fffdf7] p-4 shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
                        <div className="overflow-hidden rounded-[24px] bg-[#efe7d6]">
                            <Image
                                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                                alt={product.name}
                                width={900}
                                height={900}
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                            />
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="overflow-hidden rounded-[18px] bg-[#efe7d6]">
                                    <Image
                                        src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                                        alt={`${product.name} detail ${item}`}
                                        width={400}
                                        height={400}
                                        className="h-24 w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-black/10 bg-[#fffdf7] p-6 shadow-[0_18px_40px_rgba(17,17,17,0.08)] sm:p-8">
                        <div className="flex items-center justify-between gap-4">
                            <span className="rounded-full bg-[#f7d52b] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                                {product.category}
                            </span>
                            <span className="text-sm font-bold text-black/60">{product.stock}</span>
                        </div>

                        <h1 className="mt-5 text-3xl font-black tracking-tight text-black sm:text-4xl">
                            {product.name}
                        </h1>

                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-3xl font-black text-black">${product.price}</span>
                            <span className="rounded-full bg-[#eef1f0] px-2.5 py-1 text-xs font-black uppercase tracking-[0.12em] text-black/70">
                                4.8 ★
                            </span>
                        </div>

                        <p className="mt-5 text-base leading-7 text-black/70">
                            A refined everyday essential designed for comfort, function, and effortless style.
                            Crafted with clean lines, premium finishes, and a lightweight silhouette that works from
                            weekday errands to elevated weekend plans.
                        </p>

                        <div className="mt-6 border-t border-black/10 pt-6">
                            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/55">Color</p>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {colorOptions.map((color) => (
                                    <button
                                        key={color}
                                        type="button"
                                        className={`rounded-full border px-4 py-2 text-sm font-bold transition ${color === product.color
                                                ? "border-black bg-black text-[#f7d52b]"
                                                : "border-black/15 bg-white text-black hover:border-black/30"
                                            }`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                className="flex-1 rounded-full bg-black px-5 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-[#f7d52b] transition hover:bg-black/90"
                            >
                                Add to cart
                            </button>
                            <button
                                type="button"
                                className="rounded-full border border-black/15 bg-white px-5 py-3.5 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:border-black/30"
                            >
                                Save for later
                            </button>
                        </div>

                        <div className="mt-8 grid gap-3 rounded-[24px] bg-[#f7f3ea] p-4 text-sm text-black/70 sm:grid-cols-3">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">Delivery</p>
                                <p className="mt-2 font-bold text-black">2-4 days</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">Material</p>
                                <p className="mt-2 font-bold text-black">Premium finish</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/55">Care</p>
                                <p className="mt-2 font-bold text-black">Easy clean</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductView;