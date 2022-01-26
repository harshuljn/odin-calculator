function operate(a, b, operation) {
	if (!operand) return a;
	if (operation === "+") return a + b;
	else if (operation === "-") return a - b;
	else if (operation === "*") return a * b;
	else if (operation === "/") return a / b;
	else if (operation === "=") return a;
}

let operation = "+";
let operand = "";
let result = "0";

function operatorOnClickEventListener(operator) {
	result = operate(+result, +operand, operation);
	operand = "";
	operation = operator.innerText;
	console.log(result);
}

const operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach((operator) =>
	operator.addEventListener("click", () =>
		operatorOnClickEventListener(operator)
	)
);

const digits = Array.from(document.querySelectorAll(".digit"));
digits.forEach((digit) =>
	digit.addEventListener("click", () => (operand += digit.innerText))
);

const calc = document.querySelector(".calc");
calc.addEventListener("click", () => operatorOnClickEventListener(calc));
