// Calculator Script 
// Prompt calls and variables
const firstNum = getInputNumber("Enter first number"); // get the number from user
const secondNum = getInputNumber("Enter second number");
const operation = getInputOperation("Enter the math operation (only +, -, / or *)");
const sum = calculate(firstNum, secondNum, operation);
if (sum != null) { alert(`Result of ${firstNum} ${operation} ${secondNum} = ${sum}`); };

// User must enter input which is parsable to a number
function getInputNumber(message) {
	let input;
	let number;

	while (true) {
		input = prompt(message);

		// Check if it's parsable (make sure to trim and check for "" because some blankspace makes weird things happen)
		if (input == null || input.trim() === "") { // https://stackoverflow.com/a/10232443
			console.log(`Input was "${input}". Returning to start of loop.`);
			continue;
		}

		// We have some input, might be a string tho. try to parse it 
		number = Number(input);

		// if non parsable we will get NaN
		if (isNaN(number)) {
			console.log(`Input was "${input}". Returning to start of loop.`);
			continue;
		} else {
			// good input by now
			console.log(`Returning input: ${input} as number: ${number}`)
			return number;
		}
	}
}

// User must enter operation input
function getInputOperation(message) {
	let operation;
	const allowedOperations = ["+", "-", "/", "*"];

	while (true) {
		operation = prompt(message);

		// Check if it was allowed 
		if (allowedOperations.includes(operation)) {
			console.log(`Returning input: ${operation} as string`);
			return operation;
		} else {
			console.log(`Input was "${operation}". Returning to start of loop.`);
		}
	}
}

// Function that executes the calculation
function calculate(a, b, operation) {
	if (operation === "+") {
		return a + b;
	} else if (operation === "-") {
		return a - b;
	} else if (operation === "*") {
		return a * b;
	} else if (operation === "/") {
		if (a || b === 0) {
			alert(`Impossible to divide by 0!`);
			return null;
		} else {
			return a / b;
		}
	} else {
		alert(`Some kind of unknown state has occured. Error!`);
		return null;
	}
}