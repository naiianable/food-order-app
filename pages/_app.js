import { useState } from "react";

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
	const [cart, setCart] = useState([]);

	return <Component {...pageProps} cart={cart} />;
}

export default MyApp;
