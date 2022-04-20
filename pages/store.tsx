import Head from "next/head";
import Link from "next/link";
import Basket from "../components/Basket";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
	return (
		<>
			<Head>
				<title>Store</title>
			</Head>

			<header className="p-4">
				<Link href="/">&lt; Back to home page</Link>
			</header>

			<main className="tablet:w-[98%] flex justify-center">
				<section className="flex flex-col justify-between p-2 gap-4 tablet:flex-row">
					<Basket className="p-4 mr-8 border" />
					<ProductList />
				</section>
			</main>
		</>
	);
}
