import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Take-home test</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Catamaran&family=Montserrat&display=swap" rel="stylesheet" />
			</Head>

			<main className="p-4">
				<h1>
					<strong>Take-home test</strong>
				</h1>

				<p>
					Choose <em>one</em> task:
				</p>

				<section>
					<ol className="space-y-4">
						<li>
							<header>
								<strong>Task 1</strong>
							</header>
							<p>
								Implement the <code>ProductCard</code> component. It should
								render the product information, like <code>productName</code>,{" "}
								<code>productImage</code> and <code>stock</code>. It should also
								have a button to add/remove from the basket. Since we are not
								providing a design alonside this task, the functionality,
								responsiveness and semantics will be weighed more. The{" "}
								<code>ProductCard</code> is already rendered through{" "}
								<code>ProductList</code>, and included on the{" "}
								<Link href="/store">store</Link> page.
							</p>
							<p>
								<strong>Bonus task: </strong> implement the function to remove a
								product from the basket in the <code>Basket</code> component.
							</p>
						</li>
						<li>
							<p>
								<strong>Task 2</strong>
							</p>
							<p>
								The basket redux api in <code>/store/services/basket</code> can
								currently only post the whole basket, it would be better to have{" "}
								<code>addProduct</code> or <code>removeProduct</code>{" "}
								functionality instead. Can you implement those endpoints without
								changing the underlying api?
							</p>
						</li>
						<li>
							<p>
								<strong>Task 3</strong>
							</p>
							<p>
								Implement pagination in the <code>/products</code> api, as well
								as in the <code>ProductList</code> component.
							</p>
						</li>
					</ol>
				</section>

				<section>
					<header>
						<strong>Additional information</strong>
					</header>

					<p>
						You are free to implement the tasks in either JavaScript or
						TypeScript. And you can also ignore TailwindCSS and use any other
						preferred way of styling.
					</p>

					<p>
						The <Link href="/store">store</Link> page is already implemented,
						and all the components required for these tasks are there.
					</p>
				</section>

				<section>
					<header>
						<strong>Resources</strong>
					</header>

					<ul>
						<li>
							<a
								href="https://nextjs.org/docs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Next.js docs
							</a>
						</li>

						<li>
							<a
								href="https://redux-toolkit.js.org/usage/usage-guide"
								target="_blank"
								rel="noopener noreferrer"
							>
								Redux Toolkit docs
							</a>
						</li>

						<li>
							<a
								href="https://redux-toolkit.js.org/rtk-query/usage/mutations"
								target="_blank"
								rel="noopener noreferrer"
							>
								Redux Toolkit Query (mutations)
							</a>
						</li>

						<li>
							<a
								href="https://tailwindcss.com/docs/installation"
								target="_blank"
								rel="noopener noreferrer"
							>
								TailwindCSS Docs
							</a>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
}
