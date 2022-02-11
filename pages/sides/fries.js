import { useState, useEffect } from "react";
import _, { add } from "lodash";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../src/components/layout";
import GoBack from "../../src/components/goBack";
import data from "../../src/data";

export default function Hamburger() {
	const [cart, setCart] = useState([]);
	const [addToCart, setAddToCart] = useState(false);
	const [friesData, setFriesData] = useState(data.sides[0]);
	const [friesPrice, setFriesPrice] = useState(4);
	const [currentOrder, setCurrentOrder] = useState(data.sides[0]);

	let sideMods = _.keyBy(data.sideMods, "id");
	_.map(sideMods, (mod) => {
		mod.checked = false;
	});

	const [addOns, setAddOns] = useState(sideMods);
	//console.log(addOns);

	function updateAddOns(id) {
		setAddOns((prevState) => {
			// console.log("THIS IS PREVSTATE", prevState);
			// console.log("THIS IS PREVSTATE[id]", prevState[id]);
			return {
				...prevState,
				[id]: {
					//if previous state isnt brought in here, object will only be checked
					...prevState[id],
					checked: prevState[id].checked ? false : true,
				},
			};
		});
	}

	const getTotalPrice = () => {
		let total = friesPrice;
		_.forEach(addOns, (mod) => {
			if (mod.checked) total += mod.price;
		});

		// console.log(total);
		return total;
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			let userCart = localStorage.getItem("userCart");
			if (userCart) {
				setCart(JSON.parse(userCart));
			}
		}
	}, []);

	//updating hamburgerData state price when addOns state is changed
	useEffect(() => {
		setCurrentOrder({
			...currentOrder,
			price: getTotalPrice(),
		});
	}, [addOns]);
	//console.log("THIS IS USE EFFECT", hamburgerData);

	function handleAddToCart() {
		//loop through addon object, check to see if checked is true, add to hamburger data
		currentOrder.modifiers = [];
		currentOrder.id = Math.floor(Math.random() * 100);
		_.forEach(addOns, (mod) => {
			if (mod.checked) {
				//pushing the the checked mods to the currentOrder state on add to cart click
				currentOrder.modifiers.push(mod.detail);
				//console.log("THESE ARE THE MODS", mod);
			}
		});

		console.log("THIS IS THE ORDER", currentOrder);
		//add hamburger hamburgerPrice to data cart array
		setCart([...cart, currentOrder]);
		setAddToCart(true);

		setTimeout(() => {
			setAddToCart(false);
		}, 3000);
	}

	useEffect(() => {
		//so localstorage persists on hamburger page refresh
		localStorage.setItem("userCart", JSON.stringify(cart));
	}, [cart]);

	return (
		<Layout cart={cart}>
			{addToCart && (
				<div
					className="bg-green-100 fixed top-8 right-0 w-1/6 m-8 text-green-700 px-4 py-3 text-center rounded animate-fade"
					role="alert"
				>
					<strong className="font-bold ">Added To Cart!</strong>
				</div>
			)}
			<section className="text-gray-600 body-font overflow-hidden">
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

								<Link href="#" passHref>
									<button
										className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
										onClick={handleAddToCart}
										onChange={(e) => {}}
									>
										Add To Cart
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
