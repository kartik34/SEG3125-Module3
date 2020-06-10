// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 0.99,
		image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Honeycrisp-Apple.jpg",
		category: "fruitveg"
	},
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99,
		image: "https://i5.walmartimages.ca/images/Enlarge/094/505/6000200094505.jpg",
		category: "fruitveg"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "https://bakingamoment.com/wp-content/uploads/2020/01/IMG_7173-white-bread-2.jpg",
		category: "breadcereals"
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49,
		image: "https://www.cdc.gov/features/salmonellaeggs/salmonellaeggs_1024px.jpg",
		category: "protein"
	},
	{
		name: "potato chips",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49,
		image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Potato-Chips.jpg",
		category: "snacks"
	},
	{
		name: "butter",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99,
		image: "https://media.istockphoto.com/photos/butter-isolated-on-white-picture-id177834117?k=6&m=177834117&s=612x612&w=0&h=TWOC59dz208aXkSZ1M863ZzPHjV3XYq6FFWhgtH110I=",
		category: "supplies"
	},
	{
		name: "ham",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.99,
		image: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2019/11/spiced_ham.jpg",
		category: "protein"
	},
	{
		name: "milk",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 6.99,
		image: "https://dairyfarmersofcanada.ca/sites/default/files/image_file_browser/article/2019/getty-854296650.jpg",
		category: "protein"
	}, 
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 9.99,
		image: "https://cdn.drweil.com/wp-content/uploads/2016/09/diet-nutrition_food-safety_worms-in-salmon_6922773-600x450.jpg",
		category: "protein"
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.99,
		image: "https://thumbor.thedailymeal.com/lfvreKMLztuCpXZDDF0aI570_VY=/870x565/https://www.thedailymeal.com/sites/default/files/2018/04/12/11_Cheerios_slide_Edit_1.jpg",
		category: "breadcereals"
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
	return totalPrice.toPrecision(4);
}