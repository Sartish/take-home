import { HTMLAttributes } from "react";
import { Product } from "../types";
import { useGetBasketQuery, usePostBasketMutation } from "../store/services/basket";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
	product: Product;
}

// should render the product infomration: 
//productName productImage, stock, add & remove button


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { data = [] } = useGetBasketQuery();
	const [setBasket, { isLoading }] = usePostBasketMutation()

	const handleAddProductClick = () => {
		//adding new product to existing data object

		const basketWithProductAdded = [...data, { ...product, productId: Math.random().toString() }]
		setBasket(basketWithProductAdded)
	}

	return (
		<>
			{isLoading ? <div>Loading...</div> : (
				<div className="flex jusitfy-center items-center flex-col rounded overflow-hidden shadow-lg p-4">
					<img alt="product image" src={product.productImage} />
					<h3 className="text-center font-Catamaran mt-2 text-base font-bold">{product.productName}</h3>
					<p className="font-Catamaran text-center text-base"><span>Current stock: </span> {product.stock}</p>
					<div className="text-center">
						<button className="font-catamaran bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddProductClick}>add</button>
					</div>

				</div>
			)}

		</>
	)
}

export default ProductCard;
