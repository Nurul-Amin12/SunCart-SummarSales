import ProductCard from "./ProductCard";


const TopGenerations = async() => {

    const res = await fetch('https://sun-cart-summar-sales.vercel.app/data.json');
    const JsonData = await res.json();
    const topData = JsonData.slice(0,3)
    // console.log(topData);

    return(
        <div className="my-10">
            <h2 className="text-2xl font-bold mb-5">Popular Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    topData.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    );
};

export default TopGenerations;