import Header from "../header";
import Footer from "../footer";

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<div className="min-h-70vh">{children}</div>
			<Footer />
		</div>
	);
}
