// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apple",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 0.99
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "potato chips",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "ham",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.99
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 6.99
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.99
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.99
	}
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {


		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "VegetarianAndGlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "VegetarianAndOrganic") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "GlutenFreeAndOrganic") && (prods[i].organic == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if ((restriction == "VegetarianAndGlutenFreeAndOrganic") && (prods[i].organic == true) && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name + " $" + prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(productPrices) {
	totalPrice = 0;
	for (let i=0; i<productPrices.length; i+=1) {
		
		totalPrice += productPrices[i];
		
	}
	return totalPrice;
}