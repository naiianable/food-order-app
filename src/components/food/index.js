import React from "react";
import Image from "next/image";

import GoBack from "../goBack";

const Food = () => {
	return (
		<div>
			{/* <section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
							<Image
								alt="ecommerce"
								src={friesData.image}
								width="400"
								height="400"
							/>
						</div>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{friesData.item} - ${getTotalPrice()}
							</h1>

							<p className="leading-relaxed">
								Fam locavore kickstarter distillery. Mixtape
								chillwave tumeric sriracha taximy chia
								microdosing tilde DIY. XOXO fam indxgo
								juiceramps cornhole raw denim forage brooklyn.
								Everyday carry +1 seitan poutine tumeric.
								Gastropub blue bottle austin listicle pour-over,
								neutra jean shorts keytar banjo tattooed umami
								cardigan.
							</p>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 gap-4 mb-5">
								{_.map(addOns, (mod) => {
									//console.log("THIS IS MOD", mod);
									return (
										<div className="flex">
											<span className="mr-3">
												Add {mod.item} $
												{mod.price.toFixed(2)}
											</span>
											<input
												className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
												type="radio"
												checked={mod.checked}
												value="2"
												onClick={() =>
													updateAddOns(mod.id)
												}
												onChange={(e) => {}}
											/>
										</div>
									);
								})}
							</div>
							<div className="flex">
								<GoBack />

								<button
									className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
									onClick={handleAddToCart}
									onChange={(e) => {}}
								>
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Food;
