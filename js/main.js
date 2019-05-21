(() =>{
   //this is a self invoking function
   

   	console.log('fired');


//select elements with Javascript
//setting up a variable using let keyword
//and using a CSS selector to find the element we want to use
//let stores the reference to element as a variable(in memory)
	let svgGraphic = document.querySelector("#badgeSVG");
		mainHeadLine = document.querySelector(".main-headline");
		headerThreeTest = document.querySelector(".javatest")

//functions are reuseable pieces of code
//that you can run any time
 	function logMyId(){
 		console.log(this.id);

 		this.style.opacity = 0.5;
 	}

	svgGraphic.addEventListener("click",logMyId);

	mainHeadLine.textContent= "Now you're something else!";

	headerThreeTest.textContent = "SHAZAM!";
})();