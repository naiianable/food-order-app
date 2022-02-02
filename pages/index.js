import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../src/components/layout";

const cheeseburgerMenuPic =
	"https://www.spendwithpennies.com/wp-content/uploads/2020/10/Air-Fryer-Hamburgers-SpendWithPennies-6.jpg";
const sidesMenuPic =
	"https://www.spendwithpennies.com/wp-content/uploads/2013/10/Crispy-Oven-Fries-SpendWithPennies-27.jpg";

export default function Home({ cart }) {
	// const [cart, setCart] = useState([]);
	console.log(cart);

	return (
		<div>
			<Layout>
				<Head>
					<title>Food Order App</title>
					<meta name="description" content="Food Order App" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap w-full mb-20">
							<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
								<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
									Menu
								</h1>
								<div className="h-1 w-20 bg-indigo-500 rounded"></div>
							</div>
							<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
								Whatever cardigan tote bag tumblr hexagon
								brooklyn asymmetrical gentrify, subway tile poke
								farm-to-table. Franzen you probably havent heard
								of them man bun deep jianbing selfies heirloom
								prism food truck ugh squid celiac humblebrag.
							</p>
						</div>

						<div className="flex flex-wrap -m-4">
							<Link href="/burgers">
								<a className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<Image
											className="h-40 rounded w-full object-cover object-center mb-6"
											src={cheeseburgerMenuPic}
											height="400"
											width="720"
											alt="content"
										/>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Burgers
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art
											8-bit waistcoat. Distillery hexagon
											disrupt edison bulbche.
										</p>
									</div>
								</a>
							</Link>

							<Link href="/sides">
								<a className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<Image
											className="h-40 rounded w-full object-cover object-center mb-6"
											src={sidesMenuPic}
											height="400"
											width="720"
											alt="content"
										/>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Sides
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art
											8-bit waistcoat. Distillery hexagon
											disrupt edison bulbche.
										</p>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}
