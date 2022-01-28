import Header from "../header";
import Footer from "../footer";

export default function Layout({ children, burgers }) {
	// console.log("THIS IS BURGERS", burgers);
	return (
		<div>
			<Header />
			<div className="min-h-70vh">{children}</div>
			<Footer />
		</div>
	);
}
