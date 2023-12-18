import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {

    const {products} = useLoaderData();
    // console.log(products)

    return (
        <div className="max-w-6xl mx-auto py-5">
           <div className="grid grid-cols-3 gap-5 ">
            {
                products?.map(product => <ProductsCard key={product.id} product ={product}></ProductsCard>)
            }
           </div>
        </div>
    );
};

export default Products;