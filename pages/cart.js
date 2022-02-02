import { useState } from "react";
import Image from "next/image";
// import data from "../src/data";

import Header from "../src/components/header";
import Footer from "../src/components/footer";
import UserCart from "../src/components/cart";

export default function Cart() {
	const [cart, setCart] = useState([]);
	console.log("THIS IS CART", cart);

	return (
		<>
			<Header />
			<UserCart />
			<Footer />
		</>
	);
}
