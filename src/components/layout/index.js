import Header from "../header";
import Footer from "../footer";

export default function Layout({ children, cart }) {
	//console.log(cart);
	return (
		<div>
			<Header cart={cart} />
			<div className="min-h-70vh">{children}</div>
			<Footer />
		</div>
	);
}
