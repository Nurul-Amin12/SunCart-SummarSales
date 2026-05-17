import ProductCard from "@/components/ProductCard";


const AllProductsPage = async()=> {
    const res = await fetch('https://sun-cart-summar-sales.vercel.app/data.json');
    const products = await res.json();

    return(
        <div>
            <h2 className="text-2xl font-bold my-5">All Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>

        </div>
    );
}

export default AllProductsPage;