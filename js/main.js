(() =>{
   //this is a self invoking function
 
   	console.log('We are Live');


//select elements with Javascript
//setting up a variable using let keyword
//and using a CSS selector to find the element we want to use
//let stores the reference to element as a variable(in memory)
	let mainHeadLine = document.querySelector(".main-headline"),
		// svgGraphic = document.querySelector("#badgeSVG"),
		subHead = document.querySelector("#raster-vector h3"),
		//headerThreeTest = document.querySelector(".javatest"),
		swapTextButton = document.querySelector(".switch-type"),
		allImages = document.querySelectorAll("#image-container img"),
		objectButton = document.querySelector(".container button");

		//querySelectorAll is a One to Many Selector

//functions are reuseable pieces of code
//that you can run any time
 	function logMyId(){
 		console.log(this.id);

 		this.style.opacity = 0.5;
 	}

 	function swapText(){
 		mainHeadLine.textContent = "Now you're something else!";
 		mainHeadLine.classList.toggle("selected");
 		subHead.textContent = "You're also something else!";
 		subHead.classList.toggle("selected");
 	}

 	function logTheSVG() {
 		console.log(this.previousElementSibling.id);
 	}
// events alwasy go down here
	// svgGraphic.addEventListener("click",logMyId);

	swapTextButton.addEventListener("click", swapText)

	// select and loop through a bunch of items at once -> one to many relationship
	allImages.forEach(item => {
		item.addEventListener("click", logMyId);
	});

	// the button beside the svg objectButton
	objectButton.addEventListener("click", logTheSVG)

	//mainHeadLine.textContent = "Now you're something else!";

	//headerThreeTest.textContent = "SHAZAM!";


})();