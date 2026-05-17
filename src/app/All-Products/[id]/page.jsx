import { Chip } from "@heroui/react";
import Image from "next/image";

const ProductsDetailsPage = async({params})=> {
    const {id} = await params;
    const res = await fetch('https://sun-cart-summar-sales.vercel.app/data.json');
    const products = await res.json();

    const product = products.find(p => p.id==id);

    return(
        <div>
            <section className="relative bg-gray-100 flex items-center justify-center my-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-15">
                    
                    <div className="relative w-full aspect-square">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {product.name}
                        </h1>
                        <h2 className="text-lg text-gray-600 mt-2">{product.brand}</h2>
                        <p className="text-yellow-600 font-semibold mt-2">
                            ⭐ {product.rating} / 5
                        </p>
                        <p className="text-green-600 text-2xl font-bold mt-4">
                            ${product.price}
                        </p>
                        <p className="mt-4 text-gray-700">{product.description}</p>
                        
                        <p className="mt-3 text-sm text-gray-500">
                            Available Stock: <span className="font-semibold">{product.stock}</span>
                        </p>

                        <Chip className="mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {product.category}
                        </Chip>


                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductsDetailsPage;