import { HTMLAttributes } from "react";
import { useGetBasketQuery, usePostBasketMutation } from "../store/services/basket";

const Basket: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
	const { data = [] } = useGetBasketQuery();
	const [updateBasket, { isLoading }] = usePostBasketMutation()

	const handleRemoveFromBasket = (productId: string) => {
		// filter out product id without same id
		updateBasket(data.filter((p) => p.productId !== productId))
		return console.log("clicked")
	};

	return (
		<>
			{isLoading ? <div>...is loading products</div> : (
				// <div {...props}>
				<div className="">
					<h1 className="font-montserrat text-xl2 text-center font-Montserrat">Basket</h1>
					<ul>
						{data.map((product) => (
							<li className="flex justify-between gap-4 rounded overflow-hidden shadow-lg m-4 p-2" key={product.productId}>
								<p className="font-Catamaran">{product.productName}</p>
								<button onClick={() => handleRemoveFromBasket(product.productId)}>
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
									</svg>
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);

};

export default Basket;
