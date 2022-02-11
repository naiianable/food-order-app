import { useState } from "react";
import _, { add } from "lodash";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react/cjs/react.development";

export default function UserCart() {
	//setting localstorage data to state
	//had to do conditional or else it wouldnt recognize localstorage
	const [cartFromLocalStorage, setCartFromLocalStorage] = useState(() => {
		if (typeof window !== "undefined") {
			//setCartFromLocalStorage(JSON.parse(localStorage.getItem("userCart")));
			let cart = JSON.parse(localStorage.getItem("userCart"));
			return cart;
		}
	});
	useEffect(() => {
		setCartFromLocalStorage(cartFromLocalStorage);
		localStorage.setItem("userCart", JSON.stringify(cartFromLocalStorage));
	}, [cartFromLocalStorage]);

	//HOW TO UPDATE LOCAL STORAGE ONCLICK OF REMOVING ITEM
	function handleRemoveItem(id) {
		cartFromLocalStorage.map((item, index) => {
			if (item.id === id) {
				cartFromLocalStorage.splice(index, 1);
				//console.log("THIS IS THE ITEM", index);
			}
			console.log(cartFromLocalStorage);
		});
		// _.map(cartFromLocalStorage, (item) => {});
	}

	return (
		<div className="bg-gray-100">
			<div className="container mx-auto mt-10">
				<div className="flex shadow-md my-10">
					<div className="w-3/4 bg-white px-10 py-10">
						<div className="flex justify-between border-b pb-8">
							<h1 className="font-semibold text-2xl">
								Shopping Cart
							</h1>

							<h2 className="font-semibold text-2xl">
								{_.size(cartFromLocalStorage)} Items
							</h2>
						</div>
						<div className="flex mt-10 mb-5">
							<h3 className="font-semibold text-gray-600 text-lg uppercase w-3/5">
								Product Details
							</h3>
							{/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5 text-center">
								Quantity
							</h3> */}
							<h3 className="font-semibold text-center text-gray-600 text-lg uppercase w-2/5 text-center">
								Price
							</h3>
							{/* <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
								Total
							</h3> */}
						</div>

						{_.map(cartFromLocalStorage, (item) => {
							// console.log(item.modifiers);
							return (
								<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
									<div className="flex w-3/5">
										<div className="w-20 ">
											<Image
												className="h-24"
												src={item.image}
												height="100"
												width="100"
												alt=""
											/>
										</div>
										<div className="flex flex-col justify-between ml-4 flex-grow">
											<span
												className="font-bold text-sm"
												key="item"
											>
												{item.item}
											</span>
											{_.map(item.modifiers, (mod) => {
												return (
													<span
														className="text-red-500 text-xs"
														key="mods"
													>
														{mod}
													</span>
												);
											})}

											<a
												href="#"
												className="font-semibold hover:text-red-500 text-gray-500 text-xs"
												id={item.id}
												onClick={() =>
													handleRemoveItem(item.id)
												}
											>
												Remove
											</a>
										</div>
									</div>

									<span className="text-center w-2/5 font-semibold text-sm">
										${item.price.toFixed(2)}
									</span>
								</div>
							);
						})}
						<Link href="/">
							<a
								href="#"
								className="inline-flex font-semibold text-indigo-600 text-sm mt-10"
							>
								<svg
									className="fill-current mr-2 text-indigo-600 w-4"
									viewBox="0 0 448 512"
								>
									<path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
								</svg>
								Continue Shopping
							</a>
						</Link>
					</div>

					<div id="summary" className="w-1/4 px-8 py-10">
						<h1 className="font-semibold text-2xl border-b pb-8">
							Order Summary
						</h1>
						<div className="flex justify-between mt-10 mb-5">
							<span className="font-semibold text-sm uppercase">
								Items ({_.size(cartFromLocalStorage)})
							</span>
							<span className="font-semibold text-sm">
								$
								{_.sumBy(cartFromLocalStorage, (o) => {
									return o.price;
								})}
								.00
							</span>
						</div>

						{/* <div className="flex justify-between mt-10 mb-5">
							<span className="font-semibold text-sm uppercase">
								Tax
							</span>
							<span className="font-semibold text-sm">
								$
								{_.sumBy(cartFromLocalStorage, (o) => {
									let tax = o.price * 0.04712;
									return +tax.toFixed(2);
								})}
							</span>
						</div> */}

						<div className="border-t mt-8">
							<div className="flex font-semibold justify-between py-6 text-sm uppercase">
								<span>Total cost</span>
								<span>
									$
									{_.sumBy(cartFromLocalStorage, (o) => {
										let total = o.price * 1.04712;
										return o.price;
									})}
									.00
								</span>
							</div>

							<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
