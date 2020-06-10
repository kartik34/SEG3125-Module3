// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1) {
    var s1 = slct1;
    var s2;

    console.log(slct1);
	
	//clear divs first
	document.getElementById("fruitveg").innerHTML = "";
	document.getElementById("breadcereals").innerHTML = "";
	document.getElementById("protein").innerHTML = "";
	document.getElementById("snacks").innerHTML = "";
	document.getElementById("supplies").innerHTML = "";
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];


		var actualName = productName.substr(0, productName.length -6); 


		var category = getCategory(products, actualName);
		s2 = document.getElementById(category);

		console.log(actualName);
		console.log(category);
		
		// create image for the item


		var url = getImageURL(products, actualName); 

		console.log(url)

		//this javascript code is modified from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create

		var x = document.createElement("IMG");
		x.setAttribute("src", url);
		x.setAttribute("width", "80");
		x.setAttribute("alt", actualName);
		s2.appendChild(x);
		
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);


		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

function getImageURL(products, product){
	for (let i=0; i<products.length; i+=1) {
		if(products[i].name == product){
			return products[i].image;
		}

	}
}

function getCategory(products, product){
	for (let i=0; i<products.length; i+=1) {
		if(products[i].name == product){
			return products[i].category;
		}

	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var priceProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {

			//create image
			var actualName = ele[i].value.substr(0, ele[i].value.length -6); 
			var url = getImageURL(products, actualName); 

			//this javascript code is modified from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create

			var x = document.createElement("IMG");
			x.setAttribute("src", url);
			x.setAttribute("width", "80");
			x.setAttribute("alt", actualName);
			para.appendChild(x);

			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			var price = parseFloat(ele[i].value.substr(ele[i].value.length - 4));
			priceProducts.push(price); 
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(priceProducts)));
		
}

//following javascript code is from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//following javascript code is from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

