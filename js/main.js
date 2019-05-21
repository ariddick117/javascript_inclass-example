(() =>{
   //this is a self invoking function
   

   	console.log('We are Live');


//select elements with Javascript
//setting up a variable using let keyword
//and using a CSS selector to find the element we want to use
//let stores the reference to element as a variable(in memory)
	let svgGraphic = document.querySelector("#badgeSVG"),
		mainHeadLine = document.querySelector(".main-headline"),
		subHead = document.querySelector("#raster-vector h3")
		//headerThreeTest = document.querySelector(".javatest"),
		swapTextButton = document.querySelector(".switch-type");

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
 	}

// events alwasy go down here
	svgGraphic.addEventListener("click",logMyId);

	swapTextButton.addEventListener("click", swapText)

	//mainHeadLine.textContent = "Now you're something else!";

	//headerThreeTest.textContent = "SHAZAM!";


})();