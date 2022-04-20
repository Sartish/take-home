import { HTMLAttributes } from "react";
import { useGetProductsQuery } from "../store/services/products";


import ProductCard from "./ProductCard";

const ProductList: React.FC<HTMLAttributes<HTMLUListElement>> = (props) => {
	const { data: products = [] } = useGetProductsQuery();


	return (
		<div className="flex justify-center items-center flex-col" >
			<h1 className="font-Montserrat">All Products</h1>
			<div className="flex justify-center">
				<ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4" {...props}>
					{products.map((product) => (
						<li key={product.productId} >
							<ProductCard product={product} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductList;
