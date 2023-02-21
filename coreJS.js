let inputField = "";

function NumberPress(buttonValue) {

	inputField += buttonValue;
	if (document.getElementById('checkBox').checked)
		document.getElementById('textto').innerHTML = inputField;
	else
		document.getElementById('textto').innerHTML = "Unchecked :(";
}

function Delete() {
	inputField = inputField.substring(0, inputField.length - 1);
	document.getElementById('textto').innerHTML = inputField;
}