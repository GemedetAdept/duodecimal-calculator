let inputField = "";

function NumberPress(buttonValue) {

	inputField += buttonValue;
	document.getElementById('textto').innerHTML = inputField;
}

function Delete() {
	inputField = inputField.slice(0, -1);
	document.getElementById('textto').innerHTML = inputField;
}