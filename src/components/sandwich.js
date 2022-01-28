import Image from "next/image";
import Link from "next/link";

export default function Sandwich({ item }) {
	console.log(item);
	return (
		<div
			className="bg-gray-100 p-6 rounded-lg"
			id={item.id}
			key={item.id}
			item={item}
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
				Fingerstache flexitarian street art 8-bit waistcoat. Distillery
				hexagon disrupt edison bulbche.
			</p>
		</div>
	);
}
