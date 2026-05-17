import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";


const ProductCard = ({product})=>{

    console.log(product);
    return(
        <div>

            <Card className="border">
                <div className="shadow-md relative w-full aspect-square">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="rounded-lg"
                    />
                    <Chip size="sm" className="absolute top-2 right-2">{product.category}</Chip>
                </div>
                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.brand}</p>
                <div className="flex gap-5">
                    <p className="text-green-600 font-semibold">$ {product.price}</p>
                    <Separator orientation="vertical"/>
                    <div className="flex gap-2 items-center">
                        <FcRating />
                        <p className="text-orange-600 font-semibold">{product.rating}</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full my-3">View Product</Button>
            </Card>

        </div>
    );
};

export default ProductCard;