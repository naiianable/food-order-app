const data = {
	burgers: [
		{
			id: "hamburger",
			item: "Hamburger",
			price: 10,
			image: "https://www.spendwithpennies.com/wp-content/uploads/2019/05/Classic-Burger-SpendWithPennies_-2.jpg",
			modifiers: [],
		},
		{
			id: "cheeseburger",
			item: "Cheeseburger",
			price: 12,
			image: "https://www.spendwithpennies.com/wp-content/uploads/2020/10/Air-Fryer-Hamburgers-SpendWithPennies-6.jpg",
			modifiers: [],
		},
	],
	sides: [
		{
			id: "fries",
			item: "Fries",
			price: 4,
			image: "https://www.spendwithpennies.com/wp-content/uploads/2013/10/Crispy-Oven-Fries-SpendWithPennies-27.jpg",
			modifiers: [],
		},
		{
			id: "chips",
			item: "Chips",
			price: 3,
			image: "https://www.spendwithpennies.com/wp-content/uploads/2021/03/Air-Fryer-Potato-Chips-SpendWithPennies-12.jpg",
			modifiers: [],
		},
	],
	burgerMods: [
		{
			id: "bacon",
			item: "Bacon",
			detail: "Add Bacon",
			price: 2,
		},
		{
			id: "tomato",
			item: "Tomato",
			detail: "Extra Tomato",
			price: 1,
		},
		{
			id: "sauce",
			item: "Sauce",
			detail: "Extra Sauce",
			price: 1,
		},
	],
	sideMods: [
		{
			id: "cheese",
			item: "Cheese",
			detail: "Add Cheese",
			price: 1,
		},
		{
			id: "chili",
			item: "Chili",
			detail: "Add Chili",
			price: 2,
		},
		{
			id: "onion",
			item: "Onion",
			detail: "Add Onion",
			price: 1,
		},
	],
	cart: [],
};

export default data;
