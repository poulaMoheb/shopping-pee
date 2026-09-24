"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { Product } from './products';

type CartProps = {
    item: Product;
};

function Cart({ item }: CartProps) {
    const router = useRouter();

    return (
        <div className="flex w-[220px] min-w-[220px] flex-col overflow-hidden rounded-[24px] border border-black/10 bg-[#fffdf7] p-3 shadow-[0_16px_32px_rgba(17,17,17,0.08)]">
            <div className="overflow-hidden rounded-[18px] bg-[#f3efe5]">
                <Image
                    width={220}
                    height={180}
                    alt={`${item.name} thumbnail`}
                    src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                    className="h-40 w-full object-cover"
                />
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/50">{item.category}</p>
                    <h2 className="mt-1 text-base font-black text-black">{item.name}</h2>
                </div>
                <span className="rounded-full bg-[#f7d52b] px-2 py-1 text-xs font-black text-black">
                    ${item.price}
                </span>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-black/60">
                <span>{item.stock}</span>
                <span className="font-bold text-black">★ {item.rating}</span>
            </div>

            <button
                type="button"
                onClick={() => router.push('/')}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#f7d52b] transition hover:translate-y-[-1px] hover:bg-black/90"
            >
                Add
            </button>
        </div>
    );
}

export default Cart;