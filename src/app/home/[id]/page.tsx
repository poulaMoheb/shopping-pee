
import ProductView from "@/components/product/ProductView"

export default async function page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <ProductView id={id} />
    )
}

