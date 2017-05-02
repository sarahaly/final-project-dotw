var container = document.getElementById("container");
var resetBtn = document.getElementById("reset");
var wind = document.getElementById("wind");
var ether = document.getElementById("ether");
var earth = document.getElementById("earth");
var fire = document.getElementById("fire");

wind.addEventListener("click", changeImg); 
ether.addEventListener("click", changeImg); 
earth.addEventListener("click", changeImg); 
fire.addEventListener("click", changeImg); 
resetBtn.addEventListener("click", reset); 


function changeImg(){
	console.log(this);
	container.innerHTML = ""; 
	container.classList.add(this.id);
	resetBtn.classList.remove("hide");	
}

function reset(){ 
	var grid = "<table id='grid' style='width:100%;'><tr><div class='overlay'><img id='wind' src='thumbnails/1.png'></div><div class='overlay'><img id='ether' src='thumbnails/2.png'></div><div class='overlay'><img id='fire' src='thumbnails/3.png'></div><div class='overlay'><img id='earth' src='thumbnails/4.png'></div></tr></table>";
	container.classList.remove("wind");
	container.classList.remove("fire");
	container.classList.remove("ether");
	container.classList.remove("earth");

	resetBtn.classList.add("hide");

	container.innerHTML = grid;

	wind = document.getElementById("wind");
	ether = document.getElementById("ether");
	earth = document.getElementById("earth");
	fire = document.getElementById("fire");
	
	wind.addEventListener("click", changeImg); 
ether.addEventListener("click", changeImg); 
earth.addEventListener("click", changeImg); 
fire.addEventListener("click", changeImg); 
resetBtn.addEventListener("click", reset); 
	
}

	

	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
		console.log(overlays);
			/*
function display(){ 
				console.log(this);
			}
			
			for(var i = 0; overlays.length; i++){
				console.log(overlays[i]);
				//overlays[i].addEventListener("click", display);
}
*/