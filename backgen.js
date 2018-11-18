var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");
var gradDisp = document.getElementById('gradDisp');
var random  =document.getElementById('random');
var k,i,hex='#',box1,box2,box3,box4;
var grdntArr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value +"," + color3.value +"," + color4.value + ")";
    //displays cuurent background parameter
    gradDisp.textContent = body.style.background + ";";
}

random.addEventListener('click',function(){
			    box1=randomCode();
				box2=randomCode();
				box3=randomCode();
				box4=randomCode();
				body.style.background="linear-gradient(to right, " + box1 +"," + box2 +"," + box3 +"," + box4 + ")";
				color1.value=box1;
				color2.value=box2;
				color3.value=box3;
				color4.value=box4;
				//displays cuurent background parameter
				gradDisp.textContent = body.style.background + ";";
})

function randomCode(){
	        hex='#';
			for(i=0;i<6;i++){
				   //generates random hex value from grdntArr
					k=Math.floor(Math.random() * 16)
					hex=hex+grdntArr[k];
			     }
			     console.log(hex);
			     return hex;
			   }  
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
color4.addEventListener("input", setGradient);
