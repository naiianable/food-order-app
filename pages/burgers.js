import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/layout";

import data from "../src/data";

const hamburgerMenuPic =
	"https://www.spendwithpennies.com/wp-content/uploads/2019/05/Classic-Burger-SpendWithPennies_-2.jpg";
const cheeseburgerMenuPic =
	"https://www.spendwithpennies.com/wp-content/uploads/2020/10/Air-Fryer-Hamburgers-SpendWithPennies-6.jpg";

export default function Burgers() {
	const { burgers } = data;
	// console.log("THIS IS BURGERS", burgers);
	return (
		<div>
			<Layout burgers={burgers}>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap -m-4">
							{burgers.map((item) => {
								return (
									<Link
										href={`burgers/${[item.id]}`}
										id={item.id}
										key={item.id}
									>
										<a className="xl:w-1/4 md:w-1/2 p-4">
											<div className="bg-gray-100 p-6 rounded-lg">
												<Image
													className="h-40 rounded w-full object-cover object-center mb-6"
													src={item.image}
													height="400"
													width="720"
													alt="content"
												/>
												<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
													{item.item}
												</h2>
												<p className="leading-relaxed text-base">
													Fingerstache flexitarian
													street art 8-bit waistcoat.
													Distillery hexagon disrupt
													edison bulbche.
												</p>
											</div>
										</a>
									</Link>
								);
							})}
							{/* <Link href="/burgers" id="hamburger">
								<a className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<Image
											className="h-40 rounded w-full object-cover object-center mb-6"
											src={hamburgerMenuPic}
											height="400"
											width="720"
											alt="content"
										/>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Hamburger
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art
											8-bit waistcoat. Distillery hexagon
											disrupt edison bulbche.
										</p>
									</div>
								</a>
							</Link>
							<Link href="/burgers" id="cheeseburger">
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
											Cheeseburger
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art
											8-bit waistcoat. Distillery hexagon
											disrupt edison bulbche.
										</p>
									</div>
								</a>
							</Link> */}
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}
