let operation = "+";
let operand = "";
let result = "0";

function operate(a, b, operation) {
	if (!operand) return a;
	if (operation === "+") return a + b;
	else if (operation === "-") return a - b;
	else if (operation === "*") return a * b;
	else if (operation === "/") return a / b;
	else if (operation === "=") return a;
}

function operatorOnClickEventListener(operator) {
	result = operate(+result, +operand, operation);
	operand = "";
	operation = operator.innerText;
	document.querySelector(".result").textContent = result;
	document.querySelector(".operand").textContent = operand;
	// console.log(result);
}

function resetCalculator() {
	operation = "+";
	operand = "";
	result = "0";
	document.querySelector(".result").textContent = "";
	document.querySelector(".operand").textContent = "0";
	// console.log("reset");
}

function setOperatorEventListeners() {
	const operators = Array.from(document.querySelectorAll(".operator"));
	operators.forEach((operator) =>
		operator.addEventListener("click", () =>
			operatorOnClickEventListener(operator)
		)
	);

	const calc = document.querySelector(".calc");
	calc.addEventListener("click", () => operatorOnClickEventListener(calc));

	const clr = document.querySelector(".digits .clear");
	clr.addEventListener("click", resetCalculator);
}

function setDigitEventListeners() {
	const digits = Array.from(document.querySelectorAll(".digit"));
	digits.forEach((digit) =>
		digit.addEventListener("click", () => {
			operand += digit.innerText;
			document.querySelector(".operand").textContent = operand;
		})
	);
}

setOperatorEventListeners();
setDigitEventListeners();
resetCalculator();
