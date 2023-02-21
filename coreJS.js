let inputField = "";

function NumberPress(buttonValue) {

	inputField += buttonValue;
	document.getElementById('textto').innerHTML = inputField;
}

function Delete() {
	inputField = inputField.slice(0, -1);
	document.getElementById('textto').innerHTML = inputField;
}

function ClearDisplay() {
	inputField = "";
	document.getElementById('textto').innerHTML = inputField;
}

function CalculateInput(rawInput) {

	const charArray = [];
	for (let char of rawInput) {
		charArray.push(char);
	}
}