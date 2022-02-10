import Link from "next/link";
import Image from "next/image";
import Layout from "../src/components/layout";

import data from "../src/data";

export default function Burgers({ cart }) {
	const { sides } = data;

	return (
		<div>
			<Layout>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap -m-4">
							{sides.map((item) => {
								return (
									<Link
										href={`sides/${item.id}`}
										id={item.id}
										key={item.id}
									>
										<a className="xl:w-1/4 md:w-1/2 p-4">
											{/* <Sandwich item={item} /> */}
											<div
												className="bg-gray-100 p-6 rounded-lg"
												id={item.id}
												key={item.id}
											>
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
						</div>
					</div>
				</section>
			</Layout>
		</div>
	);
}
