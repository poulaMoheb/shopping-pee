import Filters from '../../../public/components/home/Filters';
import ProductsTable from '../../../public/components/home/products';

function Page() {
    return (
        <main className="min-h-screen bg-[#f5f1df] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-black/55">Collection</p>
                    <h1 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">Fresh finds for your day</h1>
                </div>

                <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
                    <Filters />
                    <ProductsTable />
                </div>
            </div>
        </main>
    );
}

export default Page;