let inputField = "";
const validIntegers = ['0','1','2','3','4','5','6','7','8','9','A','B']

function DebugBox() {
	let basicInteger = new Integer(1,2);
	document.getElementById('debug').innerHTML = basicInteger.number;
}

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
	document.getElementById('debug').innerHTML = "";
}

function CalculateInput() {

	const charArray = [];
	for (let char of inputField) {
		charArray.push(char);
	}

	document.getElementById('debug').innerHTML = charArray;
}