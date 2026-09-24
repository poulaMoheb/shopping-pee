import Cart from './Cart';
import styles from '@/styles/products.module.css'
export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: string;
    rating: number;
    color: string;
};

const products: Product[] = [
    { id: 1, name: 'Classic Leather Tote', category: 'Women', price: 89, stock: 'In Stock', rating: 4.8, color: 'Black' },
    { id: 2, name: 'Urban Stripe Tee', category: 'Men', price: 42, stock: 'Low Stock', rating: 4.6, color: 'White' },
    { id: 3, name: 'Glow Serum', category: 'Beauty', price: 58, stock: 'In Stock', rating: 4.9, color: 'Yellow' },
    { id: 4, name: 'Minimal Lamp', category: 'Home', price: 74, stock: 'In Stock', rating: 4.7, color: 'Cream' },
    { id: 5, name: 'Sculpted Watch', category: 'Accessories', price: 130, stock: 'Sold Out', rating: 4.5, color: 'Gold' },
    { id: 6, name: 'Weekend Backpack', category: 'Accessories', price: 95, stock: 'In Stock', rating: 4.8, color: 'Navy' },
];

function ProductsTable() {
    return (
        <section className="overflow-hidden rounded-[28px] border border-black/10 bg-[#fffdf7] shadow-[0_18px_40px_rgba(17,17,17,0.08)]">
            <div className="flex flex-col gap-3 border-b border-black/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-black/55">Products</p>
                    <h2 className="mt-1 text-2xl font-black text-black">Trending items</h2>
                </div>

                <button className="rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#f7d52b]">
                    View all
                </button>
            </div>

            <div className={styles.content}>
                {
                    products.map(item => (
                        <Cart key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    );
}

export default ProductsTable;