import React from "react";
import { useRouter } from "next/router";

export default function GoBack() {
	const router = useRouter();
	return (
		<button
			className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
			onClick={() => {
				router.back();
			}}
		>
			Go Back
		</button>
	);
}
