
function chocolateHandler(){

	var numberPlace = document.getElementById('chocolate-counter').innerText;

	if (numberPlace.length === 0) {
		document.getElementById('chocolate-counter').innerText = "1";
	} else {
		var currentNumber = parseInt(numberPlace);
		document.getElementById('chocolate-counter').innerText = currentNumber + 1;
	}
};

document.getElementById('chocolate').onclick = chocolateHandler;

function lemonHandler(){

	var numberPlace = document.getElementById('lemon-counter').innerText;

	if (numberPlace.length === 0) {
		document.getElementById('lemon-counter').innerText = "1";
	} else {
		var currentNumber = parseInt(numberPlace);
		document.getElementById('lemon-counter').innerText = currentNumber + 1;
	}
};


document.getElementById('lemon').onclick = lemonHandler;

function sugarHandler(){

	var numberPlace = document.getElementById('sugar-counter').innerText;

	if (numberPlace.length === 0) {
		document.getElementById('sugar-counter').innerText = "1";
	} else {
		var currentNumber = parseInt(numberPlace);
		document.getElementById('sugar-counter').innerText = currentNumber + 1;
	}
};


document.getElementById('sugar').onclick = sugarHandler;




function cookieCreator(){


	var number = parseInt(document.getElementById('chocolate-counter').innerText);
		chocString = "Chocolate=" + number;

	if (number > 0) {
		document.cookie = chocString;
	} else {document.cookie = "Chocolate=0"}

	var numberLemon = parseInt(document.getElementById('lemon-counter').innerText);
		lemonString = "Lemon=" + numberLemon;

	if (numberLemon > 0) {
		document.cookie = lemonString;
	} else {document.cookie = "Lemon=0"}

	var numberSugar = parseInt(document.getElementById('sugar-counter').innerText);
		sugarString = "Sugar=" + numberSugar;

	if (numberSugar > 0) {
		document.cookie = sugarString;
	} else {document.cookie = "Sugar=0"}

};

document.getElementById('submitCookies').onclick = cookieCreator;


function cookieClear() {
	document.cookie = "Chocolate=0"
	document.cookie = "Lemon=0"
	document.cookie = "Sugar=0"
}


document.getElementById('clearCookies').onclick = cookieClear;


